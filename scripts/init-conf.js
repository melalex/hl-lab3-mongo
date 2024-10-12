rs.initiate({
  _id: "configReplSet",
  configsvr: true,
  members: [
    { _id: 0, host: "hl-lab3-mongo-config-1:27017" },
    { _id: 1, host: "hl-lab3-mongo-config-2:27017" },
    { _id: 2, host: "hl-lab3-mongo-config-3:27017" },
  ],
});
