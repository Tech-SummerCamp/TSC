import Markdoc from '@markdoc/markdoc';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  content: string;
  excerpt?: string;
}

const newsDirectory = path.join(process.cwd(), 'src/content/news');

export async function getAllArticles(): Promise<NewsArticle[]> {
  const files = fs.readdirSync(newsDirectory);
  
  const articles = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace(/\.md$/, '');
      const fullPath = path.join(newsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      const { data, content } = matter(fileContents);
      const ast = Markdoc.parse(content);
      const renderedContent = Markdoc.transform(ast);
      
      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        category: data.category,
        content: Markdoc.renderers.html(renderedContent),
        excerpt: content.slice(0, 200) + '...'
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return articles;
}

export async function getArticleBySlug(slug: string): Promise<NewsArticle | null> {
  try {
    const fullPath = path.join(newsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const { data, content } = matter(fileContents);
    const ast = Markdoc.parse(content);
    const renderedContent = Markdoc.transform(ast);
    
    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      category: data.category,
      content: Markdoc.renderers.html(renderedContent),
      excerpt: content.slice(0, 200) + '...'
    };
  } catch (error) {
    return null;
  }
}