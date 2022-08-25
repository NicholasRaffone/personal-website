import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Layout from '../components/Layout'
import { Parallax } from 'react-parallax';

const AchievementItems = [
  {
    title: 'Hack the Globe 2022'
  },
  {
    title: 'Title 2'
  },
  {
    title: 'Title 3'
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
        <div className="h-screen min-w-[25vw] fixed py-24 px-5 border-r hidden lg:block">
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
            <Parallax blur={0} bgImage="https://astrowind.vercel.app/_image/assets/images/hero_768x432.avif" bgImageAlt="the cat" strength={500}>
              <div style={{ height: '30vh' }} />
            </Parallax>
            <p className="text-md lg:text-lg my-5 px-3 lg:px-0">Here's some filler shit yada yada Here's some filler shit yada yada Here's some filler shit yada yada Here's some filler shit yada yada</p>
          </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default AchievementPage
