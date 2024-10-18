import React from "react";

const Sidebar = () => {
  return (
    <aside
      className="w-1/4 p-4 border-r border-gray-200 shadow-lg"
      style={{
        backgroundImage:
          "linear-gradient(to right, #0f2027, #203a43, #2c5364)", // Updated gradient
        borderColor: "rgba(93, 79, 240, 0.5)",
      }}
    >
      <h2 className="text-lg font-bold text-white">Knowledge Distiller</h2>
      <ul className="mt-4">
        <li className="hover:text-[#FF7043] hover:shadow-md hover:bg-[#FFF3E0] transition-all duration-300 cursor-pointer p-2 rounded text-white">
          Upload Study Material
        </li>
        <li className="hover:text-[#FF7043] hover:shadow-md hover:bg-[#FFF3E0] transition-all duration-300 cursor-pointer p-2 rounded text-white">
          View Knowledge Graph
        </li>
        <li className="hover:text-[#FF7043] hover:shadow-md hover:bg-[#FFF3E0] transition-all duration-300 cursor-pointer p-2 rounded text-white">
          Search Concepts
        </li>
        <li className="hover:text-[#FF7043] hover:shadow-md hover:bg-[#FFF3E0] transition-all duration-300 cursor-pointer p-2 rounded text-white">
          Collaboration
        </li>
        <li className="hover:text-[#FF7043] hover:shadow-md hover:bg-[#FFF3E0] transition-all duration-300 cursor-pointer p-2 rounded text-white">
          Learning Suggestions
        </li>
        <li className="hover:text-[#FF7043] hover:shadow-md hover:bg-[#FFF3E0] transition-all duration-300 cursor-pointer p-2 rounded text-white">
          Settings
        </li>
        <li className="hover:text-[#FF7043] hover:shadow-md hover:bg-[#FFF3E0] transition-all duration-300 cursor-pointer p-2 rounded text-white">
          Help & Support
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
