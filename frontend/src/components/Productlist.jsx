import React, { useEffect, useState } from 'react';
import API from '../api';
import { XMarkIcon } from '@heroicons/react/24/solid';

const ProductList = ({ department, onRemove }) => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get(`/products?departmentId=${department._id}`);
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, [department]);

  const handleAdd = async () => {
    if (!name.trim()) return;

    try {
      const res = await API.post('/products', {
        name,
        department: department._id,
      });
      setProducts([...products, res.data]);
      setName('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/products/${id}`);
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{department.name} Products</h3>
        <button
          onClick={() => onRemove(department._id)}
          className="text-gray-400 hover:text-red-500"
          title="Remove Department"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>

      {products.length === 0 ? (
        <p className="text-gray-500 mb-4">No products for this department yet.</p>
      ) : (
        <ul className="mb-4 space-y-2">
          {products.map((product) => (
            <li
              key={product._id}
              className="flex justify-between items-center border rounded px-3 py-1"
            >
              <span>{product.name}</span>
              <button
                onClick={() => handleDelete(product._id)}
                className="text-sm text-red-500 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 rounded flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductList;
