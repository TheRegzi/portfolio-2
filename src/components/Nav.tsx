import { NavLink } from 'react-router-dom'

/**
 * Navigation component that displays app links.
 * Accepts props to control whether the nav is visible (for mobile menus) and to handle menu close actions.
 *
 * @returns {JSX.Element} The rendered nav component.
 */
function Nav(): JSX.Element {
  return (
    <ul className="flex flex-row gap-20 mx-auto">
      <li className="pb-6 font-lato text-xl font-semibold hover:text-accent md:pb-0">
        <NavLink
          to="/"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? 'border-b-2 border-black hover:border-accent' : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li className="pb-6 font-lato text-xl font-semibold hover:text-accent md:pb-0">
        <NavLink
          to="/about"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? 'border-b-2 border-black hover:border-accent ' : ''
          }
        >
          About
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav
