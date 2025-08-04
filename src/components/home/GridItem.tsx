interface GridItemProps {
  title: string;
  description: string;
  type?: 'target' | 'detail';
}

const GridItem = ({ title, description, type = 'target' }: GridItemProps) => {
  const targetStyles = "p-6 border-2 border-gray-300 bg-gradient-to-br from-white/5 to-white/2 transition-all duration-300 hover:border-terminal-green hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,255,65,0.3)] hover:bg-terminal-green/10";
  const detailStyles = "flex flex-col items-center justify-center text-center py-8 px-4 border-2 border-white/40 bg-gradient-to-br from-white/5 to-white/2 transition-all duration-300 hover:border-terminal-green hover:shadow-[0_10px_40px_rgba(0,255,65,0.3)] hover:bg-terminal-green/10 hover:-translate-y-1";
  
  const targetTitleStyles = "font-mono text-[1.3rem] mb-2 text-terminal-green font-bold";
  const targetTextStyles = "text-[1.1rem] mb-0 opacity-90 font-medium";
  
  const detailTitleStyles = "font-mono text-[0.9rem] uppercase tracking-[0.15em] mb-3 text-white/60 font-semibold";
  const detailTextStyles = "text-[1.3rem] font-bold mb-0 text-terminal-green";
  
  const isTarget = type === 'target';
  
  return (
    <div className={`
      ${isTarget ? targetStyles : detailStyles}
      md:text-left md:mx-0 md:p-6
      max-md:text-center max-md:mx-2 max-md:p-[0.8rem] max-md:hover:translate-y-[-2px] max-md:hover:translate-x-0
      max-sm:p-4
    `}>
      <h3 className={`
        ${isTarget ? targetTitleStyles : detailTitleStyles}
        ${isTarget ? 'max-md:text-[1.1rem] max-md:mb-[0.4rem] max-sm:text-[1.2rem]' : 'max-md:text-[0.85rem] max-sm:text-[0.9rem]'}
      `}>
        {title}
      </h3>
      <p className={`
        ${isTarget ? targetTextStyles : detailTextStyles}
        ${isTarget ? 'max-md:text-[1rem] max-md:leading-[1.3] max-sm:text-[1.05rem]' : 'max-md:text-[1.1rem] max-sm:text-[1.2rem]'}
      `}>
        {description}
      </p>
    </div>
  );
};

export default GridItem;