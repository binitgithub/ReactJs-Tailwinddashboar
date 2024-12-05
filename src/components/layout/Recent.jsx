import React from 'react'

const Recent = () => {
  return (
    <div>
        <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center justify-between">
                  <span>User logged in</span>
                  <span className="text-gray-500">2 hours ago</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>New sale</span>
                  <span className="text-gray-500">5 hours ago</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>System update</span>
                  <span className="text-gray-500">1 day ago</span>
                </li>
              </ul>
    </div>
  )
}

export default Recent