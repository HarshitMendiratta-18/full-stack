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
for(let i=0;i<todolist.length;i++){
  const todo=todolist[i];
  const name=todo.name;
  const dueDate=todo.dueDate;
  const html= `<div>${name}</div> <div>${dueDate}</div> <button onclick="
  todolist.splice(${i},1);
  renderTodoList();
  " class="delete-todo-button">Delete</button>`;
  todoListHTML+=html;

}
const element=document.querySelector('.js-todo-list').innerHTML=todoListHTML;

}

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