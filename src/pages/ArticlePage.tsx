
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedSection from '@/components/global/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, UserCircle, Tag } from 'lucide-react';
import { getArticleById } from '@/data/healthArticles';

const ArticlePage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articleId ? getArticleById(articleId) : undefined;

  if (!article) {
    return (
      <div className="container mx-auto section-padding text-center">
        <AnimatedSection>
          <h1 className="text-4xl font-display text-destructive mb-6">Article Not Found</h1>
          <p className="text-lg text-muted-foreground mb-10">The article you're looking for doesn't exist or may have been moved.</p>
          <Button asChild variant="outline" size="lg" className="border-deep-teal/20 dark:border-primary/20 text-deep-teal dark:text-primary hover:bg-deep-teal dark:hover:bg-primary hover:text-white dark:hover:text-white">
            <Link to="/health-hub">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Health Hub
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    );
  }

  // Basic HTML sanitizer (very naive, for demonstration - use a library like DOMPurify in production)
  const sanitizeContent = (htmlString: string) => {
    // Replace newlines with <br> tags for display
    let sanitized = htmlString.replace(/\n/g, '<br />');
    // Example: very basic script tag removal (NOT secure for untrusted content)
    sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    return sanitized;
  };

  return (
    <div className="container mx-auto section-padding">
      <AnimatedSection>
        <Button asChild variant="outline" className="mb-10 group border-deep-teal/20 dark:border-primary/20 text-deep-teal dark:text-primary hover:bg-deep-teal dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all">
          <Link to="/health-hub">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Health Hub
          </Link>
        </Button>
      </AnimatedSection>

      <AnimatedSection>
        <article className="bg-card dark:bg-card p-6 sm:p-10 rounded-3xl shadow-subtle-lift border border-border dark:border-border">
          <div className="mb-8">
            <img src={article.imageUrl} alt={article.title} className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg mb-8"/>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
              <span className="flex items-center"><Tag size={16} className="mr-1.5 text-deep-teal dark:text-primary" /> {article.category}</span>
              <span className="flex items-center"><UserCircle size={16} className="mr-1.5 text-deep-teal dark:text-primary" /> By {article.author}</span>
              <span className="flex items-center"><CalendarDays size={16} className="mr-1.5 text-deep-teal dark:text-primary" /> {article.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display text-foreground dark:text-foreground mb-6 leading-tight font-bold">{article.title}</h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground mb-8 leading-relaxed">{article.excerpt}</p>
          </div>
          
          <div className="prose prose-lg lg:prose-xl max-w-none text-foreground dark:text-foreground leading-relaxed space-y-6 selection:bg-deep-teal/20 dark:selection:bg-primary/20">
            <style jsx>{`
              .prose h1 { 
                color: hsl(var(--foreground)); 
                font-weight: 700; 
                font-size: 2.25rem; 
                line-height: 1.2; 
                margin: 2rem 0 1rem 0; 
              }
              .prose h2 { 
                color: hsl(var(--foreground)); 
                font-weight: 600; 
                font-size: 1.875rem; 
                line-height: 1.3; 
                margin: 1.5rem 0 0.75rem 0; 
              }
              .prose h3 { 
                color: hsl(var(--foreground)); 
                font-weight: 600; 
                font-size: 1.5rem; 
                line-height: 1.4; 
                margin: 1.25rem 0 0.5rem 0; 
              }
              .prose h4 { 
                color: hsl(var(--foreground)); 
                font-weight: 600; 
                font-size: 1.25rem; 
                line-height: 1.4; 
                margin: 1rem 0 0.5rem 0; 
              }
              .prose p { 
                color: hsl(var(--foreground)); 
                line-height: 1.7; 
                margin: 1rem 0; 
              }
              .prose strong { 
                color: hsl(var(--foreground)); 
                font-weight: 700; 
              }
              .prose em { 
                color: hsl(var(--foreground)); 
                font-style: italic; 
              }
              .prose ul, .prose ol { 
                color: hsl(var(--foreground)); 
                margin: 1rem 0; 
                padding-left: 1.5rem; 
              }
              .prose li { 
                color: hsl(var(--foreground)); 
                margin: 0.5rem 0; 
              }
              .prose blockquote { 
                color: hsl(var(--muted-foreground)); 
                border-left: 4px solid hsl(var(--primary)); 
                padding-left: 1rem; 
                margin: 1.5rem 0; 
                font-style: italic; 
              }
              .prose a { 
                color: hsl(var(--primary)); 
                text-decoration: underline; 
              }
              .prose a:hover { 
                color: hsl(var(--primary)); 
                opacity: 0.8; 
              }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: sanitizeContent(article.content) }} />
          </div>
        </article>
      </AnimatedSection>
    </div>
  );
};

export default ArticlePage;
