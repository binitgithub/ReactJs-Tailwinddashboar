import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog, faPhone, faHandshake, faBars, faBullhorn, faFileInvoice , faEnvelope, faChartLine, faUserCircle, faChartBar, faClipboardList, faBoxOpen,  faChartPie,  faCalendarAlt,  faTasks, faBriefcase, faSignOutAlt, } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex">
      <div className={`bg-gray-900 text-white ${isSidebarOpen ? 'w-56' : 'w-16'} transition-all duration-300`}>
      <div className="flex items-center justify-between p-4 bg-white text-gray-500">
          <h1 className={`text-xl font-bold ${!isSidebarOpen && 'hidden'}`}>Dashboard</h1>
          <button onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} className="text-gray-900" />
          </button>
        </div>
    <nav className="mt-4">
          {[
            { name: 'Home', icon: faHome },
            { name: 'Lead', icon: faPhone  },
            { name: 'Contact', icon: faUser },
            { name: 'Account', icon: faBriefcase },
            { name: 'Deal', icon: faHandshake  },
            { name: 'Task', icon: faTasks },
            { name: 'Meetings', icon: faCalendarAlt },
            { name: 'Call', icon: faPhone },
            { name: 'Reports', icon: faChartBar },
            { name: 'Analytics', icon: faChartPie },
            { name: 'Services', icon: faClipboardList },
            { name: 'Products', icon: faBoxOpen },
            { name: 'Role', icon: faUserCircle },
            { name: 'Activity', icon: faChartLine },
            { name: 'Campaign', icon: faBullhorn },
            { name: 'Email', icon: faEnvelope },
            { name: 'Quote', icon: faHome },
            { name: 'Lead', icon: faFileInvoice },
            { name: 'Profile', icon: faUser },
            { name: 'Settings', icon: faCog },
            { name: 'Logout', icon: faSignOutAlt }
          ].map((item) => (
            <Link
            key={item.name}
            to={`/${item.name.toLowerCase()}`}
            className="flex items-center py-2 px-6 hover:bg-gray-700 transition duration-300"
          >
            <FontAwesomeIcon icon={item.icon} className="mr-3" />
            <span className={`ml-4 ${!isSidebarOpen && 'hidden'}`}>{item.name}</span>
          </Link>
          ))}
        </nav>
        </div>
      </div>
  )
}

export default Navbar