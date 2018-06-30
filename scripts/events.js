// delete button event
var tasks_list = document.querySelector('.my-bag');

tasks_list.addEventListener('click', function(event){
    if(event.target.className == "ml-auto btn btn-outline-danger"){
        tasks_list.removeChild(event.target.parentElement.nextElementSibling);
        tasks_list.removeChild(event.target.parentElement);
    }
});

//add button event
var add_btn = document.querySelector('.input-group-append button');

add_btn.addEventListener('click',function(event){
    const new_task = event.target.parentElement.previousElementSibling;
    tasks_list.innerHTML += `
    <li class="task d-flex">
        <span class="lead">`+new_task.value+`</span>
        <button type="button" class="ml-auto btn btn-outline-danger">Delete</button>
    </li>
    <hr>
    `;
    new_task.value="";
});

//search bar functionality

var seach_bar = document.querySelector('#search-bar');

seach_bar.addEventListener('keyup', function(event){
    
    const req = event.target.value.toLowerCase();
    const task_options = tasks_list.getElementsByTagName('LI');
    Array.from(task_options).forEach(function(option){
        const task = option.firstElementChild.textContent;
        if(task.toLowerCase().indexOf(req)!=-1 && task.toLowerCase!=""){
            option.className="d-flex";
            option.nextElementSibling.className="d-block";
        }else{
            option.className="d-none";
            option.nextElementSibling.className="d-none";
        }
    });
});