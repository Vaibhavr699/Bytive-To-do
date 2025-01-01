import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/taskSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="bg-primary text-white p-4 flex justify-between">
      <h1 className="text-2xl">To-Do Manager</h1>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded"
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </header>
  );
};

export default Header;