import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTask, deleteTask, fetchTasks } from '../redux/taskSlice';

const EditTaskPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate =   useNavigate();
  const { tasks } = useSelector((state) => state.tasks);
  const [task, setTask] = useState(null);

  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(fetchTasks());
    } else {
      const currentTask = tasks.find((t) => t.id === parseInt(id));
      setTask(currentTask || null);
    }
  }, [tasks, id, dispatch]);

  const handleUpdate = () => {
    if (task) {
      dispatch(updateTask(task)).then(() => navigate('/'));
    }
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id)).then(() => navigate('/'));
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Edit Task</h1>
      <label className="block mb-2">
        Title:
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </label>
      <label className="block mb-4">
        Status:
        <select
          value={task.completed ? 'completed' : 'pending'}
          onChange={(e) =>
            setTask({ ...task, completed: e.target.value === 'completed' })
          }
          className="w-full p-2 border rounded"
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <div className="flex gap-4">
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Update Task
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
        >
          Delete Task
        </button>
        <button
          onClick={() => navigate('/')}
          className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTaskPage;
