import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Contact from "../Pages/Contact/Contact";
import Course from "../Pages/Courses/Course/Course";
import Courses from "../Pages/Courses/Courses";
import Error from "../Pages/Error/Error";
import FAQ from "../Pages/FAQ/FAQ";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ProtectedRoute from "../Pages/ProtectedRoute/ProtectedRoute";
import SignUp from "../Pages/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
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
                loader: () => fetch("https://edu-vibe-server.vercel.app/courses")
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`https://edu-vibe-server.vercel.app/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <ProtectedRoute><Checkout></Checkout></ProtectedRoute>,
                loader: ({params}) => fetch(`https://edu-vibe-server.vercel.app/${params.id}`)
            },
        ]
    }
])