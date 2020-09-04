# Nodejs Weather App

Nodejs Weather App built with express.
Use the application [here](https://shan-express-weather-app.herokuapp.com/)

### What does it do?

Gives a very basic weather forecast/information for a given location. Check it out [here](coming soon).

I built out a basic backend service to provide the forecast and showcase the user it in the browser. More details below.

### How?

The application is super simplistic on the frontend, which is by design. Firstly I wanted experience of serving up static html files from express rather than building out some UI with React, which I have done plenty of.

Secondly the main point here is for me to get exposed to more back end technologies, so spending too much time focusing on the UI would be time not spent learning express, building out endpoints yada yada yada.

After playing around with some static html, css and js with express I moved into using handlebars to assist with basic layout and page creation in the form of templates. Although simple, really powerful and capable of producing really slick html pages if that is what you want.

### Express

I have used express before, but got exposure to a few more aspects of it with this project, which was great. I always try to incorporate a few new things in every projects. So as well as the regular `app.get()` and `app.listen()` I also utilised `app.set()` and `app.use()` as well as a sprinkling of node modules and npm packages like `hbs` and `postman-request`.

### What's Next?

Styling and feature rich was not the goal here. Maybe when I have time I can iterate over this again and build out my api to provide a more thorough weather report. Obviously the front end could be a lot nicer, but again this was never the goal, so although doing those things will make the project look better it won't necessarily teach me any more.

Having said all that, looking nicer and providing more information would be nice, I eventually ant to have this (as well as most of my other projects) hosted on my main domain as a sub domain, so at that point I probably will want it to look a little better.
