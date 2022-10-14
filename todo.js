const input = document.querySelector("input");
const addBtn = document.querySelector(".add");
const tasksHolder = document.querySelector(".holder");
let tasks = [];
// Get Array from LocalStorage
if (localStorage.getItem("Tasks")) {
   tasks = JSON.parse(localStorage.getItem("Tasks"));
}
createTask(tasks);
// Add a task
addBtn.addEventListener("click", arrOfTasks);
document.addEventListener("keyup", (e) => {
   if (e.key === "Enter") {
      arrOfTasks();
   }
});
// Add Input to array & array to localStorage
function arrOfTasks() {
   if (input.value != "") {
      let objTask = {
         id: Date.now(),
         title: input.value,
         done: false,
      };
      tasks.push(objTask);
      createTask(tasks);
      window.localStorage.setItem("Tasks", JSON.stringify(tasks));
      input.value = "";
   } else {
      return;
   }
   return tasks;
}

// Create Task Elements
function createTask(arr) {
   tasksHolder.innerHTML = "";
   let counter = 1;
   arr.forEach((e) => {
      let div = document.createElement("div");
      div.classList.add("task");
      if (e.done) {
         div.classList.add("done");
      }
      div.id = e.id;
      let p = document.createElement("p");
      p.innerText = counter + "_ " + e.title;
      counter++;
      let delBtn = document.createElement("button");
      delBtn.classList.add("del");
      delBtn.innerText = "+";
      // Append
      div.appendChild(p);
      div.appendChild(delBtn);
      tasksHolder.appendChild(div);
   });
}
// Delete button
tasksHolder.addEventListener("click", (e) => {
   if (e.target.classList.contains("del")) {
      e.target.parentElement.remove();
      removeFromLocalStorage(e.target.parentElement.id);
   }
});
// Delete Handler
function removeFromLocalStorage(id) {
   tasks = tasks.filter((x) => x.id != id);
   window.localStorage.setItem("Tasks", JSON.stringify(tasks));
}
// Done state Handler
tasksHolder.addEventListener("click", (e) => {
   if (e.target.classList.contains("task")) {
      e.target.classList.toggle("done");
      updateDoneState(e.target.id);
   }
});
function updateDoneState(id) {
   tasks.forEach((x) => {
      if (x.id == id) {
         x.done == false ? (x.done = true) : (x.done = false);
      }
   });
   window.localStorage.setItem("Tasks", JSON.stringify(tasks));
}
