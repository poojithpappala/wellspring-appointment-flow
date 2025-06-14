
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedSection from '@/components/global/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Placeholder data - in a real app, you'd fetch this based on articleId
const placeholderArticles = [
  {
    id: "1", // Using string IDs to match URL params
    title: 'Understanding Your Annual Check-up',
    category: 'Preventive Care',
    author: 'Dr. Emily Carter',
    date: 'June 10, 2025',
    excerpt: 'Learn why annual check-ups are crucial for maintaining long-term health and what to expect during your visit.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    content: 'This is the full content for "Understanding Your Annual Check-up". Regular check-ups help in early detection of potential health issues, allow for preventive care discussions, and build a strong doctor-patient relationship. During a check-up, your doctor will review your medical history, perform a physical exam, and may recommend screenings or vaccinations based on your age, gender, and risk factors. It is an essential part of proactive healthcare.',
  },
  {
    id: "2",
    title: 'Nutrition Tips for a Healthy Heart',
    category: 'Diet & Nutrition',
    author: 'Johnathan Lee, RD',
    date: 'June 05, 2025',
    excerpt: 'Discover simple dietary changes you can make to improve cardiovascular health and reduce risks.',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnV0cml0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    content: 'Full content for "Nutrition Tips for a Healthy Heart". Focus on a diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit processed foods, sugary drinks, and excessive sodium. Small, consistent changes can make a big difference to your heart health.',
  },
  {
    id: "3",
    title: 'The Importance of Mental Well-being',
    category: 'Mental Health',
    author: 'Dr. Sarah Adams',
    date: 'May 28, 2025',
    excerpt: 'Exploring the connection between mental and physical health, and strategies to support your emotional wellness.',
    imageUrl: 'https://images.unsplash.com/photo-1500994332901-aa000c6255dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    content: 'Full content for "The Importance of Mental Well-being". Mental health is integral to overall health. Practices like mindfulness, regular exercise, adequate sleep, and seeking support when needed can significantly improve your emotional resilience and quality of life.',
  },
];

const ArticlePage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = placeholderArticles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="container mx-auto section-padding text-center">
        <AnimatedSection>
          <h1 className="text-3xl font-bold text-destructive mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or may have been moved.</p>
          <Button asChild variant="outline">
            <Link to="/health-hub">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Health Hub
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div className="container mx-auto section-padding">
      <AnimatedSection>
        <Button asChild variant="outline" className="mb-8">
          <Link to="/health-hub">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Health Hub
          </Link>
        </Button>
      </AnimatedSection>

      <AnimatedSection>
        <article className="prose lg:prose-xl max-w-none bg-card p-6 sm:p-8 rounded-2xl shadow-soft">
          <img src={article.imageUrl} alt={article.title} className="w-full h-64 sm:h-96 object-cover rounded-lg mb-8"/>
          <div className="mb-4 text-sm text-muted-foreground">
            <span>{article.category}</span> | <span>By {article.author}</span> | <span>{article.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-heading">{article.title}</h1>
          <p className="lead text-lg text-muted-foreground mb-6">{article.excerpt}</p>
          <div className="text-charcoal leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }} />
        </article>
      </AnimatedSection>
    </div>
  );
};

export default ArticlePage;
