import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import PreloaderSmall from './PreloaderSmall';

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

    useEffect(() => {
        fetchData().then(() => {
            console.log(data);
        });
    }, [selectedUser]);

    console.log(selectedUser)

    return (
        <div className={`${isDarkMode ? 'bg-dark shadow-black' : 'bg-white'} p-4 shadow-xl rounded-xl w-full md:w-7/12 h-full`}>
            {selectedUser ? (
                loading ? (
                    <PreloaderSmall />
                ) : (
                    <div>{JSON.stringify(data)}</div>
                )
            ) : (
                <div>No user selected</div>
            )}
        </div>
    );
};

export default Detail;
