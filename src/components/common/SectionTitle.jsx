import PropTypes from 'prop-types';
import './SectionTitle.css';

const SectionTitle = ({ children, glitch = true }) => {
  return (
    <h2 className="section-title">
      {glitch ? (
        <span className="glitch" data-text={children}>
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