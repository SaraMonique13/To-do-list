
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');

const pendingList = document.getElementById('pendingTasks');
const progressList = document.getElementById('inProgressTasks');
const completedList = document.getElementById('completedTasks');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const taskText = taskInput.value.trim(); 
   if (taskText !== ''){
    addTask(taskText);
    taskInput.value = '';
   }
});

function addTask(text) {
    
    const li = document.createElement('li');
    li.textContent = text;

    const concludeBtn = document.createElement('button');
    concludeBtn.textContent = 'Concluir';
    concludeBtn.classList.add('conclude-btn');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.classList.add('delete-btn');

   
    li.appendChild(concludeBtn);
    li.appendChild(deleteBtn);

    
    pendingList.appendChild(li);

    
    concludeBtn.addEventListener('click', () => moveTask(li));
    deleteBtn.addEventListener('click', () => li.remove());
}

function moveTask(taskItem) {
    const parentList = taskItem.parentElement;

    if (parentList === pendingList) {
        progressList.appendChild(taskItem);
    } else if (parentList === progressList) {
        completedList.appendChild(taskItem);
        
        const concludeBtn = taskItem.querySelector('.conclude-btn');
        if (concludeBtn) {
            concludeBtn.remove();
        }
    }
}
