import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import Details from "../pages/Details/Details";
import Blog from "../pages/Blog/Blog";
import Detail from "../pages/Detail/Detail";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/events/:id',
                element: <PrivateRoute>
                    <Detail></Detail>
                    </PrivateRoute>,
                // loader: (object) => fetch(`/events.json/${object.params.id}`)

            },
            {
                path: '/services',
                element: <PrivateRoute>
                    <Services></Services>
                </PrivateRoute>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/details',
                element: <Details></Details>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            }
        ]
    }
]);

export default routes;