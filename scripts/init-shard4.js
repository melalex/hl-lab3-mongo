rs.initiate({
  _id: "shard4ReplSet",
  members: [
    { _id: 0, host: "hl-lab3-mongo-shard4-data-1:27017" },
    { _id: 1, host: "hl-lab3-mongo-shard4-data-2:27017" },
  ],
});
