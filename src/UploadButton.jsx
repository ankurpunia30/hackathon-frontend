import React, { useRef, useState } from 'react';
import { File, FileText, Music, Send } from 'lucide-react';
import Sidebar from './SideNavbar';
import Graph from './Graph';
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
    <div className="flex h-screen bg-gray-800">
      {/* Fixed Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main content area */}
      <div className={`flex-grow flex flex-col ${isSidebarOpen ? 'ml-64' : 'ml-16'} transition-all duration-300`}>
        {/* Canvas area for D3.js visualizations */}
        <div className="flex-grow flex items-center justify-center">
          {/* <canvas id="dataCanvas" className="w-[1200px] h-[500px] border border-gray-600 rounded-md"></canvas> Increased size */}
          <Graph style={{ width: '500px', height: '300px' }}/>
        </div>

        {/* Fixed upload bar at the bottom */}
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

                {/* Display only one file name initially */}
                <div className="flex-grow border rounded-md px-3 py-2 text-gray-200 bg-gray-700">
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

                {/* Submit button with SVG */}
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
