import React from 'react'

const Stactics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Statistic Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">1,234</p>
              <p className="mt-2 text-sm text-gray-500">Updated just now</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Sales</h3>
              <p className="mt-2 text-3xl font-bold text-green-600">$12,345</p>
              <p className="mt-2 text-sm text-gray-500">Last 24 hours</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Performance</h3>
              <p className="mt-2 text-3xl font-bold text-yellow-600">87%</p>
              <p className="mt-2 text-sm text-gray-500">Compared to last week</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
              <p className="mt-2 text-3xl font-bold text-red-600">5</p>
              <p className="mt-2 text-sm text-gray-500">Pending alerts</p>
            </div>
          </div>

          
  )
}

export default Stactics