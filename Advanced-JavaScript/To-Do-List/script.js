let tasks =[];
let newTask = document.getElementById("new-task-input").value
let addBtn = document.getElementById("add-task-btn")

addBtn.addEventListener("click", myFunction = () => {
  newTask.textContent = tasks
  let trim = (newTask) => {
    newTask.trim()
  }
  console.log(tasks)
  if(newTask === ""){
    alert("You hove must add something in the input")
  }
  

});

