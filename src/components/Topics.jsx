import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../components/Header'
import Quiz from './Quiz';
import Lottie from 'lottie-react';
import go from '../assets/go.json'

const Topics = () => {
    const quiz = useLoaderData();
    const allQuiz = quiz.data;
    return (
        <div>
            <Header />
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <h1 className="text-6xl text-center font-bold my-8">Quiz Topics</h1>
                <div className='grid gap-8 row-gap-5 mb-8 md:grid-cols-2 lg:grid-cols-4 lg:row-gap-8'>
                    {
                        allQuiz.map(quiz => <Quiz key={quiz.id} quiz={quiz} />)
                    }
                </div>
            </div>
            <div className='w-full'>
                <Lottie animationData={go} loop={true} />
            </div>
        </div>
    );
};

export default Topics;