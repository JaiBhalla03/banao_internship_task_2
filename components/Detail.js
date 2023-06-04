import React from 'react';



const Detail = ({isDarkMode}) => {
    return (
        <div className={`${isDarkMode?'bg-dark shadow-black' : 'bg-white'} p-4 shadow-xl rounded-xl w-full md:w-7/12 h-full`}>

        </div>
    );
};

export default Detail;