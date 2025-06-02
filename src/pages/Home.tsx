import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import projects from '../../data/projects.json'

function Home(): JSX.Element {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row mx-auto justify-center items-center gap-4 lg:gap-44 p-8 py-12 lg:p-20">
        <div className=" sm:w-[500px] lg:w-[500px] flex flex-col justify-center mt-5 md:mt-0">
          <h1 className="font-raleway text-accent font-bold text-5xl text-shadow">
            Hello,<br></br> I'm Regine Kornbakk
          </h1>
          <h2 className="font-openSans font-semibold text-2xl mt-4 text-black">
            Front-end Developer
          </h2>
          <p className="font-openSans text-md mt-2 text-black">
            I build modern websites focused on design, functionality, and user
            experience.
          </p>
          <a
            href="#my-projects"
            className="border-2 border-accent rounded text-accent font-semibold text-shadow px-4 py-1.5 shadow-md mt-6 flex items-center text-xl w-[135px] transition-transform hover:scale-105"
          >
            Projects{' '}
            <FontAwesomeIcon
              icon={faArrowCircleDown}
              className="inline justify-center ml-2 w-5 h-5"
            />
          </a>
        </div>
        <div className="">
          <img
            className="rounded-full object-cover w-[340px] h-[360px] lg:w-[400px] lg:h-[420px]"
            src="./assets/img-regine.jpg"
          ></img>
        </div>
      </div>
      <div className="border-b-2 border-black"></div>
      <div id="my-projects" className="container mx-auto">
        <h3 className="text-center font-openSans font-semibold text-3xl mt-10 mb-4">
          My Projects
        </h3>
        <div className="grid mx-auto w-[350px] md:w-full md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10 px-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/article/${project.id}`}
              className="bg-white shadow-xl rounded-xl hover:shadow-2xl transition-shadow"
            >
              <div className="w-full md:aspect-[4/3] sm:h-[220px] md:h-[250px] lg:h-[300px] sm:w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-t-xl object-top w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-lightPurple text-black rounded-b-xl">
                <h3 className="text-xl font-semibold mb-2 font-openSans text-shadow">
                  {project.title}
                </h3>
                <p className="text-sm font-openSans">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
