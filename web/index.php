<?php header( 'Location: /index.html' ) ;  ?>

<!-- Deploying Your Site - GOT HERE: https://blog.teamtreehouse.com/deploy-static-site-heroku

First, you need to navigate to your project in the command prompt.

cd Projects/my-site

If you’re happy with the state of your application – create an index.php file. We can trick Heroku to deploy a static site by including 1 dynamic file.

The index.php file will be served by Heroku before your index.html. We need to make the browser redirect from index.php to index.html. We only need to include one line of PHP code.
?php header( 'Location: /index.html' ) ;  ?
Pro Tip: Make sure there’s no spaces before the ?php or else it won’t work!

Then we’ll use the command line tool called git to initialize or create a version of the site you want to deploy. To do that run the command:

git init
git add .
The add . means add all the files to the git repository.

Then you want to commit or save all the changes for your site. With a message describing what you’ve done.

git commit -m "My site ready for deployment."
Now you want to create your site on Heroku. If you’re already logged in (because you ran heroku login earlier), you can issue the following command:

heroku apps:create my-static-site-example
Insert your desired name instead of my-static-site-example.

If the name isn’t taken you can deploy your site using git.

git push heroku master
Once you see “remote: Verifying deploy…. done.”

You can now visit your site at https://<whatever-name-you-selected>.herokuapp.com/ or my example site here https: //my-static-site-example.herokuapp.com/. -->