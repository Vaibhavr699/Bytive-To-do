import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, setFilter } from '../redux/taskSlice';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const { tasks, status, filter, searchTerm } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  }).filter(task => task.title.includes(searchTerm));

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <div className="flex gap-4 mb-4">
        <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">Add Task</Link>
        <button onClick={() => dispatch(setFilter('all'))} className="bg-gray-500 text-white px-4 py-2 rounded">All</button>
        <button onClick={() => dispatch(setFilter('completed'))} className="bg-green-500 text-white px-4 py-2 rounded">Completed</button>
        <button onClick={() => dispatch(setFilter('pending'))} className="bg-red-500 text-white px-4 py-2 rounded">Pending</button>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredTasks.map(task => (
          <div key={task.id} className="p-4 bg-white border rounded shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
            <p className="text-gray-700">{task.completed ? 'Completed' : 'Pending'}</p>
            <Link to={`/edit/${task.id}`} className="mt-2 inline-block bg-secondary text-white px-3 py-1 rounded">Edit</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;