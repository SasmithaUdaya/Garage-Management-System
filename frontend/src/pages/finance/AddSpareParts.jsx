import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddSpareParts() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null); 
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !price || !image) {
      alert("Please fill out all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

    try {
      await axios.post("http://localhost:5173/backend/addparts/addparts", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("Spare part added successfully");
      navigate('/');
    } catch (error) {
      console.error("Error adding spare part:", error.response.data.message);
      alert("Failed to add spare part. Please try again later.");
    }
  };

  return (
    <div style={{backgroundImage: "url('/Lambogini.jpg')", backgroundSize: "cover", backgroundPosition: "center"}} className="w-full h-full">
      <h1 className="text-4xl p-4">
        <span className="text-yellow-600 font-semibold">Add </span>
        <span className="text-white font-semibold">Spare Parts</span>
      </h1>
      <h1 className="text-xl text-white px-8 font-semibold italic">Add spare parts to items page</h1>

      <div className="max-h-screen p-10 flex items-center justify-center bg-gray-0">
        <div className="min-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-5 items-start justify-center">
            
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-gray-500 p-8 mb-4 rounded-lg w-full md:w-3/4 lg:w-1/2">
            <div className="flex flex-col gap-5 justify-center">
              <div className="flex justify-center">
                <h1 className="text-4xl">
                  <span className="text-yellow-600 font-semibold">Add </span>
                  <span className="text-white font-semibold">Spare Parts</span>
                </h1>
              </div>
              <div className="flex gap-5 items-center">
                <label htmlFor="name" className="text-lg">Name:</label>
                <input required type="text" placeholder="Enter spare part name" className="border p-3 rounded-lg bg-gray-400 placeholder-black text-lg" id="name" name="name" 
                  value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="flex gap-5 items-center">
                <label htmlFor="description" className="text-lg">Description:</label>
                <textarea required placeholder="Enter spare part description" className="border p-4 rounded-lg bg-gray-400 placeholder-black text-lg" id="description" name="description" 
                  value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              <div className="flex gap-5 items-center">
                <label htmlFor="price" className="text-lg">Price:</label>
                <input required type="number" placeholder="Enter price" className="border p-3 rounded-lg bg-gray-400 placeholder-black text-lg" id="price" name="price" 
                  value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
              <div className="flex gap-5 items-center">
                <label htmlFor="image" className="text-lg">Image:</label>
                <input  type="file" accept="image/*" onChange={handleImageChange} className="border p-3 rounded-lg bg-gray-400 placeholder-black text-lg" id="image" name="image" />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="btn btn-success bg-yellow-600 text-black py-1 px-4 font-semibold rounded-md hover:bg-yellow-700 focus:outline-none focus:ring focus:border-blue-300 text-lg">
                  Add Spare Part
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
}
