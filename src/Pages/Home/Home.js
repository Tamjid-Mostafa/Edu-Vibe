import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Get the best Tutor at Home
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Class That Fit Your Busy Life. Help students to reach their
              potential. Online learning offers teachers an efficient way to
              deliver lessons to students.
            </p>
            <Link
              to="/courses"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-rose-600 shadow-lg hover:bg-gray-800 transform transition duration-500 hover:scale-110 hover:shadow-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://i.ibb.co/KKWQSpP/reading.png" alt="mockup" />
          </div>
        </div>
      </section>

      {/* <div
        className="hero min-h-screen bg-base-200"
        style={{ backgroundImage: `url()` }}
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Get the best Tutor at Home</h1>
            <p className="py-6">
              Class That Fit Your Busy Life. Help students to reach their
              potential. Online learning offers teachers an efficient way to
              deliver lessons to students.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
