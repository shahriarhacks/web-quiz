import React from 'react';
import Options from './Options';

const Questions = ({ qs }) => {
    const { question, options } = qs;
    return (
        <div>
            <div className='bg-gray-100 p-6 rounded shadow-lg'>
                <h1 className='text-xl text-center'>{question}</h1>
                <div className='grid grid-cols-1 gap-5 my-5 lg:grid-cols-2 mx-auto'>
                    {
                        options.map((option, idx) => <Options key={idx} option={option} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Questions;