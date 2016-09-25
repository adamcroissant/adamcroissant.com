# adamcroissant.com
This repository represents all of the code for my personal website hosted over at adamcroissant.com. It is a work in progress. Initial implementation is an angular 1.5 SPA with a nodeJS backend, subject to change.

# Set up/run application
- install node & npm
- run npm install in project directory
- run `node server.js` in project directory
- navigate to http://localhost:8080

# Application structure
- ./server.js : NodeJS server
- ./app.js : defines module & configures routes
- ./index.html : provides outer container & loads scripts
- ./site.css : custom styles
- ./js
- ./js/views : contains views for defined states
- ./js/controllers : contains controllers, one for each state
- ./js/services : contains domain & data access services
- ./content
- ./content/img : contains all static images
- ./tests
- ./tests/test-app.js : creates module for tests so that tests can isolate from ui router & other configuration in app.js
- ./tests/controllers : contains jasmine unit tests for controllers
- ./my.conf.js : karma configuration

# TODO
- set up dynamic dns on server
- point adamcroissant.com to server's dyn dns
- add icons to external site links
- expand about me page
     - build on "free time" section
- add skills/interests page
- add experience page
- add grunt
- add beautification
- add esLint
- add minification
- add include source generation
- add database for site content
- add REST api to server for db access
- change to angular 2?
- add blog functionality