const input=document.getElementById('todo-input')
const button=document.getElementById('submit-button');
const todoList=document.getElementById('todo-list');

function* generateRandomId(){
    let id=0;
    while(true){
        yield id++
    }
}

const generator=generateRandomId();

function addTodo({title}){
    let li=document.createElement('li');
    li.innerText=title;
    li.id=generator.next().value;
    todoList.appendChild(li);
}

button.addEventListener('click',(e)=>{
    if(input.value){
        addTodo({title:input.value}) 
        input.value=''
    }
})
todoList.addEventListener('click', (e)=>{
    let elem=document.getElementById(e.target.id);
    elem.remove()
})



