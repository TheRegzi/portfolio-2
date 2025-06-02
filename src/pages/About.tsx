function About(): JSX.Element {
  return (
    <>
      <div className="flex justify-center flex-col mx-auto bg-lightPurple w-full sm:w-[650px] lg:w-[800px] py-10 mt-5 px-5 lg:px-20 mb-10 rounded-xl">
        <div className="flex justify-center mx-auto">
          <img
            src="/assets/img-regine.jpg"
            className="w-full sm:w-[550px] rounded-xl"
          />
        </div>
        <h1 className="text-center font-openSans font-semibold text-3xl mt-10 mb-4">
          About Me
        </h1>
        <h2 className="mb-4 font-openSans text-lg font-bold">Hello!</h2>
        <p className="font-openSans text-md">
          My name is Regine, and I am a passionate web developer with a skill
          for creating elegant and efficient solutions. I thrive on turning
          complex problems into simple, beautiful designs.
        </p>
        <h2 className="my-4 font-openSans text-lg font-bold">Background</h2>
        <p className="font-openSans text-md mb-4">
          I started studying Front-end development at Noroff Vocational School
          in august 2023, and will finish in June 2025. I have learned a lot
          over these years, like how to make a user friendly design, using
          semantic HTML, styling with different types of CSS and
          JavaScript/TypeScript. I've also been in two large group projects at
          our school where I had different roles; I have been in one DevOps team
          and in one developer team, where we have used shared repositories on
          GitHub.
        </p>
        <p className="font-openSans text-md">
          Before studying Front-end Development, I finished a bachelor in
          Audiology at NTNU in 2019, and then I worked for a hearing aid company
          called "Widex" in Oslo for four years. After a while, I felt like I
          wanted to start on a new career. Coding websites was something I
          really started to enjoy when learning more about it, and that led to
          me starting on the Front-end studies!
        </p>
        <h2 className="my-4 font-openSans text-lg font-bold">Skills</h2>
        <ul className="font-openSans text-md">
          <li>
            <b>Languages/Runtime:</b> TypeScript, JavaScript, HTML, CSS, Node.js
          </li>
          <li>
            <b>Frameworks:</b> React, Next.js
          </li>
          <li>
            <b>Styling & UI:</b> Tailwind CSS, Bootstrap, Styled Components,
            Sass
          </li>
          <li>
            <b>Tools:</b> Git, GitHub, Visual Studio Code, Postman, npm, Webpack
          </li>
          <li>
            <b>Methodologies:</b> Agile (Scrum), Test-Driven Development
          </li>
          <li>
            <b>Testing / QA</b> Jest, Vitest, React-testing-library, Cypress
          </li>
          <li>
            <b>Soft Skills:</b> Problem-solving, Team collaboration, Time
            management, Communication
          </li>
        </ul>
        <h2 className="my-4 font-openSans text-lg font-bold">
          Personal Interests
        </h2>
        <p className="font-openSans text-md">
          When I am not coding, I like to go for a jog outside or do strength
          training. Additionally, I have a dog called Nala, she is an Italian
          Greyhound. A lot of my time goes to her! I love listening to music and
          I also like to play games.
        </p>
        <h2 className="my-4 font-openSans text-lg font-bold">Get in touch</h2>
        <p className="font-openSans text-md">
          I am always open to discuss new projects, creative ideas, or
          opportunities to be a part of your visions. Feel free to reach out to
          me via email at&nbsp;
          <a
            className="underline"
            href="mailto:reginekornbakk@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            reginekornbakk@gmail.com
          </a>{' '}
          or connect with me on{' '}
          <a
            className="underline"
            href="https://www.linkedin.com/in/regine-dille-kornbakk-aa0a7b288/"
            target="_blank"
            rel="noopener noreferrer"
          >
            my LinkedIn!
          </a>
        </p>
      </div>
    </>
  )
}

export default About
