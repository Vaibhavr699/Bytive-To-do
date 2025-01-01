import React from 'react';

const AddTaskPage = () => {
  // Task creation logic will go here
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Add New Task</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Title" required className="w-full p-2 border rounded" />
        <textarea placeholder="Description" required className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskPage;