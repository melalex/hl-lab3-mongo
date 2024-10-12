rs.initiate({
  _id: "shard3ReplSet",
  members: [
    { _id: 0, host: "hl-lab3-mongo-shard3-data-1:27017" },
    { _id: 1, host: "hl-lab3-mongo-shard3-data-2:27017" },
  ],
});
