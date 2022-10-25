import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
        ]
    }
])