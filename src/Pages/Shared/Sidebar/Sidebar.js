import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ course, index }) => {
  return (
    <>
      <div className="mb-4 bg-rose-500 bg-opacity-40 hover:bg-opacity-20 duration-200 font-semibold  dark:text-white cursor-pointer text-center py-4 rounded">
        <Link
          to={`/course/${course.id}`}
          key={course.id}
          index={index}
          
        >
          {index + 1}. {course.title}
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
