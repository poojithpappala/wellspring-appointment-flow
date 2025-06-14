import React from 'react';
import AnimatedSection from '@/components/global/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookText, CalendarDays, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const placeholderArticles = [
  {
    id: "1",
    title: 'Understanding Your Annual Check-up',
    category: 'Preventive Care',
    author: 'Dr. Emily Carter',
    date: 'June 10, 2025',
    excerpt: 'Learn why annual check-ups are crucial for maintaining long-term health and what to expect during your visit.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: "2",
    title: 'Nutrition Tips for a Healthy Heart',
    category: 'Diet & Nutrition',
    author: 'Johnathan Lee, RD',
    date: 'June 05, 2025',
    excerpt: 'Discover simple dietary changes you can make to improve cardiovascular health and reduce risks.',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnV0cml0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: "3",
    title: 'The Importance of Mental Well-being',
    category: 'Mental Health',
    author: 'Dr. Sarah Adams',
    date: 'May 28, 2025',
    excerpt: 'Exploring the connection between mental and physical health, and strategies to support your emotional wellness.',
    imageUrl: 'https://images.unsplash.com/photo-1500994332901-aa000c6255dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
];

const HealthHubPage: React.FC = () => {
  return (
    <div className="container mx-auto section-padding">
      <AnimatedSection>
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 leading-heading">
            Health Hub
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-body">
            Your go-to resource for trusted health information, articles, and wellness tips from our experts.
          </p>
        </header>
      </AnimatedSection>

      <AnimatedSection className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderArticles.map((article) => (
            <Card key={article.id} className="shadow-soft rounded-2xl flex flex-col overflow-hidden">
              <Link to={`/health-hub/${article.id}`}>
                <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover"/>
              </Link>
              <CardHeader>
                <CardTitle className="text-xl text-deep-teal hover:text-opacity-80 transition-colors">
                  <Link to={`/health-hub/${article.id}`}>{article.title}</Link>
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground pt-1">{article.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-body text-sm">
                  {article.excerpt}
                </p>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-muted-foreground border-t pt-4 mt-auto">
                <div className="flex items-center mb-2 sm:mb-0">
                  <UserCircle size={16} className="mr-1.5" /> {article.author}
                </div>
                <div className="flex items-center">
                  <CalendarDays size={16} className="mr-1.5" /> {article.date}
                </div>
              </CardFooter>
              <div className="p-6 pt-0">
                 <Button asChild variant="outline" className="w-full mt-2 border-deep-teal text-deep-teal hover:bg-deep-teal/10">
                    <Link to={`/health-hub/${article.id}`}>
                      Read More <BookText size={16} className="ml-2" />
                    </Link>
                 </Button>
              </div>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="text-center">
        <Button size="lg" className="btn-primary">
          Load More Articles
        </Button>
      </AnimatedSection>
    </div>
  );
};

export default HealthHubPage;
