import React, { useRef, useState } from 'react';
import { File, FileText, Music, Send } from 'lucide-react';
import Graph from './Graph';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed ${
        isOpen ? "w-64" : "w-20"
      } h-full transition-all duration-300 ease-in-out shadow-lg`} 
      style={{
        background: "#1F2937", // Set background color to gray-800
        borderRight: "1px solid rgba(92, 79, 240, 0.2)",
        margin: 0,
        padding: 0,
      }}
    >
      <div className="flex flex-col h-full">
        {/* Fixed header section */}
        <div className="p-4">
          {isOpen && (
            <h2 className="text-lg font-bold text-white">Menu</h2> // Set text color to white
          )}
        </div>

        {/* List section (non-scrollable) */}
        <div className="flex-grow overflow-hidden">
          <ul className="mt-4 space-y-2">
            {[
              "Upload Study Material",
              "View Knowledge Graph",
              "Search Concepts",
              "Collaboration",
              "Learning Suggestions",
              "Settings",
              "Help & Support",
            ].map((item) => (
              <li
                key={item}
                className={`hover:text-[#FF7043] hover:shadow-md hover:bg-[#FFF3E0] transition-all duration-300 cursor-pointer p-2 rounded text-white ${
                  isOpen ? "" : "text-center"
                }`}
              >
                {isOpen ? item : ""}
              </li>
            ))}
          </ul>
        </div>

        {/* Fixed footer section with toggle button */}
        <div className="flex flex-col items-center p-4">
          <button
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
            className="text-white focus:outline-none hover:text-gray-400"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 12H5m7 7l-7-7 7-7"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {isOpen && (
            <p className="text-sm text-white mt-2">
              &copy; {new Date().getFullYear()} Knowledge Distiller
            </p>
          )}
        </div>
      </div>
    </aside>
  );
};

const UploadButton = () => {
  const fileInputRef = useRef(null);
  const [fileNames, setFileNames] = useState([]);
  const [files, setFiles] = useState([]);
  const [showAllFiles, setShowAllFiles] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleFileUpload = (type) => {
    fileInputRef.current.setAttribute(
      'accept',
      type === 'text'
        ? '.txt,.doc,.docx'
        : type === 'pdf'
        ? '.pdf'
        : 'audio/*'
    );
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newFileNames = selectedFiles.map((file) => file.name);
    setFileNames((prevFileNames) => [...prevFileNames, ...newFileNames]);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    fileInputRef.current.value = '';
  };

  const uploadFilesToBackend = async (formData) => {
    console.log('Files ready to be sent to backend:', formData);
    return true; // Simulate a successful upload for now
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });

    const success = await uploadFilesToBackend(formData);
    if (success) {
      alert('Files submitted successfully!');
      setFileNames([]);
      setFiles([]);
      fileInputRef.current.value = '';
    } else {
      alert('Error submitting files. Please try again.');
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-800">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main content area */}
      <div className={`flex-grow flex flex-col ${isSidebarOpen ? 'ml-64' : 'ml-16'} transition-all duration-300 overflow-y-auto`}>
        {/* Canvas area for D3.js visualizations */}
        <div className="flex-grow flex items-center justify-center">
          <div
            className="w-[1200px] h-[550px] bg-gray-800 border-gray-300 shadow-lg rounded-md p-4 overflow-hidden"
            style={{ position: 'relative' }}
          >
            {/* Graph rendering within the canvas */}
            {/* Placeholder for Graph component */}
            <div style={{ width: '100%', height: '100%', backgroundColor: '#1F2937' }}>
              <Graph/>
            </div>
          </div>
        </div>

        {/* Upload bar at the bottom */}
        <div className={`fixed bottom-0 ${isSidebarOpen ? 'left-64' : 'left-16'} w-full p-4 transition-all duration-300`}>
          <div className="w-full max-w-4xl mx-auto flex justify-center">
            <div className="w-full bg-gray-800 p-4 rounded-full shadow-lg flex flex-col justify-center items-center transform transition-transform duration-300 hover:scale-105">
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
                multiple
              />

              <form onSubmit={handleSubmit} className="flex items-center w-full">
                {/* File type buttons on the left */}
                <div className="flex gap-2">
                  <button className="hover:bg-gray-700 p-2 rounded-full" onClick={() => handleFileUpload('text')} type="button">
                    <FileText className="w-6 h-6 text-white" />
                  </button>
                  <button className="hover:bg-gray-700 p-2 rounded-full" onClick={() => handleFileUpload('pdf')} type="button">
                    <File className="w-6 h-6 text-white" />
                  </button>
                  <button className="hover:bg-gray-700 p-2 rounded-full" onClick={() => handleFileUpload('audio')} type="button">
                    <Music className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Display file names */}
                <div className="flex-grow border rounded-md px-3 py-2 text-gray-200 bg-gray-700 overflow-x-auto">
                  {fileNames.length > 0 ? (
                    <div className="flex items-center justify-between">
                      <span>{fileNames[0]}</span>
                      {fileNames.length > 1 && (
                        <button
                          type="button"
                          className="text-blue-400"
                          onClick={() => setShowAllFiles(!showAllFiles)}
                        >
                          {showAllFiles ? 'Show Less' : `+ ${fileNames.length - 1} More`}
                        </button>
                      )}
                    </div>
                  ) : (
                    <span>No files selected</span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadButton;
