import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import PreloaderSmall from './PreloaderSmall';
import Image from "next/image";
import userImage from "../images/user.jpg";


const ImageWithFallback = (props) => {
    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...rest}
            src={imgSrc}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
};



const Detail = ({ isDarkMode , selectedUser}) => {
    const [data, setData] = useState(null); // stores the data of the user
    const [loading, setLoading] = useState(true); // taking care while the data is getting loaded
    const [error, setError] = useState(null); // taking care of the error message

    const fetchData = async () => {
        try {
            const res = await axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${selectedUser.id}`);
            setData(res.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleImageError = (event) => {
        event.target.src = userImage; // Replace the failed image with the fallback userImage
    }

    useEffect(() => {
        fetchData().then(() => {
            console.log(data);
        });
    }, [selectedUser]);

    console.log(selectedUser)

    return (
        <div className={`${isDarkMode ? 'bg-dark shadow-black' : 'bg-white'} p-4 shadow-xl rounded-xl w-full md:w-7/12 h-full`}>
            <div className="border-b border-gray-400 py-3 font-bold text-md text-gray-400 flex items-center p-2 h-[10%]">
                User Details
            </div>
            {selectedUser ? (
                loading ? (
                    <PreloaderSmall/>
                ) : (
                    <div className={'flex flex-col gap-4 py-2 h-full px-2 md:px-8'}>
                        <div className={'flex flex-col gap-2 items-center justify-center'}>
                            <div className={'flex flex-col items-center justify-center'}>
                                <Image
                                    src={selectedUser.avatar || userImage}
                                    alt={''} width={140} height={140}
                                    className={'rounded-full'}
                                    onError={()=>handleImageError}
                                />
                                <div className={'flex justify-center text-gray-400 font-bold'}>@{selectedUser.profile.username}</div>
                            </div>
                            <div className={`flex gap-1 ${isDarkMode?'shadow-black':''} shadow-md px-4 py-2 rounded-xl w-full`}>
                                <div className={'font-bold text-lg'}>Bio:</div>
                                <div className={'flex items-center'}>
                                    {selectedUser.Bio}
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-3'}>
                            <div className={`flex gap-1 ${isDarkMode?'shadow-black':''} shadow-md px-4 py-2 rounded-xl w-full`}>
                                <div className={'font-bold text-lg'}>Full Name:</div>
                                <div className={'flex items-center'}>
                                    {selectedUser.profile.firstName + ' ' + selectedUser.profile.lastName}
                                </div>
                            </div>
                            <div className={`flex gap-1 ${isDarkMode?'shadow-black':''} shadow-md px-4 py-2 rounded-xl w-full`}>
                                <div className={'font-bold text-lg'}>Job Title:</div>
                                <div className={'flex items-center'}>
                                    {selectedUser.jobTitle}
                                </div>
                            </div>
                            <div className={`flex gap-1 ${isDarkMode?'shadow-black':''} shadow-md px-4 py-2 rounded-xl w-full`}>
                                <div className={'font-bold text-lg'}>Email:</div>
                                <div className={'flex items-center'}>
                                    {selectedUser.profile.email}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            ) : (
                <div className={'flex items-center justify-center w-full h-full text-gray-400'}>No user selected</div>
            )}
        </div>
    );
};

export default Detail;
