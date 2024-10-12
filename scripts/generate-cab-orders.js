function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomDate(start, end) {
  return new Date(
    start.getTime() + getRandomArbitrary(start.getTime(), end.getTime())
  );
}

let batchSize = 512;
let dataAmount = 1e9; // 1 GB

db = db.getSiblingDB("Lab1");

db.createCollection("CabOrder");

let cabOrder = db.getCollection("CabOrder")
let addresses = db.getCollection("LondonAddress");
let now = new Date();
let epoch = new Date(2012, 0, 1);
let feedBackCategory = [
  "FEEDBACK_CATEGORY_STUB_0",
  "FEEDBACK_CATEGORY_STUB_1",
  "FEEDBACK_CATEGORY_STUB_2",
  "FEEDBACK_CATEGORY_STUB_3",
  "FEEDBACK_CATEGORY_STUB_4",
  "FEEDBACK_CATEGORY_STUB_5",
  "FEEDBACK_CATEGORY_STUB_6",
  "FEEDBACK_CATEGORY_STUB_7",
  "FEEDBACK_CATEGORY_STUB_8",
  "FEEDBACK_CATEGORY_STUB_9",
];

while (cabOrder.totalSize() < dataAmount) {
  let batch = [];
  let startLoc = addresses.aggregate([{ $sample: { size: batchSize } }]);
  let finishLoc = addresses.aggregate([{ $sample: { size: batchSize } }]);

  for (i = 0; i < batchSize; i++) {
    let startDate = randomDate(epoch, now);
    let hasFeedback = Math.random() < 0.5 ? false : true;

    let order = {
      driverId: getRandomArbitrary(0, 2000),
      clientId: getRandomArbitrary(0, 4000),
      startId: startLoc.next()._id.toString(),
      finishId: finishLoc.next()._id.toString(),
      startAt: startDate,
      finishAt: new Date(
        startDate.getTime() + getRandomArbitrary(1.2e6, 3.6e6)
      ),
      price: getRandomArbitrary(12, 30),
    };

    if (hasFeedback) {
      order.driverFeedback = Array.from(
        { length: getRandomArbitrary(1, 5) },
        (v, k) =>
          feedBackCategory[getRandomArbitrary(0, feedBackCategory.length)]
      );
    }

    batch.push(order);
  }

  cabOrder.insertMany(batch);
}
