import React from 'react';
import Navbar from '../components/common/Navbar';
import Header from '../components/layout/Header';
import Stactics from '../components/layout/Stactics';
import Recent from '../components/layout/Recent';
import Health from '../components/layout/Health';
import ExpensesChart from '../components/common/ExpensesChart';
import PieChart from '../components/common/PieChart';

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <Navbar/>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header/>
        {/* Dashboard Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <Stactics/>
          {/* Additional Analytics Section */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Recent/>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
             <Health/>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
             <ExpensesChart/>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
             <PieChart/>
            </div>
          </div>
        </main>
      </div>
    </div>
    
  )
}

export default Dashboard