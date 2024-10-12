rs.initiate({
  _id: "shard2ReplSet",
  members: [
    { _id: 0, host: "hl-lab3-mongo-shard2-data-1:27017" },
    { _id: 1, host: "hl-lab3-mongo-shard2-data-2:27017" },
  ],
});
