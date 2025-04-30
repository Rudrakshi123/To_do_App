// if(10>20){
// alert("Hey! Everyone");
  
// }
//Prompt
// prompt("What is The name of capital of Karnataka?");

//What ever is on the right hand side ,get stored on the left hand side.
// let userInput=prompt("What is The name of capital of Karnataka?");
// console.log(userInput);
//Differnet users will give diff responses ,but you can not write.
// different conditional checks for all the possible user resposnses.
// we use === equal sign for comparition.
// 2 equal signs will compare only value,not the type
// 3 equal signs will compare only value and  the type also
// Data has different Type-Number,String-sentence,Boolean-True/false.
// By default all the input in JS is stored as a TYPE-STRING.
// if(userInput===10){
//   alert("Well done! That's the right answer!");
// }
// else {
//   alert("Opppss, You are wrong");
// }
//FUNCTIONS
//1. When ever at a particular point of time, you want a certain task to execute,write the code as many time
//If you want a task to happen 3 times,write the same code 3 times.
// 2. write all the code required to do that task once inside a fnxn , and then whenever you want to do that task,just use the function.
// there are 2 type of function

// function startQuiz(){
//     let userInput=prompt("What is The name of capital of Karnataka?");
//   if(userInput==="Banglore"){
//     alert("Well done! That's the right answer!");
//   }
//   else {
//     alert("Opppss, You are wrong");
//   }
// }
//FUNCTION CALL

// startQuiz();
document.addEventListener('DOMContentLoaded', ()=> {
  //Listener will active only after entire website content is loaded.
  
  const form = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input"); 
  const dueDateInput = document.getElementById("due-date");
  const priorityInput = document.getElementById("priority");
  const taskList = document.getElementById("task-list");
  
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [ ];
  
  function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  function renderTasks(){
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.classname = `task-item priority-${task.priority}`;
      if(task.completed) {
        li.classList.add('completed');
      }
      li.innerHTML = `
        <div>
          <span>${task.text}</span>
          <div class="task-details">
          Due: ${task.dueDate || 'Not Set'} | Priority: ${task.priority}
        </div>
        </div>
        <div>
        <button onClick="toggleTask(${index})">Mark Completed</button>
        <button onClick="deleteTask(${index})">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
      
      
    });
                
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    if(taskText){
      tasks.push({
        text: taskText,
        completed: false,
        dueDate: dueDate,
        priority: priority
      });
      taskInput.value= '';
      dueDateInput.value = '';
      priority.value = 'low';
      saveTasks();
      renderTasks();
    }
    
  });
  
  window.toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
  };
  
  window.deleteTask = (index) => {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  };
  
  renderTasks();
                       
                       
  
  
  
});