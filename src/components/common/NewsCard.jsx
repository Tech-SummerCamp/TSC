import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ date, tag, title, excerpt, link, tagType = 'default' }) => {
  return (
    <article className="news-card">
      <div className="news-header">
        <time className="news-date">{date}</time>
        <span className={`news-tag ${tagType ? `tag-${tagType}` : ''}`}>
          {tag}
        </span>
      </div>
      <h3 className="news-title">
        {link ? (
          <Link to={link}>{title}</Link>
        ) : (
          title
        )}
      </h3>
      <p className="news-excerpt">{excerpt}</p>
    </article>
  );
};

NewsCard.propTypes = {
  date: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  link: PropTypes.string,
  tagType: PropTypes.string
};

export default NewsCard;