This is a demo project for the Temp Dev position.
It is a very basic ATM program.  It asks the user to log in, reaches out to a backend to pull the account details if they exist, and then allows the user to check their balance or log out.  

I just started using React, bootstrap javascript and git for this project, and my python is rusty, so I hope your brought a fork, because spaghetti code abounds:( The design also does not match up, but it does at least function  

## Prep

Install the required npm server

## `npm install serve`

Install the required python packages

## `pip install flask-restful flask-cors`

In the project directory, you can run:

### To run

Start up the Python backend by going to the backend directory and typing
## `python ./backend.py`
This will start the backend on [http://localhost:5000](http://localhost:5000)

Start the React front end by going to the /godaddyatm directory and typing:
## `serve -s build -l 3000
This will start the frontend on [http://localhost:3000](http://localhost:3000)

Finally open a browser and go to:
[http://localhost:3000](http://localhost:3000)

to see it in action. 
