document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task-input');
    const taskDescription = document.getElementById('new-task-description');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const sortTasks = document.getElementById('sort-tasks');

    // Load tasks from localStorage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task.text, task.description, task.completed, task.date));
        sortAndDisplayTasks();
    };

    // Save tasks to localStorage
    const saveTasks = () => {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(task => {
            tasks.push({
                text: task.querySelector('.task-text').textContent,
                description: task.querySelector('.task-description').textContent,
                completed: task.classList.contains('completed'),
                date: task.getAttribute('data-date')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Add a new task
    const addTask = (text, description, completed = false, date = new Date().toISOString()) => {
        const li = document.createElement('li');
        li.setAttribute('data-date', date);

        const taskInfo = document.createElement('div');
        taskInfo.classList.add('task-info');

        const taskText = document.createElement('span');
        taskText.textContent = text;
        taskText.classList.add('task-text');
        taskText.setAttribute('contenteditable', 'true');
        taskText.addEventListener('blur', saveTasks);

        const taskDate = document.createElement('span');
        taskDate.textContent = new Date(date).toLocaleString();
        taskDate.classList.add('task-date');

        taskInfo.appendChild(taskText);
        taskInfo.appendChild(taskDate);

        li.appendChild(taskInfo);

        const taskDescriptionElem = document.createElement('p');
        taskDescriptionElem.textContent = description;
        taskDescriptionElem.classList.add('task-description');
        taskDescriptionElem.setAttribute('contenteditable', 'true');
        taskDescriptionElem.addEventListener('blur', saveTasks);

        li.appendChild(taskDescriptionElem);
        li.classList.toggle('completed', completed);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Видалити';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            li.remove();
            saveTasks();
        });

        li.appendChild(deleteBtn);

        li.addEventListener('click', (e) => {
            if (e.target !== taskText && e.target !== taskDescriptionElem && e.target !== deleteBtn) {
                li.classList.toggle('completed');
                saveTasks();
            }
        });

        taskList.appendChild(li);
        saveTasks();
        sortAndDisplayTasks();
    };

    // Sort tasks and display them
    const sortAndDisplayTasks = () => {
        const tasksArray = Array.from(document.querySelectorAll('#task-list li'));
        const sortCriterion = sortTasks.value;

        tasksArray.sort((a, b) => {
            if (sortCriterion === 'date') {
                return new Date(a.getAttribute('data-date')) - new Date(b.getAttribute('data-date'));
            } else if (sortCriterion === 'status') {
                return a.classList.contains('completed') - b.classList.contains('completed');
            }
        });

        taskList.innerHTML = '';
        tasksArray.forEach(task => taskList.appendChild(task));
    };

    // Event listener for adding tasks
    addTaskBtn.addEventListener('click', () => {
        if (taskInput.value.trim() !== '' && taskDescription.value.trim() !== '') {
            addTask(taskInput.value.trim(), taskDescription.value.trim());
            taskInput.value = '';
            taskDescription.value = '';
        }
    });

    // Event listener for sorting tasks
    sortTasks.addEventListener('change', sortAndDisplayTasks);

    // Load tasks on page load
    loadTasks();
});
