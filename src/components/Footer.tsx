import { Link } from 'react-router-dom'

/**
 * React component that displays the footer.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
function Footer() {
  return (
    <footer className="bg-primary px-6 py-16 text-center md:py-20">
      <p className="text-md block font-openSans opacity-80">
        © 2025 Regine Kornbakk.
      </p>
    </footer>
  )
}

export default Footer
