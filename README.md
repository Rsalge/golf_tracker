# React, Mongo, Node, Express Passport Local Strategy, basic CSS boilerplate
This is a simple MERN boilerplate with a Passport local strategy in place for user authentication. Json Web Tokens are also being employeed in the user authentication. 

## Setting up Mongo DB connection
In order to establish a connection to your MongoDB instance you must first create a
.env file in the home directory of this project with contents:
```
DB_HOST=your_uri_here
DB_USER=you_username_here
DB_PASS=your_password
```
I personally use [mLab](https://mlab.com/login/) for my Mongo hosting needs. They provide a free sandbox DB with 500 MB of storage, a great way to get started. 

## To start this application

### Install dependencies 
Run `yarn` in the server directory and in the client directory.

### Start the server
Run `yarn start` in the server directory to start the server which runs on port 5000. It uses nodemon so that any changes you make in the /server directory will restart the server with the changes on save. 

### Launch the frontend
Run `yarn start` in the /client directory to start the frontend on port 3000. 

The frontend has a proxy setup for port 5000 so that api calls to the server will not be blocked by `cors`. 


