import { Link } from 'react-router-dom';

interface NewsCardProps {
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  link?: string;
  tagType?: 'announcement' | 'website' | 'update' | 'important' | 'default';
}

const NewsCard = ({ date, tag, title, excerpt, link, tagType = 'default' }: NewsCardProps) => {
  const getTagClasses = () => {
    const baseClasses = "font-mono text-[0.7rem] text-black px-2 py-1 rounded-sm font-bold tracking-wider uppercase";
    
    switch(tagType) {
      case 'announcement':
        return `${baseClasses} bg-white`;
      case 'website':
        return `${baseClasses} bg-white`;
      case 'update':
        return `${baseClasses} bg-white/80`;
      case 'important':
        return `${baseClasses} bg-terminal-green animate-pulse`;
      default:
        return `${baseClasses} bg-terminal-green`;
    }
  };

  return (
    <article className="relative overflow-hidden bg-white/[0.02] border border-white/40 p-8 md:p-5 max-[480px]:p-4 transition-all duration-300 hover:border-terminal-green hover:-translate-y-1 hover:bg-terminal-green/5 group">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-terminal-green scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
      <div className="flex justify-between items-center mb-4 md:flex-col md:items-start md:gap-2">
        <time className="font-mono text-[0.85rem] md:text-[0.8rem] text-terminal-green">{date}</time>
        <span className={getTagClasses()}>
          {tag}
        </span>
      </div>
      <h3 className="text-[1.2rem] md:text-base max-[480px]:text-base font-semibold mb-4 leading-[1.4] md:leading-[1.3]">
        {link ? (
          <Link to={link} className="text-white no-underline transition-colors duration-300 hover:text-terminal-green">{title}</Link>
        ) : (
          title
        )}
      </h3>
      <p className="text-[0.95rem] md:text-[0.85rem] max-[480px]:text-[0.85rem] leading-[1.6] md:leading-[1.5] text-white/80 m-0">{excerpt}</p>
    </article>
  );
};

export default NewsCard;