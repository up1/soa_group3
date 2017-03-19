# How to run the reserv service ?

```
$mvn clean package && java -jar ./target/reserv-service.jar
```

And go to URL http://localhost:9001/reserv

http://localhost:9001/reservs

http://localhost:9001/reserv/{reserv_id}

# How to Start web application at port 9000 ?

```
$mvn spring-boot:run -Dserver.port=9000
```

And go to URL

http://localhost:9000