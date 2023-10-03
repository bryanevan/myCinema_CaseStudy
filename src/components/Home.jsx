import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
// import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#000c12]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-gray-200">
            <div>Checkout case studies for my projects below.</div>
          </h2>
          <div>
            <Link
              to="case"
              smooth
              duration={500}
              className="shadow-2xl shadow-[#4d004d] border border-sky-950 group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-slate-900 to-fuchsia-900 cursor-pointer"
            >
              Case Studies
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
