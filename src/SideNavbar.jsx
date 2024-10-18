import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "w-64" : "w-20"
        } h-screen transition-all duration-300 ease-in-out shadow-lg`}
        style={{
          background: "linear-gradient(180deg, rgba(50, 50, 50, 0.8), rgba(20, 20, 20, 0.8))",
          borderRight: "1px solid rgba(92, 79, 240, 0.2)",
        }}
      >
        <div className="flex flex-col h-full justify-between p-4">
          {/* Top Section */}
          <div>
            <div className="flex justify-between items-center">
              {isOpen && (
                <h2 className="text-lg font-bold text-white">
                  Knowledge Distiller
                </h2>
              )}
              <button
                onClick={toggleSidebar}
                className="text-white focus:outline-none hover:text-gray-300"
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
            </div>

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

          {/* Bottom Section */}
          <div className="flex justify-center items-center">
            {isOpen && (
              <p className="text-sm text-white">
                &copy; {new Date().getFullYear()} Knowledge Distiller
              </p>
            )}
          </div>
        </div>
      </aside>

      {/* Main content placeholder */}
      <main className="flex-1 bg-gray-100 p-4">
        <h1 className="text-xl font-bold">Main Content Area</h1>
        <p>This is where the main app content will go.</p>
      </main>
    </div>
  );
};

export default Sidebar;
