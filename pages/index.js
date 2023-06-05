import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "../components/Navbar";
import List from "../components/List";
import Detail from "../components/Detail";
import {AiFillGithub} from 'react-icons/ai';
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] })


export default function Home({isDarkMode, toggleTheme}) {
    const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <Head>
        <title>TASK-2</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`relative py-2 px-2 sm:px-8 md:px-16 lg:px-36 md:h-screen flex flex-col gap-2 md:gap-4 ${isDarkMode ? 'text-light':'text-dark'}`}>
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <div className={'flex flex-col-reverse md:flex-row w-full gap-2 md:gap-4 md:h-[88%]'}>
              <List isDarkMode={isDarkMode} setSelectedUser={setSelectedUser}/>
              <Detail isDarkMode={isDarkMode} selectedUser={selectedUser}/>
          </div>
          <footer className={'text-center text-sm'}>Made with ❤ by: Jai Bhalla</footer>
      </main>
    </>
  )
}
