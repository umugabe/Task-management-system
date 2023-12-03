const {taskDatabase} = require("../Database/taskdb");

//function to add a task in the system

const add = (task) =>{
    task.task_number = taskDatabase.length+1;
    taskDatabase.push(task);
    console.log("task added successfully-----------\n");
    console.log(task);

}

///function to update a task information in the system

const update = (task_number, key, value) =>{
    taskAvailable = taskDatabase.find(element=>element.task_number===task_number);
    // console.log(taskAvailable);
    if (!taskAvailable) {
        console.log("no task with that task number");
        
    }else{
        taskAvailable[key] = value;
        console.log("The task has been successfully updated-------------\n");
        console.log(taskAvailable);
    }
}

const display = () => {
    console.log("All the tasks in the system------------------\n");
    console.log(taskDatabase);
}

const updateMany = (task_number, task) => {
    taskAvailable = taskDatabase.find(element=>element.task_number===task_number);
    if (!taskAvailable) {
        console.log("no task available with such id");
        
    }else{
        for (const key in task) {
           taskAvailable[key] = task[key];
                
            }
            console.log("Updated Successfully---------------\n");
            console.log(taskAvailable);
        }
    }
const removeTask = (task_number) =>{
    remaining = [];
    taskAvailable = taskDatabase.find(element=>element.task_number===task_number);
    if (!taskAvailable) {
        console.log("there is no task with that number");
        
    }else{
        remaining = taskDatabase.filter(element=>element.task_number!==task_number);
        console.log("The task has been successfully removed------------------\n");
        // console.log("before deleting\n", taskDatabase);
        console.log(remaining);

    }
} 


module.exports ={
    add,
    update,
    display,
    updateMany,
    removeTask
}