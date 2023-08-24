import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Layout from '../components/Layout'
import htg from '../components/images/htg.png'
import morethanfood from '../components/images/morethanfood.png'
import robo2 from '../components/images/robo2.jpg'
import adsb from '../components/images/adsb.png'

const AchievementItems = [
  {
    image: adsb,
    title: 'Securing ADS-B',
    text: "Researching the security of ADS-B communication by implementing and physically testing digital signatures and the TESLA protocol using GNU radio and dump1090 under the guidance of professor Christina Popper at NYU Abu Dhabi. PDF of the research to be out soon!"
  },
  {
    image: htg,
    title: '2022 HTG Finalist',
    text: "My team (EmergentIQ) were finalists at BCG's 2022 Hack the Globe hackathon. Looking at the theme of economic empowerment, our idea was a SaaS platform that would make market research in SEA more readily available. I made the React TypeScript demo for our project in the 48 hour window we had."
  },
  {
    image: morethanfood,
    title: 'MoreThanFood',
    text: "I created MoreThanFood, an anonymous message board using MERN for NYUAD students to interact with experts and students to speak openly about issues relating to eating disorders for over 2000 students. Coordinating with mental health professionals on campus, we sought to decrease the stigma around eating disorders."
  },
  {
    image: robo2,
    title: 'VEX Robotics',
    text: "As co-captain and lead programmer of the VEX robotics team, our team 901J won 7 total awards at multiple international competitions. We also participated the world championships in 2019 and 2020."
  },
]

const AchievementPage = () => {
  const ref = useRef<HTMLDivElement>();
  const getActiveElem = () =>{
    if(ref && ref.current)
      return -1 * Math.ceil((ref.current.getBoundingClientRect().top - window.innerHeight/2) / window.innerHeight);
    return 0
  }
  const [active, setActive] = useState(getActiveElem())
  useEffect(()=>{
    document.addEventListener('scroll',()=>{
      if(ref && ref.current)
        setActive(getActiveElem())
    })
    return () => document.removeEventListener('scroll',()=>{
      if(ref && ref.current)
        setActive(getActiveElem())
    })
  },[ref])
  return(
    <Layout title="Achievements | Nicholas Raffone">
      <div className="min-h-screen lg:grid grid-cols-4" ref={ref}>
        <div className="h-screen min-w-[25vw] fixed py-16 px-5 border-r hidden lg:block">
          {
            AchievementItems.map((item, index)=>(
              <p
                className={`${index===active?"bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500":"text-gray-600"} font-bold text-3xl cursor-pointer my-4 w-fit`}
                onClick={()=>window.scrollTo({left: 0, top: window.innerHeight*index, behavior: 'smooth'})}
              >
                {item.title}
              </p>
            ))
          }
        </div>
        {
          AchievementItems.map(item=>(
          <div className="min-h-screen w-full col-start-2 col-span-3 py-12 lg:py-16 px-0 lg:px-28">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 text-4xl lg:text-5xl leading-normal font-bold my-3 lg:my-5 w-fit px-3 lg:px-0">{item.title}</h1>
            <img src={item.image} className="h-80 object-cover w-full object-left"/>
            <p className="text-md lg:text-lg my-5 px-3 lg:px-0">{item.text}</p>
          </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default AchievementPage
