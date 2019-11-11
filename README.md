# Spring Boot + Java: StudentApp

![GitHub contributors](https://img.shields.io/github/contributors/thiagojacinto/spring-boot-java-StudentApp)
![Twitter Follow](https://img.shields.io/twitter/follow/higuetari?style=social)

Little project of a simplified Student Management System to learn Spring Boot &amp; Java application development. Inspired by [Amigoscode: "Getting started with Spring Boot"](https://youtu.be/Ke7Tr4RgRTs) & others sources.

## Using "StudentApp"

To use 'Spring Boot + Java: StudentApp', follow the steps showed on the inspiration video linked above. An active webpage with a live front-end to the project running on Heroku can be accessed here: https://studentapp-page.herokuapp.com

To run you will need a Java IDE (Eclipse recommended) and Maven, Spring Boot, Java 8 installed. The front-end uses [Bootstrap](https://getbootstrap.com/docs/4.3/components/) v4.3.1 (not running locally) to simplify the web-development.

## Important files

|Description | File | Notes|
|:------------|:-----:|:-----|
|Depency organizer POM | [POM.xml](/pom.xml) |Necessary|
|Main | [Main.java](/src/main.com.project.studentApp/Main.java) | Main class calling 'SpringBootApplication' |
|Controller | [StudentController](/src/main.com.project.studentApp/controller) | Controller class|
|Service | [StudentService](/src/main.com.project.studentApp/service) | Service class |
|Dao | [StudentDAO](/src/main.com.project.studentApp/dao) | DAO folder with 'FakeImplementation' and a 'DAOSource'|
|Entity | [StudentEntities](/src/main.com.project.studentApp/entity) | Entity folder|

## Contact 

If you want to contact me you can reach me at [@higuetari](https://twitter.com/higuetari).

## License 

This project uses the following license: [LICENSE](<link>).

## Acknowledgements

Initial thanks to [AmigosCode](https://github.com/amigoscode) to propose this tutorial. 
