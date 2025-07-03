import PropTypes from 'prop-types';
import './WinnerItem.css';

const WinnerItem = ({ year, award, title, description }) => {
  return (
    <div className="winner-item">
      <h3>{year}年度 {award}</h3>
      <h4>「{title}」</h4>
      <p>{description}</p>
    </div>
  );
};

WinnerItem.propTypes = {
  year: PropTypes.string.isRequired,
  award: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default WinnerItem;