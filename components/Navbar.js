import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import {AiFillGithub} from "react-icons/ai";

const Navbar = ({ isDarkMode, toggleTheme }) => {
    const handleToggleTheme = () => {
        toggleTheme();
    };

    return (
        <nav position="static" className={`${isDarkMode?'bg-dark shadow-black' : 'bg-white'} p-4 shadow-xl rounded-xl md:h-[12%] flex items-center w-full`}>
            <div className={'flex justify-between w-full'}>
                <div className={'flex items-center font-bold text-lg md:text-2xl'}>
                    INTERNSHIP TASK-2
                </div>
                <div className={'flex gap-3'}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="toggle theme"
                    >
                        <a href={'https://github.com/JaiBhalla03/banao_internship_task_2'} className={`${isDarkMode?'text-dark' : 'text-light'}`}><AiFillGithub size={25}/></a>
                    </IconButton>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="toggle theme"
                        onClick={handleToggleTheme}
                    >
                        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
