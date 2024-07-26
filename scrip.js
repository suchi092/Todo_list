let todo_list = [
    {
    item: 'xyz',
    dueDate: '12/03/2000'
},
    {
        item : 'go to clg',
        dueDate : '12/2/2023',
    }
];
    
displayitem();



function todo_Add(){
    let todoInput = document.querySelector
    ("#todo-inp")
    let tododate = document.querySelector
    ("#todo-date")
    let innnetval = todoInput.value;
    let tododates= tododate.value;
    
    todo_list.push({item:innnetval, dueDate:tododates});
    todoInput.value='';
    tododate ="";
    
    displayitem();

}

function displayitem(){
    let containeritems = document.querySelector(".todo-container")

    let newhtml = ``;

    
    for (let i=0; i<todo_list.length;i++){
        // let item = todo_list[i].item;
        // let dueDate = todo_list[i].dueDate;

        let {item, dueDate} = todo_list[i]        
        newhtml += 
        ` <span> ${item} </span>
        <span> ${dueDate} </span>
        <button id="delete-btn"onclick="todo_list.splice(${i},1);
        displayitem();">Delete</button>
          `  ;
       
        
      
    }
    containeritems.innerHTML =newhtml;
}
