import PropTypes from 'prop-types';
import './PrizeItem.css';

const PrizeItem = ({ rank, amount, iconSrc, type = 'first' }) => {
  return (
    <div className={`prize-item ${type}-place`}>
      <img src={iconSrc} alt={`${rank} Place`} className="prize-icon" />
      <h3 className="prize-rank">{rank} PLACE</h3>
      <p className="prize-amount">¥{amount.toLocaleString()}</p>
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