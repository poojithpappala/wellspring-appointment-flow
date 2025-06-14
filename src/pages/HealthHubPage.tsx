
import React, { useState } from 'react';
import AnimatedSection from '@/components/global/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookText, 
  CalendarDays, 
  UserCircle, 
  ArrowRight, 
  Search, 
  Heart, 
  Brain, 
  Activity, 
  Apple, 
  Stethoscope, 
  Shield, 
  Pill, 
  Users, 
  Clock, 
  Star,
  TrendingUp,
  Eye,
  Bone,
  Wind,
  Baby,
  Sparkles,
  Award,
  BookOpen,
  Video,
  Headphones,
  Download,
  Share2,
  Filter,
  Tag
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { allHealthArticles, getArticlesByCategory } from '@/data/healthArticles';

const healthCategories = [
  { name: 'All Topics', count: 156, icon: BookText, color: 'bg-blue-500' },
  { name: 'Heart Health', count: 28, icon: Heart, color: 'bg-red-500' },
  { name: 'Mental Wellness', count: 34, icon: Brain, color: 'bg-purple-500' },
  { name: 'Fitness & Exercise', count: 22, icon: Activity, color: 'bg-green-500' },
  { name: 'Nutrition', count: 31, icon: Apple, color: 'bg-orange-500' },
  { name: 'Preventive Care', count: 19, icon: Shield, color: 'bg-blue-600' },
  { name: 'Medications', count: 15, icon: Pill, color: 'bg-indigo-500' },
  { name: 'Women\'s Health', count: 18, icon: Users, color: 'bg-pink-500' },
];

const healthTips = [
  {
    tip: "Drink at least 8 glasses of water daily to maintain proper hydration and support all bodily functions.",
    category: "Hydration",
    icon: "💧"
  },
  {
    tip: "Aim for 7-9 hours of quality sleep each night to support immune function and mental health.",
    category: "Sleep",
    icon: "😴"
  },
  {
    tip: "Take a 10-minute walk after meals to aid digestion and help regulate blood sugar levels.",
    category: "Exercise",
    icon: "🚶‍♂️"
  },
  {
    tip: "Practice deep breathing for 5 minutes daily to reduce stress and lower blood pressure.",
    category: "Stress Management",
    icon: "🧘‍♀️"
  },
  {
    tip: "Eat a rainbow of fruits and vegetables to ensure you're getting diverse nutrients and antioxidants.",
    category: "Nutrition",
    icon: "🌈"
  },
  {
    tip: "Wash your hands frequently for at least 20 seconds to prevent the spread of germs and illness.",
    category: "Prevention",
    icon: "🧼"
  }
];

const healthStats = [
  { number: "150+", label: "Health Articles", icon: BookOpen },
  { number: "50K+", label: "Monthly Readers", icon: Users },
  { number: "25+", label: "Medical Experts", icon: Stethoscope },
  { number: "4.8/5", label: "Average Rating", icon: Star }
];

const HealthHubPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [activeTab, setActiveTab] = useState('articles');

  const filteredArticles = allHealthArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Topics' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative section-padding pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-deep-teal/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-deep-teal/10 rounded-full text-sm font-medium text-deep-teal mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Your Comprehensive Health Resource
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Complete
                <br />
                <span className="bg-gradient-to-r from-deep-teal to-blue-600 bg-clip-text text-transparent">
                  Health Hub
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-4xl mx-auto">
                Your ultimate destination for evidence-based health information, expert advice, and practical wellness guidance. 
                From prevention to treatment, we've got your health journey covered.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search health topics, conditions, treatments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-deep-teal shadow-lg"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {healthStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-deep-teal/10 rounded-2xl flex items-center justify-center group-hover:bg-deep-teal/20 transition-colors duration-300">
                      <stat.icon className="w-8 h-8 text-deep-teal" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12 p-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <TabsTrigger value="articles" className="rounded-xl py-3 text-base font-semibold data-[state=active]:bg-deep-teal data-[state=active]:text-white">
                  <BookText className="w-5 h-5 mr-2" />
                  Articles
                </TabsTrigger>
                <TabsTrigger value="categories" className="rounded-xl py-3 text-base font-semibold data-[state=active]:bg-deep-teal data-[state=active]:text-white">
                  <Tag className="w-5 h-5 mr-2" />
                  Categories
                </TabsTrigger>
                <TabsTrigger value="tips" className="rounded-xl py-3 text-base font-semibold data-[state=active]:bg-deep-teal data-[state=active]:text-white">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Daily Tips
                </TabsTrigger>
                <TabsTrigger value="resources" className="rounded-xl py-3 text-base font-semibold data-[state=active]:bg-deep-teal data-[state=active]:text-white">
                  <Download className="w-5 h-5 mr-2" />
                  Resources
                </TabsTrigger>
              </TabsList>

              {/* Articles Tab */}
              <TabsContent value="articles" className="space-y-12">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {healthCategories.map((category) => (
                    <Button
                      key={category.name}
                      variant={selectedCategory === category.name ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`rounded-full px-6 py-2 transition-all duration-300 ${
                        selectedCategory === category.name 
                          ? 'bg-deep-teal text-white shadow-lg' 
                          : 'border-gray-300 text-gray-700 hover:border-deep-teal hover:text-deep-teal'
                      }`}
                    >
                      <category.icon className="w-4 h-4 mr-2" />
                      {category.name}
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {category.count}
                      </Badge>
                    </Button>
                  ))}
                </div>

                {/* Featured Articles */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {filteredArticles.map((article) => (
                    <Card key={article.id} className="shadow-xl rounded-3xl flex flex-col overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                      {article.featured && (
                        <div className="absolute top-6 left-6 z-10">
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-3 py-1">
                            <Award className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}
                      
                      <Link to={`/health-hub/${article.id}`} className="block overflow-hidden">
                        <img 
                          src={article.imageUrl} 
                          alt={article.title} 
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </Link>
                      
                      <CardHeader className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="secondary" className="text-xs font-semibold text-deep-teal bg-deep-teal/10">
                            {article.category}
                          </Badge>
                          <div className="flex items-center text-xs text-gray-500">
                            <Star className="w-3 h-3 mr-1 text-yellow-500 fill-current" />
                            {article.rating}
                          </div>
                        </div>
                        
                        <CardTitle className="text-2xl font-display text-gray-900 hover:text-deep-teal transition-colors duration-200 leading-tight mb-3">
                          <Link to={`/health-hub/${article.id}`}>{article.title}</Link>
                        </CardTitle>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs text-gray-600 border-gray-300">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-8 pt-0 flex-grow">
                        <p className="text-gray-600 leading-relaxed text-sm mb-6">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {article.readTime}
                            </span>
                            <span className="flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              {article.views}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      
                      <CardFooter className="p-8 pt-0 flex flex-col space-y-4">
                        <div className="flex items-center justify-between w-full text-xs text-gray-500">
                          <div className="flex items-center">
                            <UserCircle className="w-4 h-4 mr-2 text-deep-teal" />
                            <span className="font-medium">{article.author}</span>
                          </div>
                          <div className="flex items-center">
                            <CalendarDays className="w-4 h-4 mr-2 text-deep-teal" />
                            {article.date}
                          </div>
                        </div>
                        
                        <Button asChild className="w-full bg-deep-teal hover:bg-deep-teal/90 text-white rounded-xl transition-all duration-300 group-hover:shadow-lg">
                          <Link to={`/health-hub/${article.id}`}>
                            Read Full Article
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Categories Tab */}
              <TabsContent value="categories" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Health Categories</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Explore our comprehensive collection of health topics organized by specialty and condition.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {healthCategories.map((category, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden hover:-translate-y-1">
                      <CardContent className="p-8 text-center">
                        <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <category.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">{category.name}</h3>
                        <p className="text-gray-600 mb-4">{category.count} Articles</p>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            setSelectedCategory(category.name);
                            setActiveTab('articles');
                          }}
                          className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white transition-all duration-300"
                        >
                          Explore Topics
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Daily Tips Tab */}
              <TabsContent value="tips" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Daily Health Tips</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Simple, actionable health tips you can implement today for a healthier tomorrow.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {healthTips.map((tip, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm rounded-2xl p-6 hover:-translate-y-1">
                      <CardContent className="p-0">
                        <div className="text-4xl mb-4">{tip.icon}</div>
                        <Badge variant="secondary" className="mb-4 text-xs font-semibold text-deep-teal bg-deep-teal/10">
                          {tip.category}
                        </Badge>
                        <p className="text-gray-700 leading-relaxed">{tip.tip}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Resources Tab */}
              <TabsContent value="resources" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Health Resources</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Additional tools and resources to support your health journey.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Downloadable Guides */}
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm rounded-2xl hover:-translate-y-1">
                    <CardHeader className="p-8">
                      <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Download className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-display text-gray-900">Health Guides</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <p className="text-gray-600 mb-6">Download comprehensive health guides and checklists for various conditions and wellness topics.</p>
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl">
                        Browse Downloads
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Video Library */}
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm rounded-2xl hover:-translate-y-1">
                    <CardHeader className="p-8">
                      <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Video className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-display text-gray-900">Video Library</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <p className="text-gray-600 mb-6">Watch educational videos from our medical experts covering various health topics and procedures.</p>
                      <Button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-xl">
                        Watch Videos
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Podcasts */}
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm rounded-2xl hover:-translate-y-1">
                    <CardHeader className="p-8">
                      <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Headphones className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-display text-gray-900">Health Podcasts</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <p className="text-gray-600 mb-6">Listen to our weekly health podcast featuring expert interviews and latest medical research.</p>
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl">
                        Listen Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-deep-teal to-blue-600 text-white">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Stay Updated with Health News
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Get the latest health articles, tips, and expert advice delivered directly to your inbox. 
                Join over 50,000 readers who trust our health insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-6 py-4 text-lg rounded-xl border-0 bg-white text-gray-900 flex-1"
                />
                <Button size="lg" className="bg-white text-deep-teal hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-sm opacity-70 mt-4">
                No spam, unsubscribe at any time. Your privacy is important to us.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HealthHubPage;
