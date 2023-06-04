import React from 'react';
import Image from "next/image";
import {AiOutlineRight} from "react-icons/ai";

const ListCard = ({isDarkMode, firstName, lastName, username}) => {
    return (
        <div className={`border-b p-2 mt-1 flex justify-between hover:rounded-xl ${isDarkMode?'hover:bg-gray-800 hover:border-gray-800':'hover:bg-gray-200 hover:border-b-white'} cursor-pointer duration-300 transition-all transform`}>
            <div className={'flex gap-8'}>
                <Image src={'https://randomuser.me/api/portraits/men/57.jpg'} alt={''} width={60} height={60} className={'rounded-full'}/>
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