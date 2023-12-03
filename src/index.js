const {add, update, display, updateMany, removeTask} = require("../src/Controller/taskController");

let newtask = {
    description: "learning HTML&CSS",
    deadline: 'friday',
    completed: false
}

add(newtask);
update(2, 'deadline', 'Thursday');
display();

let taskupdate = {
    description: 'finishing freeCodeCamp projects',
    deadline: 'Tuesday',
    completed: true
}

updateMany(2, taskupdate);
removeTask(3);