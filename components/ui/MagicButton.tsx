
const MagicButton = ({ title, icon, position, handleClick }:{
    title: string; icon: React.ReactNode, position: string; handleClick?: () => void;
}) => {
    return(
<button onClick={handleClick} className="w-full relative inline-flex h-12 overflow-hidden rounded-lg mt-3 md:w-60 md:mt-10 p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 bg-slate-950 gap-2 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    {position === 'left' && icon}
    {title}
    {position === 'right' && icon}
  </span>
</button>

    )
}

export default MagicButton;