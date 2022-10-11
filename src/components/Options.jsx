import React from 'react';

const Options = ({ option }) => {
    return (
        <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
            <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="bordered-radio-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-900">{option}</label>
        </div>
    );
};

export default Options;