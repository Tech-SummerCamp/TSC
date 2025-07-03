import PropTypes from 'prop-types';
import './GridItem.css';

const GridItem = ({ title, description, type = 'target' }) => {
  return (
    <div className={`grid-item ${type}-item`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['target', 'detail'])
};

export default GridItem;