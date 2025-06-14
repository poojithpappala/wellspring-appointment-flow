
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/global/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Clock, Eye, Star, Calendar, User, ArrowRight } from 'lucide-react';
import { allHealthArticles, getArticlesByCategory, getFeaturedArticles, searchArticles } from '@/data/healthArticles';

const HealthHubPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;

  const categories = ['All Topics', 'Heart Health', 'Mental Wellness', 'Nutrition', 'Fitness & Exercise', 'Preventive Care', 'Medications', 'Women\'s Health', 'Sleep Health'];

  const filteredArticles = useMemo(() => {
    let articles = allHealthArticles;
    
    // Apply search filter
    if (searchTerm.trim()) {
      articles = searchArticles(searchTerm);
    }
    
    // Apply category filter
    if (selectedCategory && selectedCategory !== 'All Topics') {
      articles = articles.filter(article => article.category === selectedCategory);
    }
    
    return articles;
  }, [searchTerm, selectedCategory]);

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const featuredArticles = getFeaturedArticles();

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  console.log('Health Hub - All articles count:', allHealthArticles.length);
  console.log('Health Hub - Filtered articles count:', filteredArticles.length);
  console.log('Health Hub - Sample article IDs:', allHealthArticles.slice(0, 10).map(a => ({ id: a.id, title: a.title })));

  return (
    <div className="container mx-auto section-padding">
      {/* Hero Section */}
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display text-foreground mb-6 leading-tight">
            Health <span className="text-deep-teal dark:text-primary">Hub</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Your trusted source for evidence-based health information, expert insights, and practical wellness guidance.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search health articles, conditions, treatments..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg border-2 border-deep-teal/20 dark:border-primary/20 focus:border-deep-teal dark:focus:border-primary rounded-full shadow-sm bg-background dark:bg-card text-foreground"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Articles */}
      {!searchTerm && selectedCategory === 'All Topics' && (
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-3xl font-display text-foreground mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.slice(0, 3).map((article) => (
                <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-deep-teal/30 dark:hover:border-primary/30 bg-card dark:bg-card">
                  <CardHeader className="p-0">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3 bg-deep-teal/10 dark:bg-primary/10 text-deep-teal dark:text-primary">
                      {article.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-deep-teal dark:group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </span>
                    </div>
                    <Button asChild variant="outline" className="w-full group-hover:bg-deep-teal dark:group-hover:bg-primary group-hover:text-white dark:group-hover:text-white transition-colors border-deep-teal/20 dark:border-primary/20 text-foreground hover:text-white">
                      <Link to={`/health-hub/${article.id}`}>
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* Categories and Articles */}
      <AnimatedSection>
        <Tabs value={selectedCategory} onValueChange={handleCategoryChange} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9 mb-8 bg-muted/50 dark:bg-muted/50">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="text-xs lg:text-sm data-[state=active]:bg-deep-teal dark:data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:text-white text-foreground"
              >
                {category === 'All Topics' ? 'All' : category.replace(' & ', ' ')}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-display text-foreground">
                  {category === 'All Topics' 
                    ? `All Health Articles (${filteredArticles.length})`
                    : `${category} Articles (${filteredArticles.length})`
                  }
                </h2>
              </div>

              {filteredArticles.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-4">
                    {searchTerm 
                      ? `No articles found for "${searchTerm}"`
                      : `No articles found in ${category}`
                    }
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All Topics');
                    }}
                    className="border-deep-teal/20 dark:border-primary/20 text-foreground hover:bg-deep-teal dark:hover:bg-primary hover:text-white"
                  >
                    View All Articles
                  </Button>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {paginatedArticles.map((article) => {
                      console.log('Rendering article:', article.id, article.title);
                      return (
                        <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-deep-teal/30 dark:hover:border-primary/30 bg-card dark:bg-card">
                          <CardHeader className="p-0">
                            <img 
                              src={article.imageUrl} 
                              alt={article.title}
                              className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                            />
                          </CardHeader>
                          <CardContent className="p-6">
                            <Badge variant="secondary" className="mb-3 bg-deep-teal/10 dark:bg-primary/10 text-deep-teal dark:text-primary">
                              {article.category}
                            </Badge>
                            <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-deep-teal dark:group-hover:text-primary transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-muted-foreground mb-4 line-clamp-3">
                              {article.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                              <div className="flex items-center space-x-3">
                                <span className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {article.readTime}
                                </span>
                                <span className="flex items-center">
                                  <Eye className="h-4 w-4 mr-1" />
                                  {article.views}
                                </span>
                                <span className="flex items-center">
                                  <Star className="h-4 w-4 mr-1 fill-current text-yellow-500 dark:text-yellow-400" />
                                  {article.rating}
                                </span>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                              <span className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {article.author}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {article.date}
                              </span>
                            </div>
                            
                            <Button asChild variant="outline" className="w-full group-hover:bg-deep-teal dark:group-hover:bg-primary group-hover:text-white dark:group-hover:text-white transition-colors border-deep-teal/20 dark:border-primary/20 text-foreground hover:text-white">
                              <Link to={`/health-hub/${article.id}`}>
                                Read Full Article
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-4">
                      <Button
                        variant="outline"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="border-deep-teal/20 dark:border-primary/20 text-foreground hover:bg-deep-teal dark:hover:bg-primary hover:text-white disabled:opacity-50"
                      >
                        Previous
                      </Button>
                      <span className="text-sm text-muted-foreground">
                        Page {currentPage} of {totalPages}
                      </span>
                      <Button
                        variant="outline"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="border-deep-teal/20 dark:border-primary/20 text-foreground hover:bg-deep-teal dark:hover:bg-primary hover:text-white disabled:opacity-50"
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </AnimatedSection>
    </div>
  );
};

export default HealthHubPage;
