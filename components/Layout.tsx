import React, { ReactNode, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Hamburger from 'hamburger-react'
import LinkedIn from './icons/LinkedIn';
import Github from './icons/Github';
import Spotify from './icons/Spotify';
import Envelope from './icons/Envelope';
import IconWrapper from './icons/IconWrapper';

type Props = {
  children?: ReactNode
  title?: string
  containerClasses?: string
}

const routes = [
  {
    href: '/',
    title: 'HOME'
  },
  {
    href: '/about',
    title: 'ABOUT'
  },
  {
    href: '/experience',
    title: 'EXPERIENCE'
  },
  {
    href: '/achievements',
    title: 'ACHIEVEMENTS'
  },
]

const icons = [
  {
    icon:LinkedIn,
    url:'https://www.linkedin.com/in/nicholasraffone/',
    title: 'LinkedIn'
  },
  {
    icon:Envelope,
    url:'mailto:nicholasraffone0@gmail.com',
    title: 'Mail'
  },
  // {
  //   icon:Spotify,
  //   url:'https://open.spotify.com/user/nicholas.raffone?si=a94fc1b051014e44',
  //   title: 'Spotify'
  // },
  // {
  //   icon:Github,
  //   url:'https://github.com/nicholasraffone',
  //   title: 'Github'
  // },
]

const Layout = ({ children, title = 'This is the default title', containerClasses }: Props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter()
  useEffect(() => {
    if(open){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }
  },[open])
  return(
    <div className="">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
        <link rel="icon" type="image/x-icon" href="nr.png" />
      </Head>
      <div className='w-screen flex py-3 px-5 lg:px-16 fixed justify-end bg-white z-50 h-12 items-end font-inter border-b'>
        <div className="flex-1">
          <p className="w-fit mx-auto lg:mx-0 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
            <Link href="/">
              Nicholas Raffone
            </Link>
          </p>
        </div>
        {
          routes.map(route=>(
            <Link href={route.href} key={`${route.href}_routekey_navbar`}>
              <div className='hidden lg:block cursor-pointer relative group mx-5'>
                <a className={`${router.pathname!==route.href?"opacity-50":'opacity-100'} hover:opacity-100 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500  duration-300 text-xs`}>{route.title}</a>
                {
                  router.pathname===route.href &&
                  <div className="w-full bg-red-50 absolute flex justify-center">
                    <div className="h-1 w-1 bg-pink-500 absolute rounded-full"></div>
                  </div>
                }
              </div>
            </Link>
          ))
        }
        {/* <div className='hidden lg:block cursor-pointer relative group mx-5'>
          <a className={`opacity-50 hover:opacity-100 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500  duration-300 text-xs`}
            href="https://drive.google.com/file/d/1V5pGt3YHYZOt7x5c03PM8LwXJUBgLOFa/view?usp=sharing" target="_blank" rel="noreferrer"
          >
            RESUME
          </a>
        </div> */}
        {
          icons.map(icon=>(
            <a href={icon.url} target="_blank" rel="noreferrer" className='hidden lg:block cursor-pointer relative group self-center w-4 h-4 ml-5'>
              {
                <IconWrapper path={icon.icon.path} viewbox={icon.icon.viewbox} navbar={true}/>
              }
            </a>
          ))
        }
      </div>
      <div className="fixed right-[25px] top-0 z-[100] lg:hidden">
        <Hamburger toggled={open} toggle={setOpen} color={!open?"linear-gradient(45deg, #3b82f6, #ec4899)":"linear-gradient(90deg, #ec4899, #3b82f6)"}/>
      </div>
      <div className={`fixed h-screen w-screen bg-[rgb(255,255,255,0.75)] z-[49] duration-300 ${open?"backdrop-blur-md opacity-100":"backdrop-blur-none pointer-events-none opacity-0"} lg:invisible lg:opacity-0`}>
        <div className="h-full w-full flex flex-col px-5 pt-14 divide-y divide-gray-500 overflow-y-scroll">
          {
            routes.map(route=>(
              <Link href={route.href}>
                <div className="flex items-center" onClick={()=>setOpen(false)}>
                  <p className={`duration-0 font-inter text-xl py-4 cursor-pointer tracking-wide font-bold mr-2 ${router.pathname!==route.href?"text-gray-500":'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500'} hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500`}>
                    {route.title}
                  </p>
                  {router.pathname===route.href && <div className="h-[0.375rem] w-[0.375rem] rounded-full bg-pink-500" />}
                </div>
              </Link>
            ))
          }
          {/* <div className="flex items-center" onClick={()=>setOpen(false)}>
            <p className={`duration-0 font-inter text-xl py-4 cursor-pointer tracking-wide font-bold mr-2 text-gray-500 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500`}>
              <a href="https://drive.google.com/file/d/1V5pGt3YHYZOt7x5c03PM8LwXJUBgLOFa/view?usp=sharing" target="_blank" rel="noreferrer">
              RESUME
              </a>
            </p>
          </div> */}
          {
            icons.map(icon=>(
              <a href={icon.url} target="_blank" rel="noreferrer" className="duration-300 font-inter text-xl py-4 cursor-pointer tracking-wide font-bold  flex items-center group" onClick={()=>setOpen(false)}>
                <span className="group-hover:bg-clip-text text-gray-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-pink-500">
                  {icon.title.toUpperCase()}
                </span>
              </a>
            ))
          }
        </div>
      </div>
      <div className={`animate-fadeIn ${containerClasses}`}>
        {children}
      </div>
    </div>
  )
}

export default Layout
