let todoList= JSON.parse(localStorage.getItem('todo_list'))||[];
renderTheList()
function renderTheList(){
    let temp = ""
    for (let i=0;i<todoList.length;i++){
        temp += `<p>${todoList[i].name}, ${todoList[i].date}</p> <button onclick='deleteItem(${i})'>DELETE</button>`
    }

    document.querySelector('.div-container').innerHTML = temp
}

function deleteItem(i){
    todoList.splice(i,1);
    renderTheList();
}

function addItem(){
    console.log('clicked addItem')
    todo_item = document.querySelector('.js-todo-class').value;
    todo_date = document.querySelector('.js-todo-date').value;
    todoList.push({name:todo_item, date:todo_date})
    document.querySelector('.js-todo-class').value = ''
    document.querySelector('.js-todo-date').value = ''
    updateStorage();
    renderTheList();
}

function updateStorage(){
    localStorage.setItem('todo_list',JSON.stringify(todoList));
}

function delteCompleteStorage(){
    todoList = [];
    updateStorage();
    renderTheList();
}