import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import emailjs from 'emailjs-com';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Social media icons

export const QandA = () => {
  // Get current user data from Redux store
  const currentUser = useSelector((state) => state.user.currentUser);

  // Initialize form data with current user's information
  const [formData, setFormData] = useState({
    email: currentUser ? currentUser.email : '',
    name: currentUser ? currentUser.name : '',
    phone: currentUser ? currentUser.phone : '',
    question: '',
  });

  // Update form data when currentUser changes
  useEffect(() => {
    if (currentUser) {
      setFormData({
        email: currentUser.email,
        name: currentUser.name,
        phone: currentUser.phone,
        question: formData.question, // Keep existing question
      });
    }
  }, [currentUser]); // Run when currentUser changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_iv7fuqp', // EmailJS service ID
        'template_zid8h2x', // EmailJS template ID
        {
          email: formData.email,
          name: formData.name,
          phone: formData.phone,
          question: formData.question,
        },
        'PlL9al8BtlP6AwR_q' // EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Question sent:', result.text);
          setFormData({ email: '', name: '', phone: '', question: '' }); // Clear form data after success
        },
        (error) => {
          console.error('Failed to send question:', error.text);
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 flex-col">
      <h2 className="text-2xl mb-4 mt-4 font-bold">GET IN TOUCH</h2>
      <h1 className="text-sm mb-4 italic">Phone: 077 358 0425</h1>
      <h1 className="text-sm mb-4 italic">Email: egmotors@gmail.com</h1>
      <h1 className="text-sm mb-4 italic">
        Address: 359/1/1, Nagahamawatha, Pelenwaththa, Pannipitiya, Sri Lanka
      </h1>
      <div className="bg-gradient-to-l from-white to-gray-300 p-6 rounded-lg shadow-lg w-2/3">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col sm:flex-row"> {/* Two-column layout for form */}
            <div className="flex flex-col sm:w-1/2 sm:mr-4"> {/* Left column */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-2 p-2 w-full rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-2 p-2 w-full rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone:
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-2 p-2 w-full rounded"
                />
              </div>
            </div>
            <div className="flex flex-col sm:w-1/2"> {/* Right column */}
              <div className="mb-6">
                <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                  Message:
                </label>
                <textarea
                  name="question"
                  id="question"
                  value={formData.question}
                  onChange={handleChange}
                  className="border-2 p-3 w-full rounded"
                  rows="7"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-md">
              Send Question
            </button>
          </div>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center mt-6 gap-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-700">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          <FaTwitter size={30} />
        </a>
      </div>

      <div className="text-center mt-4 text-gray-700">
        <p>Follow us on social media for the latest updates and exclusive content.</p>
        <p>Join our community and stay connected with us.</p>
        <p>Discover our work, customer testimonials, and upcoming events.</p>
      </div>
    </div>
  );
};
