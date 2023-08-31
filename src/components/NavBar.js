import { NavLink } from 'react-router-dom';
import "../styles/NavBar.css";


const NavBar = () => {
  const handleShowMenu = (e) => {
    const menuItem = document.getElementById("navbar-default");
    menuItem.classList.toggle("hidden");
  };

  return(
    <nav className="w-full mx-auto px-28 py-5">
      <div>
        <NavLink to="/home" className="link self-center text-3xl font-black text-white">
          THINKLab
        </NavLink>
      </div>

      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"
              onClick={handleShowMenu}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li className="">
            <NavLink to="/home" className="link">
              About Us
            </NavLink>
          </li>

          <li className="">
            <NavLink to="/people" className="link">
              People
            </NavLink>
          </li>

          <li className="">
            <NavLink to="/splashes" className="link">
              Splashes
            </NavLink>
          </li>

          <li className="">
            <NavLink to="/publications" className="link">
              Publications
            </NavLink>
          </li>

          <li className="">
            <NavLink to='/projects' className='link'>
              Projects
            </NavLink>
          </li>

          <li className="">
            <NavLink to='/resourcesopportunities' className='link'>
              Resources and Opportunities
            </NavLink>
          </li>
        </ul>
      </div>

    </nav>
  )
};

export default NavBar;