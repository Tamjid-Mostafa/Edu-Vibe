import React, { useState } from 'react';
import {BsArrowLeftShort} from "react-icons/bs";
import { Link } from 'react-router-dom';
import logo from '../../../logo.png';

const Sidebar = ({coursesList}) => {
    const [open, setOpen] = useState(false);
    
    return (
      <div
          className={`flex-none rounded-t-lg max-h-screen ${
            open ? "w-72" : "w-20 "
          } bg-white h-screen p-5  pt-8 relative duration-300`}
        >
          <BsArrowLeftShort
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
          border-2 rounded-full  ${!open && "rotate-180"}`}
         onClick={() => setOpen(!open)}
          />
          <Link
            to="/"
            className="normal-case text-2xl inline-flex items-center font-bold "
          >
            <img src={logo} className={`mr-3 h-6 sm:h-9 block float-left duration-500 ${open && "rotate-[360deg]"}`} alt="EduVibe Logo" />
            <p className={`duration-300 ${!open && "scale-0"}`}>Edu<span className="text-red-500 px-1 ">Vibe</span></p>
          </Link>
          <div>
            {
              coursesList.map((course, index) => <Link
              to={`/course/${course.id}`}
              key={course.id}
              index={index}
              className={`normal-case text-xl block items-center font-bold my-5 duration-300 ${!open && "scale-0"}`}>{index+1}. {course.title}</Link>)
            }
          </div>
          </div>
          
    );
};

export default Sidebar;