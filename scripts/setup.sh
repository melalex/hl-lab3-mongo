docker-compose exec config sh -c "mongosh < /scripts/init-conf.js"

docker-compose exec shard1-data sh -c "mongosh < /scripts/init-shard1.js"
docker-compose exec shard2-data sh -c "mongosh < /scripts/init-shard2.js"
docker-compose exec shard3-data sh -c "mongosh < /scripts/init-shard3.js"
docker-compose exec shard4-data sh -c "mongosh < /scripts/init-shard4.js"

sleep 10s

docker-compose exec router sh -c "mongosh < /scripts/init-router.js"
