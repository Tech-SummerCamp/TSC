import { useState, useEffect } from 'react';
import { newsArticles, type NewsArticle } from '../data/newsData';

export function useNews() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load articles from static data
    setArticles(newsArticles);
    setLoading(false);
  }, []);

  return { articles, loading };
}

export function useNewsArticle(slug: string) {
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find article by slug from static data
    const foundArticle = newsArticles.find(a => a.slug === slug);
    setArticle(foundArticle || null);
    setLoading(false);
  }, [slug]);

  return { article, loading };
}