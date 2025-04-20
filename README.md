Task Manager API (Node.js + Express)

A  RESTful API to handle tasks



Features

- Create, read, update, delete tasks (CRUD)
- Storage in memory (wipes on server reboot)
- Route split in code (view `routes/tasks.js`)
- Simple validation (title & description are mandatory)
- Small bugs left on purpose for learning ????


Endpoints

Method  Route           Description          
GET     /tasks          Get all tasks
GET     /tasks/:id      Retrieve task by ID       
POST    /tasks          Add a new task    
PUT     /tasks/:id      Edit a task        
DELETE  /tasks/:id      Delete a task      


Run Locally

git clone https://github.com/AmolSonawane1026/Osumare_Backend.git
npm install
node server.js

