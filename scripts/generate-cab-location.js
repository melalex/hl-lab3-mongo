let batchSize = 500;
let cabsCount = 4000;

db = db.getSiblingDB("Lab1");

db.createCollection("CabLocation");

let cabLocation = db.getCollection("CabLocation");
let addresses = db.getCollection("LondonAddress");

for (i = 0; i < cabsCount; i += batchSize) {
  let batch = [];
  let loc = addresses.aggregate([{ $sample: { size: batchSize } }]);

  for (j = i; j < i + batchSize; j++) {
    let fake = {
      driverId: j,
      address: loc.next()._id.toString(),
    };

    batch.push(fake);
  }

  cabLocation.insertMany(batch);
}
