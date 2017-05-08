FROM frolvlad/alpine-oraclejdk8:slim 
ADD  ./target/users-service.jar app.jar 
ENTRYPOINT [ "sh", "-c", "java -jar app.jar" ]