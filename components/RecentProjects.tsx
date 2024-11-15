import { projects } from "@/data";
import dynamic from "next/dynamic";
const PinContainer = dynamic(() => import('./ui/3d-pin').then((mod)=> mod.PinContainer), {ssr: false});
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
    return(
        <div className="py-20" id="projects">
            <h1 className="heading text-white">
                Alguns de meus {''}
                <span className="text-purple">projetos</span>
            </h1>
            <div className=" flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map(({ id, title, description, img, iconLists, link } ) => (
                    <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] sm:w-[570px] flex text-white items-center justify-center w-[80vw]">
                        <PinContainer title={link} href={link}>
                            <div className="relative sm:w-[570px] sm:h-[40vh] h-[30vh] flex items-center justify-center w-[80vw] overflow-hidden">
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                    <img src="/bg.png" alt="bg-img" />
                                </div>
                                <img
                                src={img} alt="cover" className="z-10 absolute bottom-0"
                                />
                            </div>
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {title}
                            </h1>
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                {description}
                            </p>
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className="border border-white/[0.2] rounded-full bg-black flex 
                                        justify-center items-center w-8 h-8 lg:w-10 lg:h-10"
                                        style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                            <img src={icon} alt={icon} className="p-2" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">Veja o site ativo</p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9"/>
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects;