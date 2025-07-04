import PropTypes from 'prop-types';

const PrizeItem = ({ rank, amount, iconSrc, type = 'first' }) => {
  const baseStyles = "text-center py-12 px-16 border-2 relative overflow-hidden transition-all duration-300 hover:scale-105";
  const firstStyles = "border-[#FFD700] hover:border-[#FFA500] hover:shadow-[0_10px_30px_rgba(255,215,0,0.3)]";
  const secondStyles = "border-[#C0C0C0] hover:border-[#A8A8A8] hover:shadow-[0_10px_30px_rgba(192,192,192,0.3)]";
  const defaultHover = "hover:border-terminal-green";
  
  const typeStyles = type === 'first' ? firstStyles : type === 'second' ? secondStyles : defaultHover;
  
  return (
    <div className={`
      ${baseStyles} ${typeStyles} border-white
      max-md:p-6 max-md:max-w-[280px] max-md:w-full
      max-sm:p-6 max-sm:max-w-[250px]
    `}>
      <img 
        src={iconSrc} 
        alt={`${rank} Place`} 
        className="w-8 h-8 mb-4 opacity-80" 
      />
      <h3 className="font-mono text-[1.5rem] mb-4 tracking-[0.1em] max-md:text-[1.2rem]">
        {rank} PLACE
      </h3>
      <p className="text-[3rem] font-bold text-terminal-green mb-0 max-md:text-[2.8rem] max-sm:text-[2.5rem]">
        ¥{amount.toLocaleString()}
      </p>
    </div>
  );
};

PrizeItem.propTypes = {
  rank: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  iconSrc: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['first', 'second'])
};

export default PrizeItem;