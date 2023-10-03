import React from "react";
import { BiTime, BiNotepad } from "react-icons/bi";
import { AiOutlineTool } from "react-icons/ai";
import { BsTools, BsFillLightbulbFill, BsRocketTakeoff } from "react-icons/bs";
import { MdArchitecture } from "react-icons/md";

import comp from "../assets/comp.png";
import comp2 from "../assets/comp2.png";

const Case = () => {
  return (
    <div name="case" className="w-full bg-[#000c12] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" w-full flex justify-center items-center flex-col py-14 mb-1">
          <p className="text-7xl font-bold inline border-b-4 border-fuchsia-500 text-center">
            Case Studies
          </p>
          <p className="py-4 text-2xl">
            Let's go into detail about these projects.
          </p>
        </div>

        {/* Title */}
        <div className="max-w-[1000px] mx-auto p-1 flex flex-col justify-left w-full h-half mt-20 mb-6 px-4">
          <div className=" w-full flex justify-left items-left flex-col mb-1">
            <p className="text-5xl font-bold border-l-4 border-fuchsia-500 text-left">
              myCinema
            </p>
          </div>
        </div>

        {/* Overview */}
        <div className="container flex justify-between items-center mx-auto">
          <div className=" mt-3 flex  md:flex-nowrap flex-wrap justify-between items-center mt-20 mb-6 px-4 lg:px-10 w-full">
            <div className="flex flex-col md:w-1/2 justify-center">
              <p className="text-3xl font-bold inline border-l-4 border-fuchsia-500 text-left">
                Overview
              </p>
              <p class="mt-4 md:mb-0 mb-8">
                myCinema is a movie app developed using the MERN stack, which
                provides users with access to information about different
                movies, directors, and genres. Users are able to create an
                account, update their personal data, browse movies, and manage a
                list of favorite movies.
              </p>
            </div>
            <div className="max-w-sm md:mb-0 md:ml-20">
              <img
                src={comp}
                alt=""
                className="rounded-lg bottom-0 right-0 lg:left-0 mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Purpose */}
        <div className="container flex justify-between items-center mx-auto">
          <div className=" mt-10 flex justify-between items-center mx-auto px-4  lg:px-10 w-full">
            <div className="flex flex-col md:w-full">
              <div className="fmax-w-sm p-6 bg- border border-fuchsia-500 rounded-lg">
                <p className="secondary-title text-3xl font-bold border-l-4 border-fuchsia-500">
                  Purpose
                </p>

                <p className="mt-4 md:mb-0">
                  myCinema was an ambitious project to demonstrate my full-stack
                  JavaScript abilities, as part of CareerFoundry's Full-Stack
                  Web Developer course.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Objective */}
        <div className="container flex justify-between items-center mx-auto">
          <div className=" flex flex-wrap-reverse md:flex-nowrap mt-10 mb-8 px-4 md:px-10 lg:px-10 w-full">
            <div className="max-w-sm md:mr-20">
              <img
                src={comp}
                alt=""
                className="rounded-lg bottom-0 right-0 -0 mx-auto"
              />
            </div>

            <div className="mt-8 flex flex-col md:w-1/2 justify-center">
              <p className="secondary-title text-3xl font-bold border-l-4 border-fuchsia-500">
                Objective
              </p>
              <p className="mt-4 mb-8">
                The project aimed to create server-side and client-side
                applications from scratch, combining front-end and back-end
                technologies while incorporating best practices in architecture
                and methodologies.
              </p>
            </div>
          </div>
        </div>

        {/* Duration */}
        <div className="container flex justify-between items-center mx-auto">
          <div className=" mt-10 flex justify-between items-center mx-auto px-4  lg:px-10 w-full">
            <div className="flex flex-col md:w-full">
              <div className="fmax-w-sm p-6 bg- border border-fuchsia-500 rounded-lg">
                <div className="w-full grid grid-cols-2">
                  <p className="secondary-title text-3xl font-bold border-l-4 border-fuchsia-500">
                    Duration
                  </p>
                  <p>
                    <BiTime className="mx-auto text-3xl text-green-400 mr-1" />
                  </p>
                </div>

                <p className="mt-4 md:mb-0">
                  Server-side and client-side development took about the same
                  amount of time, respecitvely. Resulting in a total development
                  time of 32 days
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Credits */}
        <div className="container flex justify-between items-center mx-auto">
          <div className=" mt-2 flex justify-between items-center mx-auto px-4  lg:px-10 w-full">
            <div className="flex flex-col md:w-full">
              <div className="fmax-w-sm p-6 bg- border border-fuchsia-500 rounded-lg">
                <div className="w-full grid grid-cols-2">
                  <p className="secondary-title text-3xl font-bold border-l-4 border-fuchsia-500">
                    Built With
                  </p>
                  <p>
                    <AiOutlineTool className="mx-auto text-3xl text-green-400 mr-1" />
                  </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                  <p>React</p>
                  <p>Bootstrap</p>
                  <p>JavaScript</p>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>Heroku</p>
                  <p>MongoDB</p>
                  <p>Express</p>
                  <p>Node.js</p>
                  <p>Netlify</p>
                  <p>Postman</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Built With */}
        <div className="container flex justify-between items-center mx-auto">
          <div className=" mt-2 flex justify-between items-center mx-auto px-4  lg:px-10 w-full">
            <div className="flex flex-col md:w-full">
              <div className="fmax-w-sm p-6 bg- border border-fuchsia-500 rounded-lg">
                <div className="w-full grid grid-cols-2">
                  <p className="secondary-title text-3xl font-bold border-l-4 border-fuchsia-500">
                    Credits
                  </p>
                  <p>
                    <BiNotepad className="mx-auto text-3xl text-green-400 mr-1" />
                  </p>
                </div>
                <p className="mt-4 md:mb-0">
                  <ul>
                    <li>Lead Developer: Bryan Berkley</li>
                    <li>Tutor: Jubril Akolade</li>
                    <li>Mentor: Felipe Lopes</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="container flex justify-between items-center mx-auto">
          <div className=" flex flex-wrap justify-center md:justify-start md:flex-nowrap mt-10 px-4 md:px-10 lg:px-10 w-full">
            <div className="flex flex-col md:w-1/2">
              <p className="font-bold text-3xl text-center md:text-left border-l-4 border-fuchsia-500">
                Approach
              </p>
            </div>
          </div>
        </div>

        {/* ServerSide */}
        <div className="container flex justify-between items-center mx-auto">
          <div className=" flex flex-wrap md:flex-nowrap mt-10 mb-8 px-4 md:px-10 lg:px-10 w-full">
            <div className="flex flex-col md:w-1/2">
              <p className="secondary-title text-2xl font-bold">Serverside</p>
              <p className="mt-4 md:mb-0 mb-8 md:mr-12">
                I developed a RESTful API utilizing Node.js and Express to
                interact with a non-relational database, MongoDB. The API is
                accessible through standard HTTP methods like GET or POST, and
                it employs CRUD methods to retrieve and store data in the
                database. The API offers movie details in JSON format.
              </p>
              <div className="max-w-sm md:mr-20 mt-8 mb-2">
                <img
                  src={comp2}
                  alt=""
                  className="rounded-lg bottom-0 right-0 lg:left-0 mx-auto object-left"
                />
              </div>
            </div>

            <div className="md:w-full grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-2 lg:gap-6">
              <div className="fmax-w-sm p-6 border border-fuchsia-500 rounded-lg">
                <p className="mb-2 text-2xl font-semibold tracking-tight">01</p>
                <p className="mb-2 text-2xl font-semibold tracking-tight">
                  Basics
                </p>
                <p className="mb-3 font-normal">
                  Before selecting a database, I needed to choose between a
                  relational or non-relational option. After testing PostGreSQL
                  and MongoDB, I chose MongoDB because of its non-relational
                  structure and increased flexibility. Unlike relational
                  databases, MongoDB does not require strict schema adherence.
                </p>
              </div>
              <div className="fmax-w-sm p-6 border border-fuchsia-500 rounded-lg">
                <p className="mb-2 text-2xl font-semibold tracking-tight">02</p>
                <p className="mb-2 text-2xl font-semibold tracking-tight">
                  Business Logic
                </p>
                <p className="mb-3 font-normal ">
                  Next, I created models to ensure consistent formatting of my
                  data and used Mongoose for databse interactions.
                </p>
              </div>

              <div className="fmax-w-sm p-6 border border-fuchsia-500 rounded-lg">
                <p className="mb-2 text-2xl font-semibold tracking-tight ">
                  03
                </p>
                <p className="mb-2 text-2xl font-semibold tracking-tight">
                  Security
                </p>
                <p className="mb-3 font-normal ">
                  For initial login, I selected basic HTTP paired with JWT
                  token-based authorization to ensure security on my site. In
                  addition, I implemented CORS, password hashing, and data
                  validation for extra layers of security.
                </p>
              </div>

              <div className="fmax-w-sm p-6 border border-fuchsia-500 rounded-lg">
                <p className="mb-2 text-2xl font-semibold tracking-tight">04</p>
                <p className="mb-2 text-2xl font-semibold tracking-tight">
                  Deployment
                </p>
                <p className="mb-3 font-normal ">
                  After testing all endpoints as a unit and with integration
                  method in Postman, I utilized Heroku to deploy my application
                  and MongoDB Atlas to host my database.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ClientSide */}
        <div className="container flex justify-between items-center mx-auto">
          <div className="flex flex-wrap md:flex-nowrap mt-10 px-4 md:px-10 lg:px-10 w-full">
            <div className="flex flex-col md:w-3/5">
              <p className="secondary-title text-3xl font-bold">Clientside</p>
              <p className="leading-relaxed mt-4 mb-2 md:mr-12">
                After completing the API, I developed a single-page, responsive
                application using React. This interface enables users to
                interact with the server-side and includes several views, such
                as: a registration view, a login view, a movie view; and a
                profile view, where users can update their data and list of
                favorites.{" "}
              </p>
              <div className="max-w-sm md:mr-20 mt-8 mb-2">
                <img
                  src={comp2}
                  alt=""
                  className="rounded-lg bottom-0 right-0 lg:left-0 mx-auto object-left"
                />
              </div>
              <div className="max-w-lg  md:mb-0 md:mr-5"></div>
            </div>

            <div className="md:w-full grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols lg:gap-6 mb-10">
              <div className="fmax-w-sm p-6 border border-fuchsia-500 rounded-lg">
                <p>
                  <BsTools className="mx-auto text-3xl text-green-400 mr-1" />
                </p>
                <p className="mb-2 text-2xl font-semibold tracking-tight">
                  The Build
                </p>
                <p className="mb-3 font-normal">
                  To build a single-page application with state routing
                  navigation between views and shareable URLs, I used React. For
                  building operations, I employed Parcel.
                </p>
              </div>
              <div className="fmax-w-sm p-6 border border-fuchsia-500 rounded-lg">
                <p>
                  <BsFillLightbulbFill className="mx-auto text-3xl text-green-400 mr-1" />
                </p>
                <p className="mb-2 text-2xl font-semibold tracking-tight">
                  Create Components
                </p>
                <p className="mb-3 font-normal">
                  After completing the initial build, I developed components for
                  various views and hooks to manage the state. To retrieve the
                  API that I had previously created, I utilized Axios.
                </p>
              </div>
              <div className="fmax-w-sm p-6 border border-fuchsia-500 rounded-lg">
                <p>
                  <MdArchitecture className="mx-auto text-3xl text-green-400 mr-1" />
                </p>
                <p className="mb-2 text-2xl font-semibold tracking-tight">
                  Design
                </p>
                <p className="mb-3 font-normal">
                  I used React Bootstrap to design the layout of the pages and
                  cards, ensuring consistent styling; additionally, I
                  implemented client-side app-routing to add authentication for
                  accessing views.
                </p>
              </div>
              <div className="fmax-w-sm p-6 border border-fuchsia-500 rounded-lg">
                <p>
                  <BsRocketTakeoff className="mx-auto text-3xl text-green-400 mr-1" />
                </p>
                <p className="mb-2 text-2xl font-semibold tracking-tight">
                  Final product
                </p>
                <p className="mb-3 font-normal">
                  Finally, I added Redux to better manage the application's
                  state and ensure scalability. Once integrated, I hosted the
                  completed project on Netlify.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Retrospective */}
        <div class="container flex justify-between items-center mx-auto">
          <div class="mt-10 px-4 md:px-10 lg:px-10 w-full">
            <p class="mb-8 secondary-title text-3xl font-bold">Retrospective</p>
            <div class="md:w-full grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6 mb-10">
              <div class="fmax-w-sm p-6 border border-fuchsia-500 rounded-lg">
                <p class="mb-2 text-2xl font-semibold tracking-tight">
                  What went well?
                </p>
                <p class="mb-3 font-normal">
                  I enjoyed building the interface and routing functions of a
                  single-page application (SPA) using React. Working with
                  components made the build process effortless. Since I have
                  experience with back-end applications, designing the front-end
                  to interact with a database similar to ones I have previously
                  worked with was rewarding. This helped me gain a full
                  understanding of what is involved in full-stack development.
                </p>
              </div>
              <div class="fmax-w-sm p-6 border border-fuchsia-500 rounded-lg">
                <p class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                  What didn't go well?
                </p>
                <p class="mb-3 font-normal">
                  It would have been great to have more time to expand the movie
                  list and offer a wider selection of films to add to favorites.
                  While the application's styling is consistent, having more
                  time to focus on the UI's aesthetics would have been a fun
                  addition to bring in more color and visual appeal. Overall, I
                  am happy with the result as a first attempt at building a
                  full-stack application.
                </p>
              </div>
              <div class="fmax-w-sm p-6 border border-fuchsia-500 rounded-lg">
                <p class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                  Future Steps
                </p>

                <p class="mb-3 font-normal">
                  Including the views of actors, directors, and
                  cinematographers, respectively, would be a really nice touch.
                  Moreover, expanding the database to include which films each
                  director, actor, or cinematographer has worked on will be
                  useful. It would also be great to include the names of these
                  roles in the search bar function.
                </p>
              </div>
              <div class="fmax-w-sm p-6 border border-fuchsia-500 rounded-lg">
                <p class="mb-2 text-2xl font-semibold tracking-tigh">
                  Final Thoughts
                </p>
                <p class="mb-3 font-normal">
                  This was an excellent introduction to front-end development
                  and using React to build a responsive single-page application
                  (SPA). The technology stack used was well-documented and had
                  ample resources to draw from whenever I encountered a problem.
                  Therefore, I would definitely use these same technologies for
                  a similar project in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Case;
