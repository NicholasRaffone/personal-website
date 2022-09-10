import { useEffect, useState } from 'react'

import Layout from '../components/Layout'
import aboutjpg from '../components/images/about.jpg'
import walk from '../components/images/walk.jpg'
import group from '../components/images/group.jpg'

const AboutPage = () => {
  const [open, setOpen] = useState(0);
    
  const images = [
    aboutjpg,
    walk,
    group
  ];

  let timer  
  const updateCount = () => {
    timer = !timer && setInterval(() => {
      setOpen(prevCount => (prevCount + 1)%images.length)
    }, 3000)
  }
  
  useEffect(() => {
    updateCount()
    return () => clearInterval(timer)
  }, [])

  return(
    <Layout title="About | Nicholas Raffone">
      <div className="md:h-screen pt-12 md:pt-0 mx-auto flex flex-col md:flex-row items-center w-fit gap-7 md:gap-20 relative">
        {
          images.map((image, index)=><img src={image} className={`${index===open?"opacity-100":"opacity-0"} duration-1000 md:rounded-2xl h-96 md:h-48 lg:h-96 w-screen md:w-48 lg:w-96 float-right object-cover absolute md:fixed`}/>
          )
        }
        <div className='h-96 w-screen md:w-48 lg:w-96'/>
        <div className="px-3 md:p-0 md:max-w-[50vw] md:h-48 lg:h-96 flex-1">
          <p className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 w-fit">About Me</p>
          <p className="text-xl">
            Hi! My name is Nicholas Raffone and I'm a third-year computer science student at NYU Abu Dhabi.
            I've been coding for around seven years now, starting with making animations in Scratch all the way to building production-ready web apps and data pipelines.
            <br/><br/>
            Outside of work, I'm a powerlifter aiming to compete on the national scale, and I hope to take the UAE record for squat, bench, and deadlift.
            I also love urban trekking, just wandering around and between big cities and recording my journeys. 
            <br/><br/>
            In the future, I hope to open my own cafe, focused around holding tech-related community events and engaging with patrons.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
