
const Todolist=[];

document.querySelector('.js-add-button')
.addEventListener('click',()=>{
    addtodo();
})

function addtodo(){
    let inputElement=document.querySelector('.js-inputtext').value;
    let dateinputElement=document.querySelector('.js-duedate').value;

    Todolist.push({name:inputElement, date:dateinputElement});

    document.querySelector('.js-inputtext').value='';
    
    rendertodo();
}
 

function rendertodo(){
    let todohtml='';  

    Todolist.forEach(function(valueObject, index){
        const name=valueObject.name;
        const date=valueObject.date;
        const html=`
                        <div>${name}</div>
                        <div>${date}</div>  
                        <button class="deleteButton-css js-delete-button">
                        Delete
                        </button>
                    
                    `;   
        todohtml+=html;    
    });
    
    document.querySelector('.js-text-output').innerHTML=todohtml;

    document.querySelectorAll('.js-delete-button')
        .forEach((deleteButton,index)=>{
            deleteButton.addEventListener('click',()=>{
                Todolist.splice(index,1); 
                rendertodo();
            })
        });
}








