import { Link, NavLink } from "react-router-dom";
import Logo  from "../../assets/logo.png";

export const Footer = () => {
  return (
    
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                      <img src={Logo} className="h-7" alt="Flowbite Logo" />
                      <span className="self-center text-l font-semibold whitespace-nowrap dark:text-white">Paw Palace</span>
                  </Link>
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                      <li>
                          <NavLink to="#" className="hover:underline me-4 md:me-6">About</NavLink>
                      </li>
                      <li>
                          <NavLink to="#" className="hover:underline me-4 md:me-6">Privacy Policy</NavLink>
                      </li>
                      <li>
                          <NavLink to="#" className="hover:underline me-4 md:me-6">Licensing</NavLink>
                      </li>
                      <li>
                          <NavLink to="#" className="hover:underline">Contact</NavLink>
                      </li>
                  </ul>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <NavLink to="/" className="hover:underline">Paw Palace</NavLink>. All Rights Reserved.</span>
          </div>

      </footer>

  )
}
