
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
          <Button asChild variant="outline" size="lg" className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white">
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
        <Button asChild variant="outline" className="mb-10 group border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white transition-all">
          <Link to="/health-hub">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Health Hub
          </Link>
        </Button>
      </AnimatedSection>

      <AnimatedSection>
        <article className="bg-card p-6 sm:p-10 rounded-3xl shadow-subtle-lift">
          <div className="mb-8">
            <img src={article.imageUrl} alt={article.title} className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg mb-8"/>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
              <span className="flex items-center"><Tag size={16} className="mr-1.5 text-deep-teal" /> {article.category}</span>
              <span className="flex items-center"><UserCircle size={16} className="mr-1.5 text-deep-teal" /> By {article.author}</span>
              <span className="flex items-center"><CalendarDays size={16} className="mr-1.5 text-deep-teal" /> {article.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display text-charcoal mb-6 leading-tight">{article.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{article.excerpt}</p>
          </div>
          
          <div 
            className="prose prose-lg lg:prose-xl max-w-none text-charcoal leading-relaxed space-y-6 selection:bg-deep-teal/20"
            dangerouslySetInnerHTML={{ __html: sanitizeContent(article.content) }} 
          />
        </article>
      </AnimatedSection>
    </div>
  );
};

export default ArticlePage;
