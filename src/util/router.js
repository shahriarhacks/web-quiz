import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import QuizData from "../components/QuizData";
import Root from '../components/Root'
import Statics from "../components/Statics";
import Topics from "../components/Topics";

const router = createBrowserRouter([
    {
        path: '/', element: <Root />, children: [
            {
                path: '/', element: <Topics />,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')

            },
            {
                path: '/topics', element: <Topics />,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
            },
            {
                path: '/quiz/:id', element: <QuizData />,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            },
            {
                path: '/statics', element: <Statics />,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
            },
            {
                path: '/blog', element: <Blog />
            },
            {
                path: '/about', element: <About />
            },
            {
                path: '*', element: <ErrorPage />
            }
        ]
    }
])
export default router;