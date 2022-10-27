import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Course from "../Pages/Courses/Course/Course";
import Courses from "../Pages/Courses/Courses";
import Error from "../Pages/Error/Error";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import Login from "../Pages/Login/Login";
import Sidebar from "../Pages/Shared/Sidebar/Sidebar";
import SignUp from "../Pages/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/forgotpassword',
                element: <ForgotPassword></ForgotPassword>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch("http://localhost:5000/courses")
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({params}) => fetch(`http://localhost:5000/checkout/${params.id}`)
            },
        ]
    }
])