import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const checkoutData = useLoaderData();

  return (
    <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container rounded-lg">
      <div className="flex flex-col justify-start items-start w-full space-y-9">
        <div className="flex justify-start flex-col items-start space-y-2">
          <Link
            to={`/course/${checkoutData.id}`}
            className="flex flex-row items-center text-gray-600 dark:text-white hover:text-gray-500 space-x-1"
          >
            <svg
              className="fill-stroke"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.91681 7H11.0835"
                stroke="currentColor"
                strokeWidth="0.666667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.91681 7L5.25014 9.33333"
                stroke="currentColor"
                strokeWidth="0.666667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.91681 7.00002L5.25014 4.66669"
                stroke="currentColor"
                strokeWidth="0.666667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm leading-none">Back</p>
          </Link>
          <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-white dark:text-gray-50">
            Checkout
          </p>
        </div>

        <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
          <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
            <div className="flex flex-col justify-start items-start w-full space-y-4">
              <p className="text-xl md:text-2xl leading-normal text-gray-800 dark:text-gray-50">
                {checkoutData.title}
              </p>
              <p className="text-base font-semibold leading-none text-gray-600 dark:text-white">
                {checkoutData.price}
              </p>
            </div>
            <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto rounded-lg">
              <img
                className="rounded-lg"
                src={checkoutData.image_url}
                alt="headphones"
              />
            </div>
          </div>

          <div className="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
            <div className="flex flex-row justify-center items-center mt-6">
              <hr className="border w-full" />
              <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">
                User Information
              </p>
              <hr className="border w-full" />
            </div>

            <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
              User Name
            </label>
            <div className="mt-2 flex-col">
              <div>
                <input
                  className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="email"
                  name=""
                  id=""
                  placeholder={user.displayName}
                />
              </div>
            </div>

            <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
              Premium Course Name
            </label>
            <div className="mt-2 flex-col">
              <div>
                <input
                  className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="email"
                  name=""
                  id=""
                  placeholder={checkoutData.title}
                />
              </div>
            </div>

            <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
              User Email
            </label>
            <div className="mt-2 flex-col">
              <div >
                <input
                  className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
                  type="text"
                  name=""
                  id=""
                  placeholder={user.email}
                />
              </div>
            </div>

            <button className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
              <div>
                <p className="text-base leading-4">Pay </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
