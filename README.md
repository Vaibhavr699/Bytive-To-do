<h1>To-Do List Manager</h1>
<p></p>A responsive To-Do List Manager web application that allows users to manage tasks effectively.<br>
The application supports task creation, status updates, and displays tasks fetched from a dummy API (JSONPlaceholder). <br>
The app uses React.js, Redux Toolkit for state management, Tailwind CSS for styling, and Toastify for notifications.<p>

<h2>Features</h2>
<b>Home Page:</b> Displays a list of tasks with their title, description, and status. Users can update the status and delete tasks.<br>
<b>Add Task Page:</b> Allows users to create new tasks by providing a title, description, and status.<br>
<b>Edit Task Page:</b> Enables users to update a task's status (completed or pending).<br>
<b>Task Management:</b> Fetch tasks from an external dummy API (jsonplaceholder.typicode.com), and make REST API calls to fetch, create, and update tasks.<br>
<b>State Management:</b> Redux Toolkit is used for managing the application state.<br>
<b>Notifications:</b> Toastify is used to show success and error notifications.<br><br>

<h2>Technologies Used</h2>
<b>React.js:</b> A JavaScript library for building user interfaces.<br>
<b>Redux Toolkit:</b> A state management tool to handle global state in the application.<br>
<b>Tailwind CSS:</b> A utility-first CSS framework for styling the components.<br>
<b>Toastify:</b> A library for showing notifications (success, error, info) to the user.<br>
<b>JSONPlaceholder:</b> A fake online REST API for testing and prototyping.<br><br>

<h2>Pages</h2>
<b>Home Page:</b> Displays a list of tasks, where each task shows the title, description, and status. Users can toggle the status and delete tasks.<br>
<b>Add Task Page:</b> A form where users can input the task title, description, and status to create a new task.<br>
<b>Edit Task Page:</b> A form for updating the status of a task.<br><br>

<h2>Installation</h2>
<b>Clone the repository:</b>  git clone https://github.com/your-username/todo-list-manager.git<br>
<b>Navigate into the project directory:</b> cd todo-list-manager<br>
<b>Install dependencies:</b> npm install <br>
<b>Run the app:</b> npm start <br>
The app will be available at http://localhost:3000.

<h2>Usage</h2>
Home Page: View and interact with the list of tasks. You can update the status of tasks (complete or pending) and delete tasks.<br>
Add Task Page: Navigate to the Add Task page and fill in the task details (title, description, and status) to create a new task.<br>
Edit Task Page: Update the status of existing tasks by navigating to the Edit Task page.<br>

<h2>State Management with Redux</h2>
<b>taskSlice.js:</b> Manages the state related to tasks, including fetching, adding, and updating tasks.<br><br>

<h2>API Endpoints</h2>
The app interacts with the following endpoints of the JSONPlaceholder API: <br>
<b>GET /todos - Fetch all tasks</b><br>
<b>POST /todos - Create a new task</b><br>
<b>PATCH /todos/{id} - Update a task's status</b><br>
<b>DELETE /todos/{id} - Delete a task</b><br><br>
