import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import API from '../api';

const DepartmentList = ({ departments, onSelect, selectedDepartments, onDelete }) => {
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure?')) return;
    try {
      await API.delete(`/departments/${id}`);
      onDelete(id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-bold mb-3">Departments</h2>
      <ul className="space-y-2">
        {departments.map((dep) => (
          <li key={dep._id} className="flex justify-between items-center">
            <button
              onClick={() => onSelect(dep)}
              disabled={selectedDepartments.find((d) => d._id === dep._id)}
              className={`flex-grow text-left px-4 py-2 rounded transition ${
                selectedDepartments.find((d) => d._id === dep._id)
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {dep.name}
            </button>
            <button
              onClick={() => handleDelete(dep._id)}
              className="ml-2 text-gray-400 hover:text-red-500"
              title="Delete department"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentList;
