import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListCard from './ListCard';
import PreloaderSmall from './PreloaderSmall';

const List = ({ isDarkMode , setSelectedUser}) => {
    const [data, setData] = useState(null); // stores the data of the users
    const [loading, setLoading] = useState(true); // taking care while the data is loaded
    const [error, setError] = useState(null); // taking care of the error message

    const fetchData = async () => {
        try {
            const res = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users');
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
    }, []);

    const handleSelectUser = (user)=>{
        setSelectedUser(user);
    }

    return (
        <div className={`${isDarkMode ? 'bg-dark shadow-black' : 'bg-white'} p-4 shadow-xl rounded-xl w-full md:w-5/12 h-full`}>
            <div className="border-b border-gray-400 py-3 font-bold text-md text-gray-400 flex items-center p-2 h-[10%]">
                User List
            </div>
            {loading ? (
                <PreloaderSmall />
            ) : (
                <div className={`my-2 overflow-y-scroll ${isDarkMode ? 'custom-scrollbar-dark' : 'custom-scrollbar'} p-2 md:h-[85%] h-screen`}>
                    {data?.map((person) => (
                        <ListCard
                            key={person.id}
                            firstName={person.profile.firstName}
                            lastName={person.profile.lastName}
                            username={person.profile.username}
                            imag={person.avatar}
                            isDarkMode={isDarkMode}
                            onSelectUser={() => handleSelectUser(person)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default List;
