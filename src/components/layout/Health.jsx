import React from 'react'

const Health = () => {
  return (
    <div>
    <h3 className="text-lg font-semibold text-gray-800">System Health</h3>
        <p className="mt-4 text-lg text-gray-600">All systems operational.</p>
        <div className="mt-4">
        <p className="text-sm text-gray-500">Uptime: <span className="font-bold text-green-600">99.98%</span></p>
        <p className="text-sm text-gray-500">Response Time: <span className="font-bold text-blue-600">250ms</span></p>
    </div>
    </div>
  )
}

export default Health