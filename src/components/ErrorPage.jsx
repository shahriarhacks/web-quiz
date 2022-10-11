import React from 'react';
import Lottie from 'lottie-react';
import broken from '../assets/lonely.json'
const ErrorPage = () => {
    return (
        <div className='w-full'>
            <Lottie animationData={broken} loop={true} />
        </div>
    );
};

export default ErrorPage;