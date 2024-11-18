const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add a new task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create new task element
  const taskItem = document.createElement("li");
  const taskSpan = document.createElement("span");
  taskSpan.classList.add("task-text");
  taskSpan.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "✕";

  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  // Clear input
  taskInput.value = "";
});

// Add task with Enter key
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});
