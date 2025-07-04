import PropTypes from 'prop-types';

const GridItem = ({ title, description, type = 'target' }) => {
  const targetStyles = "p-6 border border-gray-300 bg-white/[0.02] transition-all duration-300 hover:border-terminal-green hover:translate-x-2.5";
  const detailStyles = "text-center py-8 px-4 border border-white/20 relative overflow-hidden transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:bg-terminal-green before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100";
  
  const targetTitleStyles = "font-mono text-[1.1rem] mb-2 text-terminal-green";
  const targetTextStyles = "text-[0.95rem] mb-0 opacity-90";
  
  const detailTitleStyles = "font-mono text-[0.9rem] uppercase tracking-[0.1em] mb-4 text-terminal-green";
  const detailTextStyles = "text-[1.2rem] font-bold mb-0";
  
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
        ${isTarget ? 'max-md:text-[0.9rem] max-md:mb-[0.4rem] max-sm:text-base' : 'max-md:text-[0.75rem] max-sm:text-[0.8rem]'}
      `}>
        {title}
      </h3>
      <p className={`
        ${isTarget ? targetTextStyles : detailTextStyles}
        ${isTarget ? 'max-md:text-[0.8rem] max-md:leading-[1.3] max-sm:text-[0.9rem]' : 'max-md:text-[0.9rem] max-sm:text-base'}
      `}>
        {description}
      </p>
    </div>
  );
};

GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['target', 'detail'])
};

export default GridItem;