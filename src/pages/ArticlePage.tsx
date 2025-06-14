import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedSection from '@/components/global/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, UserCircle, Tag } from 'lucide-react';

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
    content: 'This is the full content for "Understanding Your Annual Check-up". Regular check-ups help in early detection of potential health issues, allow for preventive care discussions, and build a strong doctor-patient relationship. During a check-up, your doctor will review your medical history, perform a physical exam, and may recommend screenings or vaccinations based on your age, gender, and risk factors. It is an essential part of proactive healthcare.\n\nFurther details include discussing lifestyle factors like diet and exercise, mental health screening, and updating immunizations. Preventive screenings, such as mammograms, colonoscopies, and cholesterol checks, are scheduled based on established guidelines and individual risk profiles. These check-ups are not just for when you are sick; they are a cornerstone of maintaining wellness and preventing future illness.',
  },
  {
    id: "2",
    title: 'Nutrition Tips for a Healthy Heart',
    category: 'Diet & Nutrition',
    author: 'Johnathan Lee, RD',
    date: 'June 05, 2025',
    excerpt: 'Discover simple dietary changes you can make to improve cardiovascular health and reduce risks.',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnV0cml0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    content: 'Full content for "Nutrition Tips for a Healthy Heart". Focus on a diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit processed foods, sugary drinks, and excessive sodium. Small, consistent changes can make a big difference to your heart health.\n\nKey strategies include incorporating omega-3 fatty acids from fish or plant sources, choosing high-fiber foods to help manage cholesterol, and staying hydrated. Portion control and mindful eating also play significant roles. Understanding food labels can empower you to make healthier choices when shopping.',
  },
  {
    id: "3",
    title: 'The Importance of Mental Well-being',
    category: 'Mental Health',
    author: 'Dr. Sarah Adams',
    date: 'May 28, 2025',
    excerpt: 'Exploring the connection between mental and physical health, and strategies to support your emotional wellness.',
    imageUrl: 'https://images.unsplash.com/photo-1500994332901-aa000c6255dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    content: 'Full content for "The Importance of Mental Well-being". Mental health is integral to overall health. Practices like mindfulness, regular exercise, adequate sleep, and seeking support when needed can significantly improve your emotional resilience and quality of life.\n\nTechniques such as cognitive behavioral therapy (CBT), meditation, and stress-management exercises can be very effective. Building a strong social support network and engaging in hobbies or activities you enjoy are also vital for maintaining good mental health. It\'s important to remember that seeking professional help is a sign of strength, not weakness.',
  },
];

const ArticlePage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = placeholderArticles.find(a => a.id === articleId);

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
        <article className="bg-card p-6 sm:p-10 rounded-3xl shadow-subtle-lift"> {/* Enhanced padding and rounding */}
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
