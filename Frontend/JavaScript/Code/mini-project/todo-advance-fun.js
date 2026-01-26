const todolist=[{
  name:'make dinner',
  dueDate: '2025-12-23'
},{
  name:'play cricket',
  dueDate:'2025-11-09'
}];
renderTodoList();

function renderTodoList(){
let todoListHTML='';
//arrow function
todolist.forEach((todoObject,index) =>{
  const name=todoObject.name;
  const dueDate=todoObject.dueDate;
  const html= `<div>${name}</div> <div>${dueDate}</div> <button class="delete-todo-button js-delete-todo-button">Delete</button>`;
  todoListHTML+=html;
});
const element=document.querySelector('.js-todo-list').innerHTML=todoListHTML;
document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton,index) =>{
  deleteButton.addEventListener('click',() =>{
    todolist.splice(index,1);
  renderTodoList();
  });
});

}
document.querySelector('.js-add-todo-button').addEventListener('click',() =>{
  addTodo();
});


function addTodo(){
  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;
  const dateInputElement=document.querySelector('.js-due-date-input');
  const dueDate= dateInputElement.value;

  todolist.push({name:name,dueDate:dueDate});
  inputElement.value='';
  renderTodoList();
  saveToStorage();
  function saveToStorage(){
    localStorage.setItem('todolist',JSON.stringify(todolist));
  }
}