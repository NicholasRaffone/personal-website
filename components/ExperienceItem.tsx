import {useEffect, useRef} from 'react';

interface ExperienceItemInt{
    index: number;
    color: string;
    image: string;
}

const isInViewport = (ref, offset = 0) =>{
    if (!ref.current) return false;
    const top = ref.current.getBoundingClientRect().top;
    const bottom = ref.current.getBoundingClientRect().bottom;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight || bottom>0 && bottom <= window.innerHeight;
}
const ExperienceItem = ({index, color, image}:ExperienceItemInt) => {
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
            <div className="flex-1 flex justify-center md:justify-end items-start md:pr-3" data-aos="fade-up" data-aos-duration="1000" data-aos-id={`aos-elem-${index}`}>
                <img className="sticky bg-green-50 top-[calc(50vh-7em)] h-[14em] w-[14em] object-cover border" src={image}/>
            </div>
            <div className="flex-1 flex justify-center flex-col p-3">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <p className="text-3xl lg:text-4xl text-white font-bold lg:whitespace-nowrap">Software Engineer Intern - SIE</p>
                    <p className="text-lg lg:text-xl text-gray-400 italic">May 2022 - Aug 2022</p>
                    <p className="text-lg lg:text-xl text-white">At SIE, I did stuff and stuff and stuff as well as other stuff and actually even more stuff haha isn't that crazy</p>
                </div>
            </div>
        </div>
    )
}
export default ExperienceItem;