import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

/**
 * React component that displays the footer.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
function Footer(): JSX.Element {
  return (
    <footer className="bg-primary px-6 py-12 text-center md:py-16 bg-darkGray flex flex-col">
      <p className="font-openSans font-semibold pb-4">Contact me at:</p>
      <div className="items-center justify-center mx-auto flex flex-row gap-2">
        <a
          href="./rdk-cv-english.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FontAwesomeIcon
            icon={faFileLines}
            className="inline justify-center text-3xl"
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
    </footer>
  )
}

export default Footer
