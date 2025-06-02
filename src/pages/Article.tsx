import { useParams } from 'react-router-dom'
import projects from '../../data/projects.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCopy,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Article(): JSX.Element {
  const [copied, setCopied] = useState(false)
  const { id } = useParams()
  const project = projects.find((p) => String(p.id) === id)
  if (!project)
    return <div className="text-center text-red-500">Article not found.</div>

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      console.error('Could not copy:', err)
    }
  }

  return (
    <>
      <div className="mx-auto flex justify-center mt-8">
        <img
          className="w-full sm:w-[600px] lg:w-[1000px] rounded-t-xl"
          src={project.image}
          alt={project.title}
        />
      </div>
      <div className="bg-lightPurple w-full sm:w-[600px] lg:w-[1000px] flex flex-col justify-center mx-auto px-5 lg:px-20 pb-4 mb-10 rounded-b-xl">
        <h1 className="text-center font-openSans font-semibold text-3xl mt-8 mb-4">
          {project.title}
        </h1>
        <p className="font-openSans text-md">{project.bigDescription}</p>
        <h2 className="my-4 font-openSans text-lg font-bold">Features:</h2>
        <p className="font-openSans text-md">{project.features}</p>
        <h3 className="my-4 font-openSans text-lg font-bold">
          Reflections & Areas for Improvement:
        </h3>
        <p className="font-openSans text-md mb-8">
          {project.reflectionsAndImprovements}
        </p>
        <div className="flex flex-row gap-4 justify-center mx-auto mb-8">
          <a
            href={project.repositoryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-accent text-accent font-semibold text-shadow-sm shadow-lg text-lg bg-white rounded-lg px-4 py-2 transition-transform hover:scale-105"
          >
            GitHub Repository
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
            <span className="sr-only"> (Opens in a new tab)</span>
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-accent text-accent font-semibold text-shadow-sm shadow-lg text-lg bg-white rounded-lg px-4 py-2 transition-transform hover:scale-105"
          >
            Link to Website
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
            <span className="sr-only"> (Opens in a new tab)</span>
          </a>
          <button
            onClick={handleCopy}
            className="border-2 border-accent text-accent font-semibold text-shadow-sm shadow-lg text-lg bg-white rounded-lg px-4 py-2 transition-transform hover:scale-105"
          >
            {copied ? 'Copied URL!' : 'Copy URL Link'}
            <FontAwesomeIcon icon={faCopy} className="ml-2" />
            <span className="sr-only"> (Copies URL of this page)</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Article
