
function onkeydownEnter(event){
    if(event.key==='Enter'){
        addtodo();
    }
}

const Todolist=[];

function addtodo(){
    let inputElement=document.querySelector('.js-inputtext').value;
    Todolist.push(inputElement);
    console.log(Todolist);
    document.querySelector('.js-inputtext').value='';
    
}