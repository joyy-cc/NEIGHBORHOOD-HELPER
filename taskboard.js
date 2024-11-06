document.addEventListener('DOMContentLoaded', () => {
    const taskBoardSection = document.getElementById('taskBoard');
    
    // Placeholder content for Task Board section
    taskBoardSection.innerHTML = `
        <h2>Task Board</h2>
        <p>Manage and organize tasks within the community!</p>
        <div>
            <h3>Available Tasks</h3>
            <ul id="taskList">
                <!-- List of tasks will appear here -->
            </ul>
        </div>
        <div>
            <h3>Add a Task</h3>
            <form id="taskForm">
                <input type="text" id="taskTitle" placeholder="Enter task title" required>
                <input type="date" id="taskDueDate" required>
                <select id="taskPriority" required>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <button type="submit">Add Task</button>
            </form>
            <div id="taskMessage"></div>
        </div>
    `;

    // Handle task form submission
    document.getElementById('taskForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const taskTitle = document.getElementById('taskTitle').value;
        const taskDueDate = document.getElementById('taskDueDate').value;
        const taskPriority = document.getElementById('taskPriority').value;

        const taskList = document.getElementById('taskList');
        
        // Create a new task element
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <strong>${taskTitle}</strong><br>
            Due: ${taskDueDate}<br>
            Priority: ${taskPriority}
            <button class="completeBtn">Mark as Completed</button>
            <button class="deleteBtn">Delete</button>
        `;
        
        // Append the new task to the task list
        taskList.appendChild(newTask);

        // Display confirmation message
        const message = `Task "${taskTitle}" has been added successfully!`;
        document.getElementById('taskMessage').textContent = message;

        // Clear the form inputs
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDueDate').value = '';
        document.getElementById('taskPriority').value = 'Low';

        // Add event listeners for task buttons
        newTask.querySelector('.completeBtn').addEventListener('click', function () {
            newTask.style.textDecoration = 'line-through';
            newTask.querySelector('.completeBtn').disabled = true; // Disable the "Complete" button
        });

        newTask.querySelector('.deleteBtn').addEventListener('click', function () {
            taskList.removeChild(newTask);
        });
    });
});
