//get data from form and store show data in table localstroage key 'tasks'
// create a display function
let taskArr = JSON.parse(localStorage.getItem('tasks'))||[]
let completedArr = JSON.parse(localStorage.getItem('task-completed'))||[]
console.log(taskArr,completedArr)

let form = document.querySelector('form')
form.addEventListener('submit',function(event){
    event.preventDefault();
    let Taskobj ={
        taskname : form.name.value,
        type:form.type.value,
        date: form.date.value,
        priority:form.priority.value
    }
    taskArr.push(Taskobj)
    localStorage.setItem('tasks',JSON.stringify(taskArr))
   display(taskArr)
})

// display funciton
let tbody = document.querySelector('tbody')

let display = (data)=>{
    console.log(taskArr)
    tbody.innerHTML = ''
    data.forEach((element,index) => {
        let row = document.createElement('tr')

        let taskname = document.createElement('td')
        taskname.innerText = element.taskname;

        let type = document.createElement('td')
        type.innerText = element.type;

        let date = document.createElement('td')
        date.innerText = element.date;

        let priority = document.createElement('td')
        priority.innerText = element.priority;

        let completed = document.createElement('td')
        completed.innerText = 'completed';

        completed.addEventListener('click',function(){
            add('task-completed',element)
            deleterow(element,index)
        })

        row.append(taskname,type,date,priority,completed)
        tbody.append(row)
    });
}



let add = (key,value)=>{
    completedArr.push(value)
    localStorage.setItem(key,JSON.stringify(completedArr))
    console.log(completedArr)

}

let deleterow=(element,index)=>{
    taskArr.splice(index,1)
    localStorage.setItem('tasks',JSON.stringify(taskArr))
    display(taskArr)
}
display(taskArr)