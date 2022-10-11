import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { name, logo, total, id } = quiz;
    return (
        <div className='bg-slate-300 p-6 rounded shadow-lg'>
            <img
                className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
                src={logo}
                alt='Logo'
            />
            <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
            <p className='text-gray-700 font-bold'>Total Quiz of: {total}</p>
            <Link to={`/quiz/${id}`}>
                <button
                    type='button'
                    className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
                >
                    Get Started
                </button>
            </Link>
        </div>
    );
};

export default Quiz;