function clickEnter(event){
    if(event.key==='Shift'){
        addtodo();
    }
}

const Todolist=[];

function addtodo(){
    let inputElement=document.querySelector('.js-inputtext').value;
    let dateinputElement=document.querySelector('.js-duedate').value;

    Todolist.push({name:inputElement, date:dateinputElement});

    document.querySelector('.js-inputtext').value='';
    
    rendertodo();
}
 

function rendertodo(){
    let todohtml='';  

    for(let i=0; i<Todolist.length; i++){
        const valueObject=Todolist[i];
        const name=valueObject.name;
        const date=valueObject.date;
        const html=`
                        <div>${name}</div>
                        <div>${date}</div>  
                        <button onclick="Todolist.splice(${i},1); 
                        rendertodo();" class="deleteButton-css">
                        Delete
                        </button>
                    
                    `;   
        todohtml+=html;
    }

    
    document.querySelector('.js-text-output').innerHTML=todohtml;
}








