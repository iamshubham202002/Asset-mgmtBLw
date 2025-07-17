// src/App.jsx

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DepartmentList from './components/DepartmentList';
import ProductList from './components/ProductList';
import AddDepartment from './components/AddDepartment';
import API from './api';

const App = () => {
  const [departmentsData, setDepartmentsData] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [sentOtp, setSentOtp] = useState('');

  const fetchDepartments = async () => {
    try {
      const res = await API.get('/departments');
      setDepartmentsData(res.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchDepartments();
    }
  }, [isLoggedIn]);

  const handleSelect = (department) => {
    if (!selectedDepartments.find((d) => d._id === department._id)) {
      setSelectedDepartments([...selectedDepartments, department]);
    }
  };

  const handleRemove = (id) => {
    setSelectedDepartments(selectedDepartments.filter((dept) => dept._id !== id));
  };

  const handleAddDepartment = (newDept) => {
    setDepartmentsData([...departmentsData, newDept]);
  };

  const handleDeleteDepartment = async (id) => {
    try {
      await API.delete(`/departments/${id}`);
      setDepartmentsData(departmentsData.filter((d) => d._id !== id));
      setSelectedDepartments(selectedDepartments.filter((d) => d._id !== id));
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  const handleSendOtp = () => {
    if (!email) return alert('Enter your email first!');
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setSentOtp(randomOtp);
    alert(`OTP sent to ${email}: ${randomOtp}`);
  };

  const handleVerifyOtp = () => {
    if (otp === sentOtp) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid OTP!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setOtp('');
    setSentOtp('');
    setDepartmentsData([]);
    setSelectedDepartments([]);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      {!isLoggedIn ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 pt-20">
          <div className="bg-white shadow-md rounded p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-3 py-2 mb-4 w-full rounded"
            />
            <button
              onClick={handleSendOtp}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4 w-full transition"
            >
              Send OTP
            </button>
            {sentOtp && (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="border px-3 py-2 mb-4 w-full rounded"
                />
                <button
                  onClick={handleVerifyOtp}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full transition"
                >
                  Verify & Login
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-100 pt-24 px-6">
          <h1 className="text-3xl font-bold mb-6">Department List</h1>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 space-y-6">
              <AddDepartment onAdd={handleAddDepartment} />

              <DepartmentList
                departments={departmentsData}
                onSelect={handleSelect}
                selectedDepartments={selectedDepartments}
                onDelete={handleDeleteDepartment}
              />
            </div>

            <div className="w-full md:w-3/4 flex flex-col gap-6">
              {selectedDepartments.length === 0 ? (
                <p className="text-gray-500">
                  Select departments to show their products.
                </p>
              ) : (
                selectedDepartments.map((dept) => (
                  <ProductList
                    key={dept._id}
                    department={dept}
                    onRemove={handleRemove}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
