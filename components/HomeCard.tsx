import Link from 'next/link'

interface HomeCardInt{
    title: string;
    image: string;
    loaded: boolean;
    to: string;
    classes: string;
}

const HomeCard = ({
    title,
    image,
    loaded,
    to,
    classes
}:HomeCardInt) =>{
    return(
        <div className={`group h-48 w-48 md:h-40 md:w-40 lg:h-64 lg:w-64 relative rounded-2xl overflow-hidden justify-self-center duration-700 ${loaded?"translate-y-0 opacity-1":"translate-y-20 opacity-0"} cursor-pointer ${classes}`}>
            <img src={image} alt="" className="h-full object-cover w-full"/>
            <p className="bg-black bg-opacity-20 top-0 absolute z-1 text-lg lg:text-2xl font-bold w-full flex justify-center items-center h-full text-white group-hover:opacity-0 duration-500">{title}</p>
            <Link href={to}>
                <div className="absolute h-full w-full translate-y-full rounded-xl duration-500 group-hover:translate-y-0 bg-[rgb(0,0,0,0.5)] top-0 left-0 z-10 flex justify-center items-center">
                    <p className="p-1 pb-[0.1em] border border-white w-fit text-white font-bold">LEARN MORE</p>
                </div>
            </Link>
        </div>
    )
}
export default HomeCard;
