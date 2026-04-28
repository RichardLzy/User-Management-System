FROM openjdk:8-jdk-alpine
WORKDIR /app
COPY user-management-system-backend-0.0.1-SNAPSHOT.jar /app/app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar","--spring.profiles.active=prod"]