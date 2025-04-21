// You are tasked with creating a Task Manager that manages and secures user tasks using JavaScript concepts such as Closures, Higher-Order Functions, and JSON manipulation. The implementation should meet the following requirements:

// Requirements:
// Task Manager Module (Closure + Module Design)
// Create a module named TaskManager that manages a list of tasks.
// The list of tasks should be private (secured using closures) and accessible only through provided methods.
// Each task should be stored in the following format:
// Implement the following methods inside the module:
// addTask(title) → Adds a new task with a unique id and completed status set to false.
// getAllTasks() → Returns a JSON string of all tasks.
// markComplete(taskId) → Marks a specific task as completed.
// removeTask(taskId) → Removes a task by id.
// Advanced Operations Using HOFs
// Implement two additional functions:
// getPendingTasks() → Returns an array of task titles that are not completed (using .filter()).
// getCompletedTasks() → Returns an array of task titles that are completed (using .map() and .filter()).
// Sorting and Method Chaining
// Implement a method sortTasks() that:
// Sorts tasks by title in ascending order using .sort() and .localeCompare().
// Chains .map() and .sort() to return only the task titles in sorted order.
// Deliverables:
// Implementation
// JavaScript code implementing the TaskManager module with the following features:
// Private task data managed securely using closures.
// Properly functioning methods:
// addTask()
// getAllTasks()
// markComplete()
// removeTask()
// Advanced operations:
// getPendingTasks() (using .filter()).
// getCompletedTasks() (using .map() and .filter()).
// Sorting functionality using:
// .sort() and .localeCompare() for sorting task titles in ascending order.
// Method chaining for efficient data manipulation.
// Correct Usage of Concepts
// Demonstration of:
// Closures for task data security.
// Higher-Order Functions (HOFs) like .map(), .filter(), and .sort().


function TaskManger() {
  let tasks = [],
    id = 1;
  return {
    addTask(title) {
      tasks.push({
        id: id++,
        title: title,
        completed: false
      });
    },
    getallTasks() {
      return JSON.stringify(tasks);
    },
    markComplete(taskId) {
      let task = tasks.find((task) => task.id == taskId);
      if (task) {
        task.completed = true;
      }
    },
    removeTask(taskId) {
      tasks = tasks.filter((task) => task.id !== taskId);
    },
    getPendingTasks() {
      return tasks.filter((task) => !task.completed).map((task) => task.title);
    },
    getCompletedTasks() {
      return tasks.filter((task) => task.completed).map((task) => task.title);
    },
    sortTasks() {
      return tasks
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((task) => task.title);
    },
  };
}
let manager = TaskManger();
(manager.addTask("Task1"));
(manager.addTask("Task2"));
(manager.addTask("Task3"));
(manager.markComplete(2))
console.log(manager.getallTasks());
console.log(manager.getPendingTasks())
console.log(manager.getCompletedTasks());
console.log(manager.sortTasks());
manager.removeTask(2)
console.log(manager.getallTasks())