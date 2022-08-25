import {useEffect, useRef} from 'react';
import Layout from '../components/Layout'
import ExperienceItem from '../components/ExperienceItem'

const down = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-4 h-auto animate-bounce'><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>  
const isInViewport = (ref, offset = 0) =>{
    if (!ref.current) return false;
    const top = ref.current.getBoundingClientRect().top;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
}

const ExperiencePage = () => {
    const ref = useRef()
    useEffect(() => {
        document.addEventListener(`scroll`, ({}) => {
            if(isInViewport(ref)){
                document.body.style.backgroundColor = 'white';
            }
          });
        return () => 
            {
                document.body.style.backgroundColor = 'white';
                document.removeEventListener(`scroll`, ({}) => {
                    if(isInViewport(ref)){
                        document.body.style.backgroundColor = 'white';
                    }
                });
            }
    },[])
    useEffect(() => {
        document.body.style.transitionDuration = '700ms';
    },[])
    const experiences = [
        {
            color: 'rgb(0,67,156)',
            image: 'https://yt3.ggpht.com/ytc/AMLnZu91BueDfRw_PPeht766E0RdKohGtiwzo89ozw_Jthk=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            color: 'rgb(24,24,24)',
            image: 'https://media-exp1.licdn.com/dms/image/C560BAQGX3wLhLMrrmg/company-logo_200_200/0/1649345630824?e=2147483647&v=beta&t=5WEYB9nrhqEVVMc2ipQChV-L2Qh6Iz-ij3bT7Fnnd6U'
        },
        {
            color: 'rgb(69,53,144)',
            image: 'https://www.corp.hkn.jp/static/hokan_white_vertical-24f691bb86ced7ca4beb87aafa7a852b.png'
        }
    ]
    return(
        <Layout title="Experiences | Nicholas Raffone">
            <div className="px-[10%] pt-[35vh] lg:pt-[40vh] min-h-screen relative duration-700" id="experiencecont">
                <div className="h-[50vh] pb-12" ref={ref}>
                    <h1 className="text-center text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
                        What I've been up to
                    </h1>
                    <p className="text-center mt-3 text-xl italic">Fullstack, cloud computing, and more</p>
                    <div className="h-3/4 flex items-end justify-center">
                        {down}
                    </div>
                </div>
                {
                    experiences.map((experience, index)=>
                    <>
                        <ExperienceItem index={index} color={experience.color} image={experience.image}/>
                        {index!==experiences.length-1&&<div className="mb-[40vh]"/>}
                    </>)
                }
            </div>
        </Layout>
    )
}

export default ExperiencePage
