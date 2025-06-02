import { useParams } from 'react-router-dom'
import projects from '../../data/projects.json'

function Article(): JSX.Element {
  const { id } = useParams()
  const project = projects.find((p) => String(p.id) === id)
  if (!project)
    return <div className="text-center text-red-500">Article not found.</div>

  return (
    <>
      <div className="mx-auto flex justify-center mt-2">
        <img
          className="w-full sm:w-[600px] lg:w-[1000px] rounded-t-xl"
          src={project.image}
        />
      </div>
      <div className="bg-lightPurple w-full sm:w-[600px] lg:w-[1000px] flex flex-col justify-center mx-auto px-5 lg:px-20 pb-4 mb-4 rounded-b-xl">
        <h1 className="text-center font-openSans font-semibold text-3xl mt-8 mb-4">
          {project.title}
        </h1>
        <p className="font-openSans text-md">{project.bigDescription}</p>
        <h2 className="my-2 font-openSans text-lg font-bold">Features:</h2>
        <p className="font-openSans text-md">{project.features}</p>
        <h3 className="my-2 font-openSans text-lg font-bold">
          Reflections & Areas for Improvement:
        </h3>
        <p>{project.reflectionsAndImprovements}</p>
        <div className="flex flex-row gap-4 justify-center mx-auto">
          <a
            href={project.repositoryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-accent text-accent font-semibold text-shadow shadow-lg text-lg bg-white rounded-lg px-4 py-2"
          >
            GitHub Repository
          </a>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Link to Website
          </a>
        </div>
      </div>
    </>
  )
}

export default Article
