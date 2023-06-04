import React from 'react';


const Preloader = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="w-12 h-12 flex items-center justify-center">
                <div className="h-4 w-4 bg-white rounded-full animate-bounce1 mx-1"></div>
                <div className="h-4 w-4 bg-white rounded-full animate-bounce2 mx-1"></div>
                <div className="h-4 w-4 bg-white rounded-full animate-bounce3 mx-1"></div>
                <div className="h-4 w-4 bg-white rounded-full animate-bounce4 mx-1"></div>
            </div>
        </div>
    );
};

export default Preloader;
