import React from 'react';
import Options from './Options';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';

const Questions = ({ qs }) => {
    const { question, options } = qs;
    const handelClickButton = qs => {
        toast(`The answer is:  ${qs?.correctAnswer}`)
    }
    const answer = (option) => {
        if (option === qs?.correctAnswer) {
            toast.success("Hurrah! Great Your Answer is Right")
        }
        else {
            toast.warning("Alas! Your Answer wrong")
        }
    }
    return (
        <div>
            <div className='bg-gray-300 p-6 rounded shadow-lg'>
                <h1 className='text-xl text-center'>{question}</h1>
                <button onClick={() => handelClickButton(qs)}>
                    <EyeIcon className="h-6 w-6 my-5 text-indigo-700" />
                </button>
                <div className='grid grid-cols-1 gap-5 my-5 lg:grid-cols-2 mx-auto'>
                    {
                        options.map((option, idx) => <Options key={idx} answer={answer} option={option} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Questions;