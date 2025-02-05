import React, { useEffect, useState } from "react";
import axios from "../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const HomePage = () => {
  const [templates, setTemplates] = useState([]);
  const navigate = useNavigate();

  // Fetch templates from backend
  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get("/email/templates");
        setTemplates(response.data); // Save fetched templates
      } catch (error) {
        console.error("Error fetching templates:", error);
        toast.error("Failed to fetch templates. Please try again.");
      }
    };

    fetchTemplates();
  }, []);

  const handlePreview = (template) => {
    const newWindow = window.open();
    newWindow.document.write(template.content);
    newWindow.document.close();
  };

  const handleEdit = (template) => {
    navigate("/editor", { state: { template } });
  };

  return (
    <div className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500">
      {/* Main Wrapper */}
      <div className="min-h-screen bg-white rounded-lg shadow-lg">
        {/* Header Section */}
        <header className="text-center py-10  bg-white text-gray-900 rounded-t-lg">
          <h1 className="text-5xl font-bold mb-4">Email Template Builder</h1>
          <p className="text-lg">
            Create, customize, and download professional email templates
            effortlessly.
          </p>
        </header>

        {/* Hero Section */}
        <section className="py-16 px-10 bg-gray-50">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
            Why You'll Love Using Our Email Builder
          </h2>
          <div className="space-y-10 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full">
                  <i className="fas fa-hand-pointer text-3xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Intuitive and Easy to Use
                </h3>
                <p className="text-gray-600 mt-2">
                  Our builder is designed for everyone. Whether you're a tech
                  guru or a complete beginner, you’ll find editing and
                  customizing templates a breeze.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-green-100 text-green-500 flex items-center justify-center rounded-full">
                  <i className="fas fa-briefcase text-3xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Professional-Grade Templates
                </h3>
                <p className="text-gray-600 mt-2">
                  Get access to beautifully designed email templates that make a
                  lasting impression. From newsletters to announcements, we’ve
                  got you covered.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-purple-100 text-purple-500 flex items-center justify-center rounded-full">
                  <i className="fas fa-save text-3xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Save & Download in Seconds
                </h3>
                <p className="text-gray-600 mt-2">
                  Save your work with just one click and download your templates
                  as HTML files to use them wherever you need.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-yellow-100 text-yellow-500 flex items-center justify-center rounded-full">
                  <i className="fas fa-mobile-alt text-3xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Responsive and Ready for Any Device
                </h3>
                <p className="text-gray-600 mt-2">
                  Every template is optimized for mobile, desktop, and
                  everything in between. Your emails will look perfect on any
                  screen.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-pink-100 text-pink-500 flex items-center justify-center rounded-full">
                  <i className="fas fa-eye text-3xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Preview Before Sending
                </h3>
                <p className="text-gray-600 mt-2">
                  Get a clear picture of how your email will look before
                  finalizing it, ensuring every detail is perfect.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-teal-100 text-teal-500 flex items-center justify-center rounded-full">
                  <i className="fas fa-paint-brush text-3xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Full Customization
                </h3>
                <p className="text-gray-600 mt-2">
                  Personalize everything from text and images to layout and
                  design, giving your email the unique touch it deserves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section className="py-10 px-6">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
            Choose a Template
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* No Templates Found */}
            {templates.length === 0 && (
              <p className="text-center text-gray-500 col-span-full">
                No templates found. Please add templates to start.
              </p>
            )}

            {/* Render Templates */}
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-md rounded-lg overflow-hidden group relative hover:shadow-lg transition-shadow duration-300"
              >
                {/* Template Preview */}
                <div
                  className="h-72 w-full bg-gray-200"
                  dangerouslySetInnerHTML={{ __html: template.content }}
                ></div>

                {/* Hover Buttons */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <button
                    className="w-24 py-2 text-blue-500 bg-white border-2 border-blue-200 hover:text-white font-semibold rounded mb-2 hover:bg-blue-600"
                    onClick={() => handlePreview(template)}
                  >
                    Preview
                  </button>
                  <button
                    className="w-24 py-2 text-green-500 bg-white border-2 border-green-200 hover:text-white font-semibold rounded hover:bg-green-600"
                    onClick={() => handleEdit(template)}
                  >
                    Edit
                  </button>
                </div>

                {/* Template Name */}
                <div className="p-4 relative z-30 bg-gray-50">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {template.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
