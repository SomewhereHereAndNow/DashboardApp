function openFolder(folderName) {
    const tasks = getTasksForFolder(folderName);
    displayTasksInGroups(tasks);
}

function getTasksForFolder(folderName) {
    switch (folderName) {
        case 'Folder 1':
            return ['Task 1','Task2','Task3'];
        case 'Folder 2':
            return ['Task 4','Task5','Task 6'];
        case 'Folder 3':
            return ['Task 7','Task 8','Task 9'];
        case 'Folder 4':
            return ['Task 10','Task 11','Task 12'];
        case 'Folder 5':
            return ['Task 13','Task 14','Task 15'];
        
        default:
            return [];
    }
}

function displayTasksInGroups(tasks) {
    for (let i = 1; i <= 6; i++) {
        const groupDiv = document.getElementById(`Group${i}`);
        if (!groupDiv) continue;  
 
        groupDiv.innerHTML = '';
 
        const startIndex = (i - 1) * 3;
        const tasksForGroup = tasks.slice(startIndex, startIndex + 3);  
 
        tasksForGroup.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.textContent = task;
            taskDiv.classList.add('Task');  
            groupDiv.appendChild(taskDiv);  
        });
    }
}
function clearTasks() {
    const taskContainers = document.querySelectorAll('.Group1, .Group2, .Group3, .Group4, .Group5, .Group6');
    taskContainers.forEach(container => {
        container.innerHTML = '';
    });
}

function saveTasks() {
    alert('Tasks saved successfully!');
}

function exitPage() {
    window.close();
}
function findTask() {
    const searchTerm = prompt('Enter the task you want to find:');
    if (searchTerm) {
        const taskContainers = document.querySelectorAll('.Group1, .Group2, .Group3, .Group4, .Group5, .Group6');
        let found = false;
        taskContainers.forEach(container => {
            const tasks = container.querySelectorAll('.Task');
            tasks.forEach(task => {
                if (task.textContent.trim().toLowerCase() === searchTerm.trim().toLowerCase()) {
                    task.style.backgroundColor = 'yellow'; // Highlight the found task
                    found = true;
                }
            });
        });
        if (!found) {
            alert('Task not found!');
        }
    }
}