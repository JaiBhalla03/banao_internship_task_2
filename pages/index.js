import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "../components/Navbar";
import List from "../components/List";
import Detail from "../components/Detail";
import {AiFillGithub} from 'react-icons/ai';

const inter = Inter({ subsets: ['latin'] })


export default function Home({isDarkMode, toggleTheme}) {
  return (
    <>
      <Head>
        <title>TASK-2</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={'relative py-2 px-2 sm:px-8 md:px-16 lg:px-36 md:h-screen flex flex-col gap-2 md:gap-4'}>
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <div className={'flex flex-col md:flex-row w-full gap-2 md:gap-4 md:h-[88%]'}>
              <List isDarkMode={isDarkMode}/>
              <Detail isDarkMode={isDarkMode}/>
          </div>
      </main>
    </>
  )
}
