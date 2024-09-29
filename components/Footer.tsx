import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";

const Footer = () => {
    return(
        <footer className="w-full pt-20 pb-10 relative" id="contact">
            <div className="w-full inset-0 absolute left-0 -bottom-72 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50"
                />
            </div>
            <div className="flex flex-col items-center text-white">
                <h1 className="heading lg:max-w-[45vw] z-50">
                    Pronto para elevar <span className="text-purple">sua</span> presença digital para o próximo nível?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">Entre em contato comigo hoje e vamos discutir sobre como eu posso te ajudar a conquistar as suas metas</p>
                <a className="z-50" href="mailto:otavio.tata.morais@gmail.com">
                    <MagicButton title="Entrar em contato" icon={<FaLocationArrow/>} position="right"/>
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal z-50 font-light text-white-200">Copyright &copy; 2024, Luiz</p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className="w-10 h-10 z-50 cursor-pointer flex justify-center items-center backdrop:filter backdrop:blur-lg saturate-180 bg-opacity-75
                            bg-black-200 rounded-lg border border-black-300">
                            <a href={profile.link}>
                                <img src={profile.img} alt='social' width={20} height={20} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;