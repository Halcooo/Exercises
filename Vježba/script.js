
var todos =[];



function handler(){
var inputValue =document.getElementById('todo');
 todos.push(inputValue.value);               
     

var ul =document.querySelector('.list-group');

var li=document.createElement('li');
li.classList.add('list-group-item');
li.classList.add('d-flex')
li.classList.add('align-items-center');
li.classList.add('justify-content-between');

var divForm =document.createElement('div');
divForm.classList.add('form-check');

var input =document.createElement('input');
input.type='checkbox';
input.classList.add('form-check-input');


var label =document.createElement('label');
label.classList.add('form-check-label');
label.innerHTML=inputValue.value;

var btnDiv =document.createElement('div');

var edit =document.createElement('button');
edit.classList.add('btn');
edit.classList.add('btn-primary');
edit.innerHTML='Edit';
edit.addEventListener('click', function edit(event){
    console.log(event.target.querySelector('.form-check-label'));
    
   
});

    
    



var del =document.createElement('button');
del.classList.add('btn');
del.classList.add('btn-danger')
del.innerHTML='Delete';
del.addEventListener('click',function erase(event){

   
    
    
})


divForm.appendChild(input);
divForm.appendChild(label);
 btnDiv.appendChild(edit);
 btnDiv.appendChild(del);
li.appendChild(divForm);
li.appendChild(btnDiv)
ul.appendChild(li);
inputValue.value='';


}

