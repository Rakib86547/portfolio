import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home/Home";
import Projects from "../pages/Home/Home/MyProjects/Projects";
import Error from "../pages/Share/Error/Error";

const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/projects/:id',
            element: <Projects />,
            loader: ({params}) => fetch(`https://rakib-portfolio-server.vercel.app/projects/${params.id}`)
        },
        {
            path: '/blog',
            element: <Blog />
        }
    ]
}]);
export default router;