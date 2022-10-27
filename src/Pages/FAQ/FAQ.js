import React from "react";

const FAQ = () => {
  return (
    // <!-- component -->
    <>
      <section className="text-gray-800 dark:text-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20 dark:text-gray-300">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font smb-4">
              Frequently Asked Question
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our business works and what
              can do for you.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  What is my dashboard?
                </summary>

                <span className="dark:text-gray-300">
                  Your dashboard gives you access to the courses and programs
                  that you have enrolled in, and to information such as course
                  start and end dates, certificates, and email settings. Access
                  your dashboard by opening the dropdown menu next to your
                  username at the top of any page and selecting Dashboard.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                  Can I start for free and pay later?
                </summary>

                <span className="dark:text-gray-300">
                  Yes, you absolutely can start your course in the audit track
                  and then upgrade to the verified track later, so long as the
                  upgrade deadline has not passed.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Responding to Inappropriate Learner Behavior
                </summary>

                <span className="dark:text-gray-300">
                  Please report your concern directly to the course team or
                  contact us to report your concern, and we will notify the
                  appropriate course team (or the course provider’s leadership,
                  as appropriate).
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Why is the submit button not active?
                </summary>

                <span className="px-4 py-2 dark:text-gray-300">
                  The submit button for an assignment will activate once you
                  enter an answer for the assignment, unless the due date has
                  passed. Does my course have due dates? If your course is
                  self-paced and the end date has not passed, then you may be
                  able to Shift your deadlines using the Shift due dates button
                  in the Dates tab at the top of your course.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Do you have an FAQ page?
                </summary>

                <span className="px-4 py-2 dark:text-gray-300">
                  We offer this searchable Help Center so that you can easily
                  get answers to your edX questions! Enter a term or keyword in
                  the "Search” box above to get a list of related articles. You
                  can also visit the Help Center home page to review the
                  categories of topics that other learners have questions about.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
