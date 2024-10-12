sh.addShard("shard1ReplSet/hl-lab3-mongo-shard1-data-1:27017");
sh.addShard("shard1ReplSet/hl-lab3-mongo-shard1-data-2:27017");
sh.addShard("shard2ReplSet/hl-lab3-mongo-shard2-data-1:27017");
sh.addShard("shard2ReplSet/hl-lab3-mongo-shard2-data-2:27017");
sh.addShard("shard3ReplSet/hl-lab3-mongo-shard3-data-1:27017");
sh.addShard("shard3ReplSet/hl-lab3-mongo-shard3-data-2:27017");
sh.addShard("shard4ReplSet/hl-lab3-mongo-shard4-data-1:27017");
sh.addShard("shard4ReplSet/hl-lab3-mongo-shard4-data-2:27017");

db = db.getSiblingDB("Lab1");

db.createCollection("LondonAddress");

sh.enableSharding("LondonAddress");

db.adminCommand({
  shardCollection: "Lab1.LondonAddress",
  key: { Local_Authority_name: "hashed" },
  numInitialChunks: 3,
});
