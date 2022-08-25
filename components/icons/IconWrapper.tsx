import BluePinkGradient from './BluePinkGradient';
interface IconWrapperInt{
    navbar:boolean;
    path: JSX.Element;
    viewbox: string;
}
const IconWrapper = ({navbar, path, viewbox}:IconWrapperInt) => {
    return(
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewbox}
        className={`duration-300 ${!navbar?"fill-gray-500 group-hover:fill-black":"hover:opacity-100 opacity-50 fill-[url(#BluePinkGradient)]"} cursor-pointer`}
    >
        <BluePinkGradient />
        {path}
    </svg>
    )
}

export default IconWrapper;