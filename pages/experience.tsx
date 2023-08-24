import {useEffect, useRef} from 'react';
import Layout from '../components/Layout'
import ExperienceItem from '../components/ExperienceItem'
import PSLogo from '../components/images/pslogo.jpeg'
import HokanLogo from '../components/images/hokanlogo.png'
import CallbackLogo from '../components/images/callbacklogo.jpeg'
import PalantirLogo from '../components/images/palantir.jpg'

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
            color: 'rgb(0,0,0)',
            image: PalantirLogo,
            title: 'Forward Deployed Engineer Intern',
            company: 'Palantir',
            time: 'May 2023 - August 2023',
            desc: 'Developed software in Foundry that facilitated the scaling of Palantir\'s healthcare efforts in the UK',
            software: ['Foundry', 'SQL', 'TypeScript']
        },
        {
            color: 'rgb(24,24,24)',
            image: CallbackLogo,
            title: 'Full-Stack Developer',
            company: 'Callback',
            time: 'March 2022 - April 2023',
            desc: 'Created smart contracts for NFT minting, ETL pipelines for BI, and lead development on the Callback website',
            software: ['Solidity', 'Firebase', 'React']
        },
        {
            color: 'rgb(0,67,156)',
            image: PSLogo,
            title: 'Software Engineer Intern',
            company: 'PlayStation',
            time: 'May 2022 - August 2022',
            desc: 'Lead a team of 6 interns, architecting and developing upgraded features for the PS5 chat ecosystem',
            software: ['MERN', 'TypeScript']
        },
        {
            color: 'rgb(69,53,144)',
            image: HokanLogo,
            title: 'Data Engineer Intern',
            company: 'Hokan Inc.',
            time: 'October 2020 - March 2021',
            desc: 'Established a staging environment for existing ETL pipelines and created serverless AWS apps for BI',
            software: ['AWS SAM', 'AWS Glue', 'Terraform']
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
                    experiences.map((experience, index)=>{
                        const propsObj = {index, ...experience};
                        return (
                            <>
                                <ExperienceItem {...propsObj}/>
                                {index!==experiences.length-1&&<div className="mb-[40vh]"/>}
                            </>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default ExperiencePage
