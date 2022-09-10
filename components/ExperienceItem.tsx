import {useEffect, useRef} from 'react';

interface ExperienceItemInt{
    index: number;
    color: string;
    image: string;
    software: string[];
    desc: string;
    company: string;
    title: string;
    time: string;
}

const isInViewport = (ref, offset = 0) =>{
    if (!ref.current) return false;
    const top = ref.current.getBoundingClientRect().top;
    const bottom = ref.current.getBoundingClientRect().bottom;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight || bottom>0 && bottom <= window.innerHeight;
}
const ExperienceItem = ({index, color, image, software, desc, title, time, company}:ExperienceItemInt) => {
    const ref = useRef()
    useEffect(() => {
        document.addEventListener(`scroll`, ({}) => {
            if(isInViewport(ref)){
                document.body.style.backgroundColor = color;
            }
          });
        return () => 
            document.removeEventListener(`scroll`, ({}) => {
                if(isInViewport(ref)){
                    document.body.style.backgroundColor = color;
                }
              });
    },[])
    return(
        <div className="w-full h-screen flex flex-col md:flex-row relative" ref={ref} >
            <div className="shrink-0 flex-1 flex justify-center md:justify-end items-start md:pr-3 mt-5" data-aos="fade-up" data-aos-duration="1000" data-aos-id={`aos-elem-${index}`}>
                <img className="sticky bg-green-50 top-[calc(50vh-7em)] h-[14em] w-[14em] object-cover border" src={image}/>
            </div>
            <div className="flex-1 flex justify-center flex-col p-3">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <p className="text-3xl lg:text-4xl text-white font-bold">{company}</p>
                    <p className="text-xl lg:text-2xl text-white font-bold my-1">{title}</p>
                    <p className="text-lg lg:text-xl text-gray-400 italic">{time}</p>
                    <p className="text-md lg:text-lg text-white my-1">{desc}</p>
                    <p className="text-md lg:text-lg text-italic text-gray-200 italic mt-2 ">Software Used: {software.join(', ')}</p>
                </div>
            </div>
        </div>
    )
}
export default ExperienceItem;
