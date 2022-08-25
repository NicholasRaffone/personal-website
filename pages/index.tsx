import {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import HomeCard from '../components/HomeCard'

const cards = [
  {
    title: 'About',
    image: 'https://astrowind.vercel.app/_image/assets/images/hero_768x432.avif',
    to:'/about',
    classes: "col-start-1 row-start-1 delay-0"
  },
  {
    title: 'Experiences',
    image: 'https://astrowind.vercel.app/_image/assets/images/hero_768x432.avif',
    to:'/experience',
    classes: "md:col-start-2 row-start-2 delay-100"
  },
  {
    title: 'Achievements',
    image: 'https://astrowind.vercel.app/_image/assets/images/hero_768x432.avif',
    to:'/achievements',
    classes: "col-start-1 row-start-3 delay-200"
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
          <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 my-3 lg:my-0 lg:leading-normal text-center md:text-left">Nicholas Raffone</h1>
          <h1 className="text-2xl lg:text-4xl text-center md:text-left">Longer subtitle here</h1>
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
      <div className="overflow-hidden col-span-2">
          <p className="text-4xl text-center my-5">Contact Me</p>
          {/**Icons down here */}
        </div>
    </Layout>
  )
}

export default IndexPage
