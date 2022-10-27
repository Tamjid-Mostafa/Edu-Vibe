import React from "react";

const Blog = () => {
  return (
    <>
      <section className="text-gray-800 dark:text-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20 dark:text-gray-300">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font smb-4">
              Questions
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about React JS.
            </p>
          </div>
          <div className="lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <details className="mb-4">
              <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                What is cors?
              </summary>

              <span className="dark:text-gray-300" >
                CORS stands for Cross-Origin Resource Sharing . It allows us to
                relax the security applied to an API. This is done by bypassing
                the Access-Control-Allow-Origin headers, which specify which
                origins can access the API.
              </span>
            </details>
            <details className="mb-4">
              <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                Why are you using firebase?
              </summary>

              <span className="dark:text-gray-300">
                The Firebase Realtime Database lets you build rich,
                collaborative applications by allowing secure access to the
                database directly from client-side code. Data is persisted
                locally, and even while offline, realtime events continue to
                fire, giving the end user a responsive experience.
              </span>
            </details>
            <details className="mb-4">
              <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                How does the private route work?
              </summary>

              <span className="dark:text-gray-300">
                The private route component is similar to the public route, the
                only change is that redirect URL and authenticate condition. If
                the user is not authenticated he will be redirected to the login
                page and the user can only access the authenticated routes If he
                is authenticated (Logged in).
              </span>
            </details>
            <details className="mb-4">
              <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                What is Node?
              </summary>

              <span className="dark:text-gray-300">
                Node.js is an open-source, cross-platform, back-end JavaScript
                runtime environment that runs on a JavaScript Engine and
                executes JavaScript code outside a web browser, which was
                designed to build scalable network applications.
              </span>
            </details>
            <details className="mb-4">
              <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                How does Node work?
              </summary>

              <span className="dark:text-gray-300">
                It is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
              </span>
            </details>
          </div>
        </div>  
      </section>
    </>
  );
};

export default Blog;
