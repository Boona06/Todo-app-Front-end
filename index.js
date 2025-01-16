let todos = [] ;
function Addtask (){
    const modal = document.querySelector("#Modal") ;
    modal.style.display ="block" ;
}
function Submit (){
const input = document.getElementsById("task-name").value ;
const status = document.getElementsById("task-status").value
todos.push({
    name :input ,
    status : status
})
const modal = document.querySelector("#Modal")
modal.style.display = "none"
}