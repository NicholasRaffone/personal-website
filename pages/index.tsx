import {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import HomeCard from '../components/HomeCard'

import Face from '../components/images/face.jpg';
import Robo from '../components/images/robo.jpg'
import Exp from '../components/images/exp.jpg'

import LinkedIn from '../components/icons/LinkedIn';
import Github from '../components/icons/Github';
import Spotify from '../components/icons/Spotify';
import Envelope from '../components/icons/Envelope';
import IconWrapper from '../components/icons/IconWrapper';

const cards = [
  {
    title: 'About',
    image: Face,
    to:'/about',
    classes: "col-start-1 row-start-1 delay-0"
  },
  {
    title: 'Experience',
    image: Exp,
    to:'/experience',
    classes: "md:col-start-2 row-start-2 delay-100"
  },
  {
    title: 'Achievements',
    image: Robo,
    to:'/achievements',
    classes: "col-start-1 row-start-3 delay-200"
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
  {
    icon:Spotify,
    url:'https://open.spotify.com/user/nicholas.raffone?si=a94fc1b051014e44',
    title: 'Spotify'
  },
  {
    icon:Github,
    url:'https://github.com/nicholasraffone',
    title: 'Github'
  },
]

const IndexPage = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(()=>{
      setLoaded(true);
    }, 250)
  }, [])
  return(
    <Layout title="Home | Nicholas Raffone" containerClasses="overflow-x-hidden">
      {
        /**
         * Revamp Cards: Circular? Spinnable, some type of interaction
         */
      }
      <div className="md:flex justify-evenly items-center md:min-h-screen w-screen pt-14 md:pt-0">
        <div className="md:w-fit h-full flex flex-col justify-center md:pl-5">
          <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 my-7 md:my-3 lg:my-0 lg:leading-normal text-center md:text-left">Nicholas Raffone</h1>
          <h1 className="text-2xl h-8 lg:h-10 lg:text-4xl text-center md:text-left mb-5 md:my-0">Software & Powerlifting</h1>
        </div>
        <div className="grid md:min-w-[21rem] md:max-w-[25rem] lg:min-w-[35rem] lg:max-w-[40rem] w-full h-full md:grid md:grid-cols-2 grid-rows-3 pt-5 md:pt-20 pb-9 gap-7 md:gap-0 lg:gap-5 md:overflow-hidden items-center">
            {
              cards.map((card, index)=> {
                const cardProps={loaded, ...card};
                return <HomeCard {...cardProps} key={`${index}_${cardProps.title}`}/>
            })
            }
        </div>
      </div>
      <div className="overflow-hidden col-span-2 mt-12 lg:mt-20 mb-4">
          <div className="flex w-32 h-full items-center justify-between mx-auto lg:ml-auto lg:mr-5 space-x-4">
          {
          icons.map(icon=>(
            <a href={icon.url} target="_blank" rel="noreferrer" className='cursor-pointer relative group self-center w-16'>
              {
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={icon.icon.viewbox}
                className={`duration-300 fill-gray-500 hover:fill-gray-800 cursor-pointer`}
            >
                {icon.icon.path}
            </svg>
              }
            </a>
          ))
        }
          </div>
        </div>
    </Layout>
  )
}

export default IndexPage
