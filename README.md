# Spring Boot + Java: StudentApp

![GitHub contributors](https://img.shields.io/github/contributors/thiagojacinto/spring-boot-java-StudentApp)
![Twitter Follow](https://img.shields.io/twitter/follow/higuetari?style=social)

Little project of a simplified Student Management System to learn Spring Boot &amp; Java application development. Inspired by [Amigoscode: "Getting started with Spring Boot"](https://youtu.be/Ke7Tr4RgRTs) & many others sources.

## Using "StudentApp"

To use 'Spring Boot + Java: StudentApp', follow the steps showed on the inspiration video linked above. An active webpage with a live front-end to the project running on Heroku can be accessed here: https://studentapp-page.herokuapp.com

To run you will need a Java IDE (Eclipse recommended) and Maven, Spring Boot, Java 8 installed. The front-end uses [Bootstrap](https://getbootstrap.com/docs/4.3/components/) v4.3.1 (not running locally) to simplify the web-development.

## Important files

Back-end: deployed on Heroku container [StudentApp API](https://api-studentapp.herokuapp.com/students/findall);

|Description | File | Notes|
|:------------|:-----:|:-----|
|Depency organizer POM | [POM.xml](/pom.xml) | Maven configuration & dependency organizer|
|Main | [APIRestApp.java](/src/main/java/com/springbootdb/apistudents/ApiRestApp.javaa) | Main class calling 'SpringBootApplication' |
|Controller | [StudentController](/src/main/java/com/springbootdb/apistudents/controller/StudentController.java) | Controller class, connecting methods to JPA database functions.|
|Dao | [StudentRepositoryDAO](/src/main/java/com/springbootdb/apistudents/dao/StudentRepositoryDao.java) | DAO file with simple extension of 'JpaRepository' interface |
|Entity | [Student](/src/main/java/com/springbootdb/apistudents/model/Student.java) | Entity file |

Front-end: doployed on Heroku container [StudentApp Web](https://studentapp.herokuapp.com);

|Description | File | Notes|
|:------------|:-----:|:-----|
|Javascript | [script.js](/web/script.js) | Core of integration between front-end and back-end software|
|HTML main page | [index.hmtl](/web/index.html) | Webpage displaying information from the server & giving interation opportunity to this user. |

## Contact 

If you want to contact me you can reach me at [@higuetari](https://twitter.com/higuetari).

## License 

This project uses the following license: [LICENSE](<link>).

## Acknowledgements

Initial thanks to [AmigosCode](https://github.com/amigoscode) to propose this tutorial;
Oliver Trosien's [JPA + UUID](https://github.com/otrosien/uuid-jpa-rest-example);
Michelli Brito's [API Rest](https://github.com/MichelliBrito/produtos-apirest)
Grokonez's [JPA/Hibernate & PostgreSQL CRUD](https://grokonez.com/spring-framework/spring-boot/spring-jpa-hibernate-one-to-many-association-postgresql-springboot-crud-restapis-post-get-put-delete-example)

