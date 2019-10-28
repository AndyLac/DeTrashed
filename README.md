# DeTrashed
Initially created with ```create-react-app```. 

This website allows users to view photos of reddit users cleaning their environment. It also includes simple tips on how to clean up your own environment. Finally, there is a Google Map Component to search for facilities to dispose of the trash that you have collected.

## Background

### Google Maps API
[Maps Package](https://github.com/google-map-react/google-map-react)
Currently using this package as wrapper for the Google Maps API. Main usage with this package is to create my own Google Maps component to pass props more easily from a parent component. 

### Google Places API
[Querying Places](https://developers.google.com/places/web-service/intro)
This documentation is currently being used to query for different disposal facilities based on the filter chosen by the user on the application.

## Installation
### Requirements
Note: this project is currently developed using Xubuntu 18.04, so all requirements will follow Linux convention.

[Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)
* Must run a dependency manager to run the application in development mode. Other examples include Bower and NPM.

After installing Yarn, you can run ```yarn upgrade``` to install all the dependencies found on package.json. Package.json contains all the packages currently being used in the project, as well as the correct versions of said packages, so compatibility should be fine.

To run the webapp, open another terminal and go to the root of the project and run this command:
```
yarn start
```
 After you run the command, you can go to [http://localhost://3000](http://localhost://3000) to view the application.
 Pressing ctrl + s while ```yarn start``` is running will cause the web application to refresh with all the new changes that you have made.

## Roadmap
### Front-End
* Finding a more accurate API that can search for disposal facilities (ie. Syringe disposal centers, Metal collection, etc)
* Implement a Marker component and InfoWindow component to enhance user experience by showing facility names and locations
* Integrate Nginx to host the web application
* Create SSL certs to secure the web application and its connections
* Integrate a Meta Header package to help with SEO purposes 


### Back-End (Long-Term goals)
* Use a back-end framework (Laravel, Java SpringBoot, etc) to eventually start implementing features (mainly features involving users, comments, posting images to build up a community)
* Integrate a RDBMS like MariaDB or MySQL to store user data
* Integrate Redis to use along with the RDBMS
