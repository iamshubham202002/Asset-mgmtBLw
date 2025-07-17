import React, { useState } from 'react';
import API from '../api';

const AddDepartment = ({ onAdd }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      const res = await API.post('/departments', { name });
      onAdd(res.data);
      setName('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded-xl">
      <h2 className="text-lg font-bold mb-2">➕ Add Department</h2>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Department name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 rounded flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddDepartment;
