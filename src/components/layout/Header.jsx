import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser, faPlus, faExpand, faCog } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <div>
        {/* Top Bar */}
        <header className="bg-white shadow px-4 py-3 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          <div className="flex items-center space-x-4 p-2.5">
            <FontAwesomeIcon icon={faSearch} className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer" />
            <FontAwesomeIcon icon={faBell} className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer" />
            <FontAwesomeIcon icon={faPlus} className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer" /> {/* Adding icon */}
            <FontAwesomeIcon icon={faExpand} className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer" /> {/* Fullscreen icon */}
            <FontAwesomeIcon icon={faUser} className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer" /> {/* Profile icon */}
            <FontAwesomeIcon icon={faCog} className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer" /> {/* Settings icon */}
          </div>
        </header>
    </div>
  )
}

export default Header