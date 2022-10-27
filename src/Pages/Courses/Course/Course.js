import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Course = () => {
  const courseLoad = useLoaderData();
  console.log(courseLoad);

  return (
    <div className="flex flex-row-reverse  gap-5 container mx-auto">
      <div className="shrink ">
        <div className="hero   ">
          <div className="flex-col justify-start p-10">
            <img
              src={courseLoad.image_url}
              className="max-w-3xl rounded-lg shadow-2xl"
            />
            <div className="grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 items-center max-w-lg  py-5">
              <div className="flex items-center space-x-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src={courseLoad.instructor.img}
                  alt=""
                />
                <div className="font-medium dark:text-white">
                  <div>{courseLoad.instructor.name}</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
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
            <h1 className="text-5xl font-bold">{courseLoad.title}</h1>
            <p className="py-6">{courseLoad.course_details.description}</p>
            <Link
              to={`/checkout/${courseLoad.id}`}
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-rose-600 shadow-lg hover:bg-gray-800 transform transition duration-500 hover:scale-110 hover:shadow-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get Access
            </Link>

            <div className="collapse py-6 ">
              <input type="checkbox" className="peer " />
              <div className="collapse-title rounded-lg bg-rose-500 text-primary-content peer-checked:bg-bg-rose-200 peer-checked:text-secondary-content">
                What will you learn from this course?
              </div>
              <div className="collapse-content rounded-lg my-2 bg-rose-500 text-primary-content peer-checked:bg-rose-200 peer-checked:text-secondary-content">
                <ul className="py-6 text-gray-600">
                  <li>1. {courseLoad.course_details.learn.p1}</li>
                  <li>2. {courseLoad.course_details.learn.p2}</li>
                  <li>3. {courseLoad.course_details.learn.p3}</li>
                  <li>4. {courseLoad.course_details.learn.p4}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
