function clickEnter(event){
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
    
    rendertodo();
}
 
function rendertodo(){
    let todohtml='';  

    for(let i=0; i<Todolist.length; i++){
        const value=Todolist[i];
        const html=`<p>${value}<p>`;   //this line allow program to generate output in the webpage.
        todohtml+=html;
    }

    
    document.querySelector('.js-text-output').innerHTML=todohtml;
}








