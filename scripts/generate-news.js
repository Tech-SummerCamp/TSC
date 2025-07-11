import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsDirectory = path.join(__dirname, '../src/content/news');
const outputPath = path.join(__dirname, '../src/data/newsData.ts');

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true,
});

function generateNewsData() {
  const files = fs.readdirSync(newsDirectory);
  
  const articles = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace(/\.md$/, '');
      const fullPath = path.join(newsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      const { data, content } = matter(fileContents);
      const htmlContent = marked(content);
      
      // Extract excerpt (first paragraph or first 200 characters)
      const excerptMatch = content.match(/^[^#\n].*$/m);
      const excerpt = excerptMatch ? excerptMatch[0].substring(0, 200) + '...' : '';
      
      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        category: data.category,
        content: htmlContent,
        excerpt
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Generate TypeScript file
  const tsContent = `export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  content: string;
  excerpt?: string;
}

// Auto-generated from markdown files
export const newsArticles: NewsArticle[] = ${JSON.stringify(articles, null, 2)};
`;

  fs.writeFileSync(outputPath, tsContent);
  console.log(`Generated ${articles.length} news articles`);
}

generateNewsData();