const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');



function addTask(){
  const taskText = taskInput.value.trim();

  if(taskText !== ''){
    // 1
    const li = document.createElement('li');
    li.textContent = taskText;

    // 2
    li.addEventListener('click', function () {
      li.classList.toggle('completed');
    });

    // 3
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = '';
  } else {
    alert("Please enter a task!");
  }
}


addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (e) {
  if(e.key === 'Enter'){
    addTask();
  }
});