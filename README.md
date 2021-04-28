# db-project

First clone the respository. 

Next, you can open the db-project folder with an IDE. I used Intellij. In the `database` folder there is a exported database containing sample sql data that runs with the project. Import this database to a sql server named `db_design`. The username should be `root` and the password should be `P@ssword`. Explore `src/main/resources/application.properties` if you are unable to get the sql server working with this project.

To start the webserver, run the main function in `src/main/java/com/example/springtemplate/DemoApplication.java`

From here, you can open up localhost to view the webpage. I usually go to `src/main/webapp/react/pages/index.html` in the directory on the left, right click it, and open with browser.

There are /users, /videos, and /reactions to view all the users, videos, and reactions. Additionally, all the functionality described in P1, P2, and P3 should be there. From each `User`, you can see their `Videos` and `Reactions`. From each `Video`, you can see which `User` made the `Video` and all `Video`s' `Reaction`s. From each `Reaction`, you can see what `Video` it was commented on and which `User` wrote it.

If you are unable to get the project to work, feel free to reach out to me at my school email.
