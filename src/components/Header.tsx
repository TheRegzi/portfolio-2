import { Link } from 'react-router-dom'
import Nav from './Nav'

/**
 * React component for displaying the header.
 * If on mobile view, it displays a hamburger menu icon, that opens the menu when clicked.
 *
 * @param {Object} props
 * @param {function} props.toggleMenu - Function to toggle the mobile menu open/closed.
 * @param {boolean} props.isOpen - Whether the mobile menu is open.
 * @param {function} props.closeMenu - Function to close the mobile menu.
 * @returns {JSX.Element} The rendered header component.
 */
function Header() {
  return (
    <>
      <header className="flex flex-column items-center text-center mx-auto bg-white p-4 gap-5">
        <Link to="/" onClick={() => (window.location.href = '/')}>
          <img
            className="ml-2 w-[85px] md:ml-5 md:w-[100px]"
            src="/assets/logo.png"
            alt="Logo"
          />
        </Link>
        <p className="font-michroma font-bold text-3xl tracking-widest">
          Regine D.<br></br> Kornbakk
        </p>
      </header>
      <div className="border-b-2 border-black pt-2"></div>
      <div className="flex flex-row text-center">
        <Nav />
      </div>
      <div className="border-b-2 border-black"></div>
    </>
  )
}

export default Header
