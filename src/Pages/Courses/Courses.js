import { Link, useLoaderData } from "react-router-dom";
import Sidebar from "../Shared/Sidebar/Sidebar";
import React from "react";
import CourseCard from "../../component/Toggler/CourseCard";

const Courses = () => {
  const coursesList = useLoaderData();

  return (
    
    
    <div className='relative grid grid-cols-1 md:grid-cols-4 container mx-auto gap-8 md:my-10'>
      
      <div className='md:col-span-1'>
                {
                    coursesList.map((course, index) => <Sidebar key={course.id} index={index} course={course}/>)
                }
            </div>
          
          
      <div className="z-10 grid cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 max-w-6xl mx-auto md:col-span-3">
        {coursesList.map((course) => (
          <CourseCard course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
