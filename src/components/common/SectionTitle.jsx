import PropTypes from 'prop-types';

const SectionTitle = ({ children, glitch = true }) => {
  return (
    <h2 className="text-center mb-16 md:mb-8 text-[clamp(2rem,4vw,3rem)] md:text-[clamp(1.6rem,5vw,2.2rem)] max-[480px]:text-[clamp(1.6rem,6.5vw,2.2rem)] text-terminal-green font-mono shadow-[0_0_15px_rgba(0,255,65,0.3)] md:px-4 max-[480px]:px-2">
      {glitch ? (
        <span className="relative inline-block hover:before:content-[attr(data-text)] hover:after:content-[attr(data-text)] hover:before:absolute hover:after:absolute hover:before:top-0 hover:after:top-0 hover:before:left-0 hover:after:left-0 hover:before:w-full hover:after:w-full hover:before:h-full hover:after:h-full hover:before:animate-[section-glitch-1_0.3s_infinite] hover:after:animate-[section-glitch-2_0.3s_infinite] hover:before:text-white hover:after:text-terminal-green hover:before:z-[-1] hover:after:z-[-2]" data-text={children}>
          {children}
        </span>
      ) : (
        children
      )}
    </h2>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  glitch: PropTypes.bool
};

export default SectionTitle;