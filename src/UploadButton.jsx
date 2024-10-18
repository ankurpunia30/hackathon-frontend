// import React, { useRef, useState } from 'react';
// import { Button } from './ui/button'; // Updated import path
// import { File, FileText, ImageIcon, Music, X } from 'lucide-react'; // Importing the cancel icon

// const UploadButton = () => {
//   const fileInputRef = useRef(null); // Ref for the file input
//   const [fileNames, setFileNames] = useState([]); // State to store selected file names
//   const [files, setFiles] = useState([]); // State to store the actual file objects

//   const handleFileUpload = (type) => {
//     fileInputRef.current.setAttribute('accept', type === 'image' ? 'image/' : type === 'text' ? '.txt,.doc,.docx' : type === 'pdf' ? '.pdf' : 'audio/');
//     fileInputRef.current.click(); // Trigger file input click
//   };

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     const newFileNames = selectedFiles.map(file => file.name); // Get file names
//     setFileNames(prevFileNames => [...prevFileNames, ...newFileNames]); // Update the state with new file names
//     setFiles(prevFiles => [...prevFiles, ...selectedFiles]); // Store the actual file objects
//     fileInputRef.current.value = ''; // Clear input
//   };

//   const handleRemoveFile = (fileName) => {
//     const index = fileNames.indexOf(fileName);
//     if (index > -1) {
//       setFileNames(prevFileNames => prevFileNames.filter(name => name !== fileName));
//       setFiles(prevFiles => prevFiles.filter((_, i) => i !== index)); // Remove the file from the files state
//     }
//   };

//   // Placeholder for backend file upload functionality
//   const uploadFilesToBackend = async (formData) => {
//     // Replace this with actual API call in the future
//     console.log('Files ready to be sent to backend:', formData);
//     // Uncomment the following block when ready to integrate with backend
//     /*
//     try {
//       const response = await fetch('/your-backend-api-endpoint', {
//         method: 'POST',
//         body: formData,
//       });

//       return response.ok; // Return success status
//     } catch (error) {
//       console.error('Error uploading files:', error);
//       return false; // Return failure status
//     }
//     */
//     return true; // Simulate a successful upload for now
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     const formData = new FormData();
//     files.forEach(file => {
//       formData.append('files', file); // Append each file to the FormData object
//     });

//     const success = await uploadFilesToBackend(formData); // Call the upload function
//     if (success) {
//       alert('Files submitted successfully!');
//       // Reset states after submission
//       setFileNames([]); // Clear selected files
//       setFiles([]); // Clear actual files
//       fileInputRef.current.value = ''; // Reset the file input
//     } else {
//       alert('Error submitting files. Please try again.');
//     }
//   };

//   return (
//     <div className="flex-grow flex items-center justify-center flex-col">
//       <input
//         type="file"
//         ref={fileInputRef}
//         className="hidden"
//         onChange={handleFileChange}
//         multiple // Allow multiple file selection
//       />

//       <form onSubmit={handleSubmit} className="border border-black rounded-md p-6">
//         <div className="flex gap-4">
//           <Button
//             variant="ghost"
//             className="bg-[#90D5FF] hover:bg-[#1997e6] min-w-[120px] h-12 flex items-center justify-center border border-gray-300 rounded"
//             onClick={() => handleFileUpload('image')}
//             type="button" // Prevent form submission
//           >
//             <ImageIcon className="w-6 h-6 text-blue-500 mr-2" />
//             Image
//           </Button>
//           <Button
//             variant="ghost"
//             className="bg-[#90D5FF] hover:bg-[#1997e6] min-w-[120px] h-12 flex items-center justify-center border border-gray-300 rounded"
//             onClick={() => handleFileUpload('text')}
//             type="button" // Prevent form submission
//           >
//             <FileText className="w-6 h-6 text-blue-500 mr-2" />
//             Text
//           </Button>
//           <Button
//             variant="ghost"
//             className="bg-[#90D5FF] hover:bg-[#1997e6] min-w-[120px] h-12 flex items-center justify-center border border-gray-300 rounded"
//             onClick={() => handleFileUpload('pdf')}
//             type="button" // Prevent form submission
//           >
//             <File className="w-6 h-6 text-red-500 mr-2" />
//             Pdf
//           </Button>
//           <Button
//             variant="ghost"
//             className="bg-[#90D5FF] hover:bg-[#1997e6] min-w-[120px] h-12 flex items-center justify-center border border-gray-300 rounded"
//             onClick={() => handleFileUpload('audio')}
//             type="button" // Prevent form submission
//           >
//             <Music className="w-6 h-6 text-green-500 mr-2" />
//             Audio
//           </Button>
//         </div>

//         {/* Display selected file names */}
       

//         {/* Submit button centered below the grid */}
//         <div className="flex justify-center mt-4">
//           <Button
//             variant="ghost"
//             className="bg-[#FF7043] hover:bg-[#E64A19] min-w-[120px] h-12 flex items-center justify-center border border-gray-300 rounded"
//             type="submit" // Set as submit button
//           >
//             Submit
//           </Button>
//         </div>
//       </form>
//       <div className="mt-4">
//         {fileNames.length > 0 && (
//           <div>
//             <h4 className="font-semibold">Selected Files:</h4>
//             <ul className="list-disc pl-5">
//               {fileNames.map((name, index) => (
//                 <li key={index} className="text-gray-700 flex items-center justify-between">
//                   <span>{name}</span>
//                   <button onClick={() => handleRemoveFile(name)} className="text-red-500 ml-2">
//                     <X className="w-4 h-4" /> {/* Cancel icon */}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UploadButton;

import React, { useRef, useState } from 'react';
import { Button } from './ui/button'; // Updated import path
import { File, FileText, ImageIcon, Music, X } from 'lucide-react'; // Importing the cancel icon

const UploadButton = () => {
  const fileInputRef = useRef(null); // Ref for the file input
  const [fileNames, setFileNames] = useState([]); // State to store selected file names
  const [files, setFiles] = useState([]); // State to store the actual file objects

  const handleFileUpload = (type) => {
    fileInputRef.current.setAttribute('accept', type === 'image' ? 'image/' : type === 'text' ? '.txt,.doc,.docx' : type === 'pdf' ? '.pdf' : 'audio/');
    fileInputRef.current.click(); // Trigger file input click
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newFileNames = selectedFiles.map(file => file.name); // Get file names
    setFileNames(prevFileNames => [...prevFileNames, ...newFileNames]); // Update the state with new file names
    setFiles(prevFiles => [...prevFiles, ...selectedFiles]); // Store the actual file objects
    fileInputRef.current.value = ''; // Clear input
  };

  const handleRemoveFile = (fileName) => {
    const index = fileNames.indexOf(fileName);
    if (index > -1) {
      setFileNames(prevFileNames => prevFileNames.filter(name => name !== fileName));
      setFiles(prevFiles => prevFiles.filter((_, i) => i !== index)); // Remove the file from the files state
    }
  };

  const uploadFilesToBackend = async (formData) => {
    // Placeholder for backend file upload functionality
    console.log('Files ready to be sent to backend:', formData);
    return true; // Simulate a successful upload for now
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file); // Append each file to the FormData object
    });

    const success = await uploadFilesToBackend(formData); // Call the upload function
    if (success) {
      alert('Files submitted successfully!');
      // Reset states after submission
      setFileNames([]); // Clear selected files
      setFiles([]); // Clear actual files
      fileInputRef.current.value = ''; // Reset the file input
    } else {
      alert('Error submitting files. Please try again.');
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center flex-col">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        multiple // Allow multiple file selection
      />

      <form onSubmit={handleSubmit} className="rounded-md p-6"> {/* Removed border */}
        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="bg-[#90D5FF] hover:bg-[#1997e6] min-w-[120px] h-12 flex items-center justify-center rounded"
            onClick={() => handleFileUpload('image')}
            type="button"
          >
            <ImageIcon className="w-6 h-6 text-blue-500 mr-2" />
            Image
          </Button>
          <Button
            variant="ghost"
            className="bg-[#90D5FF] hover:bg-[#1997e6] min-w-[120px] h-12 flex items-center justify-center rounded"
            onClick={() => handleFileUpload('text')}
            type="button"
          >
            <FileText className="w-6 h-6 text-blue-500 mr-2" />
            Text
          </Button>
          <Button
            variant="ghost"
            className="bg-[#90D5FF] hover:bg-[#1997e6] min-w-[120px] h-12 flex items-center justify-center rounded"
            onClick={() => handleFileUpload('pdf')}
            type="button"
          >
            <File className="w-6 h-6 text-red-500 mr-2" />
            Pdf
          </Button>
          <Button
            variant="ghost"
            className="bg-[#90D5FF] hover:bg-[#1997e6] min-w-[120px] h-12 flex items-center justify-center rounded"
            onClick={() => handleFileUpload('audio')}
            type="button"
          >
            <Music className="w-6 h-6 text-green-500 mr-2" />
            Audio
          </Button>
        </div>

        {/* Submit button centered below the grid */}
        <div className="flex justify-center mt-4">
          <Button
            variant="ghost"
            className="bg-[#FF7043] hover:bg-[#E64A19] min-w-[120px] h-12 flex items-center justify-center rounded"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>

      {/* Display selected file names */}
      <div className="mt-4">
        {fileNames.length > 0 && (
          <div>
            <h4 className="font-semibold">Selected Files:</h4>
            <ul className="list-disc pl-5">
              {fileNames.map((name, index) => (
                <li key={index} className="text-gray-700 flex items-center justify-between">
                  <span>{name}</span>
                  <button onClick={() => handleRemoveFile(name)} className="text-red-500 ml-2">
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadButton;