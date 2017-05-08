FROM frolvlad/alpine-oraclejdk8:slim 
ADD  ./target/listfield-service.jar app.jar 
ENTRYPOINT [ "sh", "-c", "java -jar app.jar" ]