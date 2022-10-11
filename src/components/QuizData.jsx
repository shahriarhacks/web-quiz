import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Lottie from 'lottie-react';
import quizBump from '../assets/quizBump.json'
import Questions from './Questions';

const QuizData = () => {
    const quizData = useLoaderData();
    const { name, logo, questions } = (quizData?.data);
    return (
        <main>
            <div className="bg-gray-200 grid grid-cols-1 lg:grid-cols-2">
                <div className="w-full">
                    <Lottie animationData={quizBump} loop={true} />
                </div>
                <div className="container flex flex-col items-center mt-4 text-gray-900">
                    <h1 className="text-xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
                        {name}
                    </h1>
                    <img className=' h-3/4' src={logo} alt="Logo" />
                </div>
            </div>
            <div>
                {
                    questions.map(qs => <Questions key={qs.id} qs={qs} />)
                }
            </div>
        </main>
    );
};

export default QuizData;