# [Reserve Football Stadium Click here!](http://128.199.170.6:4200)

# Service port and ip

listfield-service     http://139.59.123.175:9001

admin-service         http://139.59.123.174:9002

manage-service        http://139.59.123.175:9003

reservation-service   http://139.59.123.172:9004

users-service         http://139.59.123.174:9005

web-ui                http://128.199.170.6:4200

root@139.59.123.174    user-admin

root@139.59.123.175    manage-listfield

root@139.59.123.172    reservation

root@128.199.170.6     web-ui

# Docker deploy

TO DEPLOY ADD Dockerfile in each service

And fix application.properties datasource.url

## Docker command create db

`docker container run  -d --name mysql-field -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=field_service mysql:latest`

`docker container run  -d --name mysql-user -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=userdb mysql:latest`

`docker container run  -d --name mysql-reservation -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=reservation mysql:latest`

## Docker command create image

$ `mvn clean package` in service folder first

`docker image build -t listfield-service .`

`docker image build -t admin-service .`

`docker image build -t manage-service .`

`docker image build -t reservation-service .`

`docker image build -t users-service .`

## Docker command deploy image

`docker container run  -d --name listfield-service --link mysql-field -p 9001:9001 listfield-service`

`docker container run  -d --name admin-service --link mysql-user -p 9002:9002 admin-service`

`docker container run  -d --name manage-service --link mysql-field -p 9003:9003 manage-service`

`docker container run  -d --name reservation-service --link mysql-reservation -p 9004:9004 reservation-service`

`docker container run  -d --name users-service --link mysql-user -p 9005:9005 users-service`
