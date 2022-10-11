import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Root from '../components/Root'
import Statics from "../components/Statics";
import Topics from "../components/Topics";

const router = createBrowserRouter([
    {
        path: '/', element: <Root />, children: [
            {
                path: '/', element: <Topics />,
            }, {
                path: '/topics', element: <Topics />
            }, {
                path: '/statics', element: <Statics />
            }, {
                path: '/blog', element: <Blog />
            }, {
                path: '/about', element: <About />
            },
            {
                path: '*', element: <ErrorPage />
            }
        ]
    }
])
export default router;