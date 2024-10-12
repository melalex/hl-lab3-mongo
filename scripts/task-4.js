let result = db.getSiblingDB("Lab1")
  .getCollection("CabOrder")
  .aggregate(
    [
      { $project: { driverFeedback: 1 } },
      {
        $unwind: {
          path: "$driverFeedback",
          preserveNullAndEmptyArrays: false,
        },
      },
      {
        $group: {
          _id: "$driverFeedback",
          count: { $count: {} },
        },
      },
      { $sort: { count: -1 } },
    ],
    { maxTimeMS: 60000, allowDiskUse: true }
  );

console.log(result)
