# How to run the listfield service ?

```
$mvn clean package && java -jar ./target/listfield-service.jar
```

And go to URL

http://localhost:9001/listfield to see all field

http://localhost:9001/field?field_id={field_id} to see detail of field

http://localhost:9001/field/{field_id} to see all extend field of field

http://localhost:9001/field/{field_id}/{ex_id} to see detail of extend field

# How to Start web application at port 9000 ?

```
$mvn spring-boot:run -Dserver.port=9000
```

And go to URL

http://localhost:9000