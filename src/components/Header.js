import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import checked from '../assets/checkmark.json'

const Header = () => {
    return (
        <header>
            <div className="bg-gray-100 grid grid-cols-1 lg:grid-cols-2">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
                        Web Quiz
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
                        <span className='text-blue-600'>You are Welcome </span>
                        to the World Best Web Developer Quiz Playground. Play Quiz and Test Brain
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <Link to="/topics">
                            <button
                                type="button"
                                className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
                            >
                                Play Quiz
                            </button>
                        </Link>
                        <Link to="/about">
                            <button
                                type="button"
                                className="px-8 py-3 m-2 text-lg border rounded-full border-cyan-400 text-gray-900"
                            >
                                Learn more
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full h-1/2">
                    <Lottie animationData={checked} loop={true} />
                </div>
            </div>

        </header>
    );
};

export default Header;