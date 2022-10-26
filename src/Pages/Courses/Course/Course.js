import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Course = () => {
  const courseLoad = useLoaderData();
  console.log(courseLoad);

  return (
    <div className="flex gap-5">
      <Sidebar></Sidebar>

      <div className="shrink ">
        <div className="hero   ">
          <div className="flex-col justify-start p-10">
            <img
              src={courseLoad.image_url}
              className="max-w-full rounded-lg shadow-2xl"
            />
            <div className="grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 items-center max-w-lg  py-5">
              <div class="flex items-center space-x-4">
                <img
                  class="w-10 h-10 rounded-full"
                  src={courseLoad.instructor.img}
                  alt=""
                />
                <div class="font-medium dark:text-white">
                  <div>{courseLoad.instructor.name}</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    Course Instructor
                  </span>
                </div>
              </div>
              <div className="flex">
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <FaStarHalfAlt className="text-amber-500" />
              </div>
              <div>({courseLoad.rating.number})</div>
            </div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">{courseLoad.course_details.description}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
