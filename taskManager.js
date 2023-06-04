const readLineSync = require('readline-sync');

let taskList = [];

function showMenu(){
    console.log('\nTask Manger');
    console.log('1. Add Task');
    console.log('2. Show Task List');
    console.log('3. Complete a Task');
    console.log('4. Exit')
}

function startApp(){
    let choice = 0;

    while(choice != 4){
        showMenu();
        choice = readLineSync.questionInt('Select an option: ');
        switch(choice){
            case 1: {
                addTask();
                break;
            }
            case 2: {
                showTaskList();
                break;
            }
            case 3: {
                showTaskList();
                let taskIndex = readLineSync.question('Select from the above option: ');
                removeTask(taskIndex);
                break;
            }
            case 4: {
                console.log('case 4');
                break;
            }
            case 5: {
                console.log('\nExiting!\n')
                break;
            }
            default: {
                console.log(`\n option ${result} is not in the list. Please select from the below list`)
                break;
            }
        }
    }
}

function addTask(){
    let result = readLineSync.question('Describe your Task:- ')
    if(result.length != 0){
        taskList.push(result);
        console.log('\n /********** Task Successfully Added ***********/ \n');
    } else {
        console.log('\n\nPlease enter a valid task');
    }
}

function showTaskList(){
    if(taskList.length == 0){
        console.log('\n /******* Task List is Empty *******/')
    } else {
        console.log('\n /******* Task List *******/')
        taskList.forEach((item,index) => {
            console.log(`${index+1}. ${item}`)
        });
    }
}

function removeTask(taskIndex){
    taskIndex -= 1;
    if(taskList.length >0 && taskIndex <= taskList.length){
        let newTaskList = [];
        taskList.forEach((item,index)=>{
            if(index != taskIndex){
                newTaskList.push(item);
            }
        });
        taskList = newTaskList;
        console.log('\n /******* Task Completed SuccessFully *******/')
    } else {
        console.log('Error while removing task: Item not found.')
    }
}




startApp();