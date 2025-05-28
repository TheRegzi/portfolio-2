import { NavLink } from "react-router-dom";
import { logoutUser } from "../api/auth/logoutUser";
import { useNavigate } from "react-router-dom";

/**
 * Navigation component that displays app links.
 * Accepts props to control whether the nav is visible (for mobile menus) and to handle menu close actions.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the menu is currently open (for toggling visibility, especially on mobile).
 * @param {function} props.closeMenu - Function that closes the menu (called when a link is clicked).
 * @returns {JSX.Element} The rendered nav component.
 */
function Nav({ isOpen, closeMenu }) {

  return (
    <ul
      className={` ${isOpen ? "top-98 fixed left-0 z-50 flex bg-primary" : "hidden"} h-md w-full flex-col p-6 text-lg text-black transition-all duration-300 md:relative md:flex md:h-auto md:w-auto md:flex-row md:items-center md:gap-14 md:p-0 md:pb-0`}
    >
      <li className="pb-6 font-montserrat text-xl font-semibold hover:text-red md:pb-0">
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-black hover:border-red" : ""
          }
        >
          Home
        </NavLink>
      </li>
        <li className="pb-6 font-montserrat text-xl font-semibold hover:text-red md:pb-0">
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-black hover:border-red" : ""
            }
          >
            My profile
          </NavLink>
        </li>
    </ul>
  );
}

export default Nav;
