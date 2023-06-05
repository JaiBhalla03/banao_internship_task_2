import React, {useState} from 'react';
import Image from "next/image";
import {AiOutlineRight} from "react-icons/ai";
import userImage from '../images/user.jpg'


const ListCard = ({isDarkMode, firstName, lastName, username, imag, onSelectUser}) => {

    const handleImageError = (event) => {
        event.target.src = userImage; // Replace the failed image with the fallback userImage
    }

    return (
        <div onClick={onSelectUser} className={`border-b ${isDarkMode?'border-gray-800': 'border-gray-400'} p-2 mt-1 flex justify-between hover:rounded-xl ${isDarkMode?'hover:bg-gray-800 hover:border-gray-800':'hover:bg-gray-200 hover:border-b-white'} cursor-pointer duration-300 transition-all transform`}>
            <div className={'flex gap-8'}>
                <Image
                    src={imag}
                    alt={'None'} width={60} height={60}
                    className={'rounded-full'}
                    onError={handleImageError}
                />
                <div className={'flex flex-col justify-around font-bold'}>
                    <div className={'flex items-center'}>{firstName + ' ' + lastName}</div>
                    <div className={'text-sm text-gray-400 flex items-center'}>@{username}</div>
                </div>
            </div>
            <div className={'flex items-center px-2'}>
                <AiOutlineRight size={20}/>
            </div>
        </div>
    );
};

export default ListCard;