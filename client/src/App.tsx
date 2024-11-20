import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
              TaskFlow
            </h1>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Welcome to TaskFlow
          </h2>
          
          {/* Projects Section */}
          <div className="mb-12">
            <h3 className="text-xl font-medium text-gray-700 mb-4">Projects</h3>
            <div className="grid gap-6">
              {/* Project Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Project A</h4>
                    <p className="text-gray-600 text-sm">Description of Project A</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
                    <button className="text-red-600 hover:text-red-700 text-sm font-medium">Delete</button>
                  </div>
                </div>
              </div>

              {/* Project Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Project B</h4>
                    <p className="text-gray-600 text-sm">Description of Project B</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
                    <button className="text-red-600 hover:text-red-700 text-sm font-medium">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tasks Section */}
          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-4">Tasks</h3>
            <div className="space-y-4">
              {/* Task Item */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Task A1</h4>
                    <p className="text-gray-600 text-sm mb-2">Task A1 Description</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Status: pending
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
                    <button className="text-red-600 hover:text-red-700 text-sm font-medium">Delete</button>
                  </div>
                </div>
              </div>

              {/* Task Item */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Task A2</h4>
                    <p className="text-gray-600 text-sm mb-2">Task A2 Description</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Status: completed
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
                    <button className="text-red-600 hover:text-red-700 text-sm font-medium">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;