interface WinnerItemProps {
  year: string;
  award: string;
  title: string;
  description: string;
}

const WinnerItem = ({ year, award, title, description }: WinnerItemProps) => {
  return (
    <div className="p-8 bg-gray-900 border-l-4 border-terminal-green max-md:p-[1.2rem] max-md:text-center max-sm:p-4">
      <h3 className="font-mono text-base uppercase tracking-[0.1em] mb-2 text-terminal-green max-md:text-[0.9rem]">
        {year}年度 {award}
      </h3>
      <h4 className="text-[1.5rem] mb-4 max-md:text-[1.1rem] max-md:mb-3 max-sm:text-[1.2rem]">
        「{title}」
      </h4>
      <p className="text-base leading-[1.6] mb-0 opacity-90 max-md:text-[0.85rem] max-md:leading-[1.5] max-sm:text-[0.9rem]">
        {description}
      </p>
    </div>
  );
};

export default WinnerItem;