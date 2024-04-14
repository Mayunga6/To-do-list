const taskInput=document.getElementById('task-input');
const addBtn=document.getElementById('add-btn');
const taskList=document.getElementById('task-list');
const dueDate=document.getElementById('due-date');

//event listener
addBtn.addEventListener('click',()=>{
    if(taskInput.value !=="" && dueDate.value !=="" ){
        const taskText=taskInput.value;
        const endDate=dueDate.value;
        const listItem=document.createElement('li');
        listItem.innerHTML=`${taskText} &nbsp; ${endDate} <button class='delete-btn'>Delete</button>`;
        taskList.appendChild(listItem);
        taskInput.value="";
        dueDate.value="";
      
    }
});

taskList.addEventListener('click', (event)=>{
    if(event.target.classList.contains('delete-btn')){
        const listItem=event.target.parentElement;
        taskList.removeChild(listItem);
    }
})