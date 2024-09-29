import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>
            {/**
             * Grid
             */}
            <div 
            className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04]
            bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">

                <div 
                className="absolute pointer-events-none inset-0 flex items-center justify-center 
                dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase text-blue-100 max-w-80 text-center tracking-widest text-xs">
                        Next.js
                    </h2>
                    <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl"
                     words="Desenvolvimento ágil, soluções inovadoras: meu código, sua ideia"/>

                    <p className="text-center text-blue-100 md:tracking-wider text-sm md:text-lg lg:text-xl">
                        Olá, eu sou o Luiz, um desenvolvedor fullstack situado em Jaú-SP
                    </p>
                    <a href="#projects">
                        <MagicButton title="Meus projetos" icon={<FaLocationArrow/>} position="right"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;