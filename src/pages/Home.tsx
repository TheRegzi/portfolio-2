import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

function Home() {
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
          <button className="border-2 border-accent rounded text-accent font-semibold text-shadow px-4 py-1.5 shadow-md mt-6 flex items-center text-xl w-[135px] transition-transform hover:scale-105">
            Projects{' '}
            <FontAwesomeIcon
              icon={faArrowCircleDown}
              className="inline justify-center ml-2 w-5 h-5"
            />
          </button>
        </div>
        <div className="">
          <img
            className="rounded-full object-cover w-[340px] h-[360px] lg:w-[400px] lg:h-[420px]"
            src="./assets/img-regine.jpg"
          ></img>
        </div>
      </div>
      <div className="border-b-2 border-black"></div>
    </>
  )
}

export default Home
