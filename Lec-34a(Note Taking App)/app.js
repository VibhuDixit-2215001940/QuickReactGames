let title = document.getElementById('title');
let List = document.getElementById('List');
let addButtonEl = document.getElementById('add');
let del = document.getElementById('del');

addButtonEl.addEventListener('click',function(e){
    e.preventDefault()
    let li = document.createElement('li');
    if(title.value.trim()=== '') return
    li.innerText = title.value;//Accessing the input
    List.appendChild(li); 
    title.value = ""//Clear input feild after add task
    li.addEventListener('click',function(){
        li.style.textDecoration='line-through';
        li.style.backgroundColor = 'green'
        // li.remove()
    })
})

del.addEventListener('click',function(){
    List.innerHTML = '';
})