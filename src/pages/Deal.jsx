import React from 'react';
import Navbar from '../components/common/Navbar';
import Header from '../components/layout/Header';
import TableComponent from '../components/common/TableComponent';

const Deal = () => {
  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <Navbar/>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header/>
        {/* Dashboard Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <TableComponent/>
        </main>
      </div>
    </div>
    
  )
}

export default Deal