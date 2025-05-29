import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

/**
 * Navigation component that displays app links.
 * Accepts props to control whether the nav is visible (for mobile menus) and to handle menu close actions.
 *
 * @returns {JSX.Element} The rendered nav component.
 */
function Nav(): JSX.Element {
  return (
    <div className="relative flex flex-col items-center md:flex-row md:items-center md:justify-between w-full px-4 py-4 md:h-16">
      <ul className="flex flex-row gap-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
        <li className="font-lato text-xl font-semibold hover:text-accent">
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? 'border-b-2 border-black hover:border-accent pb-1' : ''
            }
          >
            Home
          </NavLink>
        </li>
        <li className="font-lato text-xl font-semibold hover:text-accent">
          <NavLink
            to="/about"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? 'border-b-2 border-black hover:border-accent pb-1' : ''
            }
          >
            About
          </NavLink>
        </li>
      </ul>
      <div className="items-center flex gap-2 mt-6 md:mt-0 md:ml-auto md:pr-8">
        <a
          href="./rdk-cv-english.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FontAwesomeIcon
            icon={faFileLines}
            className="inline justify-center ml-2 text-3xl"
          />
        </a>
        <a
          href="https://github.com/TheRegzi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="inline justify-center ml-2 text-3xl"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/regine-dille-kornbakk-aa0a7b288/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="inline justify-center ml-2 text-3xl"
          />
        </a>
      </div>
    </div>
  )
}

export default Nav
