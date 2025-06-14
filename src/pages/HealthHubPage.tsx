
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
  Lungs,
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

const featuredArticles = [
  {
    id: "1",
    title: 'The Complete Guide to Heart Health: Prevention, Treatment, and Lifestyle Changes',
    category: 'Heart Health',
    author: 'Dr. Emily Carter, MD, Cardiologist',
    date: 'June 10, 2025',
    readTime: '12 min read',
    views: '15,420',
    rating: 4.9,
    excerpt: 'Comprehensive guide covering everything you need to know about maintaining optimal cardiovascular health, from diet and exercise to medical interventions and lifestyle modifications.',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    featured: true,
    tags: ['Prevention', 'Diet', 'Exercise', 'Medical Care'],
    content: `Heart disease remains the leading cause of death globally, but the good news is that most heart conditions are preventable through proper lifestyle choices and medical care. This comprehensive guide will walk you through everything you need to know about maintaining optimal cardiovascular health.

## Understanding Your Heart

Your heart is a muscular organ about the size of your fist that pumps blood throughout your body. It beats approximately 100,000 times per day, pumping about 2,000 gallons of blood. Understanding how your heart works is the first step in taking care of it.

The heart has four chambers: two atria (upper chambers) and two ventricles (lower chambers). The right side pumps blood to the lungs, while the left side pumps oxygenated blood to the rest of your body.

## Risk Factors for Heart Disease

### Controllable Risk Factors
- High blood pressure (hypertension)
- High cholesterol levels
- Smoking and tobacco use
- Diabetes
- Obesity
- Physical inactivity
- Poor diet
- Excessive alcohol consumption
- Chronic stress

### Non-Controllable Risk Factors
- Age (risk increases with age)
- Gender (men have higher risk at younger ages)
- Family history and genetics
- Race and ethnicity

## The Heart-Healthy Diet

### Foods to Include Daily
- **Fatty fish** (salmon, mackerel, sardines) - 2-3 servings per week
- **Leafy greens** (spinach, kale, arugula) - at least 1 cup daily
- **Whole grains** (oats, quinoa, brown rice) - 3-4 servings daily
- **Nuts and seeds** - 1 ounce daily
- **Berries** (blueberries, strawberries, raspberries) - 1 cup daily
- **Avocados** - rich in monounsaturated fats
- **Olive oil** - primary cooking oil
- **Legumes** (beans, lentils, chickpeas) - 3-4 servings weekly

### Foods to Limit or Avoid
- Processed meats (bacon, sausages, deli meats)
- Refined sugars and sweetened beverages
- Trans fats and partially hydrogenated oils
- Excessive sodium (aim for less than 2,300mg daily)
- Refined carbohydrates and white flour products

## Exercise and Physical Activity

Regular physical activity is one of the most effective ways to prevent heart disease and improve overall cardiovascular health.

### Recommended Exercise Guidelines
- **Aerobic Activity**: 150 minutes of moderate-intensity or 75 minutes of vigorous-intensity aerobic activity weekly
- **Strength Training**: Muscle-strengthening activities 2 or more days per week
- **Flexibility**: Stretching exercises 2-3 times per week

### Types of Heart-Healthy Exercises
1. **Walking**: Start with 10-15 minutes daily, gradually increase
2. **Swimming**: Excellent low-impact full-body workout
3. **Cycling**: Great for cardiovascular fitness
4. **Dancing**: Fun way to get your heart rate up
5. **Yoga**: Combines physical activity with stress reduction

## Managing Stress for Heart Health

Chronic stress can contribute to heart disease by raising blood pressure, promoting inflammation, and leading to unhealthy coping behaviors.

### Stress Management Techniques
- **Meditation and Mindfulness**: 10-20 minutes daily
- **Deep Breathing Exercises**: Practice throughout the day
- **Regular Sleep**: 7-9 hours nightly
- **Social Connections**: Maintain relationships with family and friends
- **Hobbies**: Engage in activities you enjoy
- **Professional Help**: Consider counseling when needed

## Medical Care and Monitoring

### Regular Health Screenings
- **Blood Pressure**: Check at least annually
- **Cholesterol**: Test every 4-6 years (more frequently if at risk)
- **Blood Sugar**: Test every 3 years starting at age 45
- **Body Weight and BMI**: Monitor regularly
- **Electrocardiogram (ECG)**: As recommended by your doctor

### Warning Signs to Watch For
- Chest pain or discomfort
- Shortness of breath
- Pain in arms, back, neck, jaw, or stomach
- Sudden dizziness or fainting
- Rapid or irregular heartbeat
- Swelling in legs, ankles, or feet

## Heart Disease Prevention by Age Group

### 20s and 30s
- Establish healthy eating habits
- Begin regular exercise routine
- Avoid smoking and excessive drinking
- Manage stress effectively
- Get baseline health measurements

### 40s and 50s
- Increase screening frequency
- Pay attention to changing risk factors
- Consider medication if needed
- Focus on maintaining healthy weight
- Monitor blood pressure regularly

### 60s and Beyond
- Work closely with healthcare providers
- Adapt exercise routines as needed
- Monitor for medication interactions
- Focus on fall prevention
- Maintain social connections

## Conclusion

Heart health is a lifelong journey that requires consistent attention to diet, exercise, stress management, and medical care. By making informed choices and working with healthcare professionals, you can significantly reduce your risk of heart disease and enjoy a longer, healthier life.

Remember, small changes can make a big difference. Start with one or two modifications and gradually build upon them. Your heart will thank you for the investment in your health.`
  },
  {
    id: "2",
    title: 'Mental Health and Wellness: A Comprehensive Guide to Emotional Well-being',
    category: 'Mental Wellness',
    author: 'Dr. Sarah Adams, PhD, Clinical Psychologist',
    date: 'June 08, 2025',
    readTime: '15 min read',
    views: '12,890',
    rating: 4.8,
    excerpt: 'Understanding mental health, recognizing signs of common conditions, and learning practical strategies for maintaining emotional wellness and resilience.',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    featured: true,
    tags: ['Mental Health', 'Wellness', 'Therapy', 'Self-Care'],
    content: `Mental health is just as important as physical health, yet it's often overlooked or stigmatized. This comprehensive guide will help you understand mental wellness, recognize common conditions, and develop strategies for maintaining emotional well-being.`
  },
  {
    id: "3",
    title: 'Nutrition Fundamentals: Building a Sustainable Healthy Diet',
    category: 'Nutrition',
    author: 'Johnathan Lee, RD, MS',
    date: 'June 05, 2025',
    readTime: '10 min read',
    views: '18,750',
    rating: 4.7,
    excerpt: 'Learn the science-backed fundamentals of nutrition, meal planning strategies, and how to create a sustainable eating pattern that supports long-term health.',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    featured: true,
    tags: ['Diet', 'Meal Planning', 'Weight Management', 'Healthy Eating'],
    content: `Proper nutrition is the foundation of good health, yet navigating the world of dietary advice can be overwhelming. This guide breaks down the essentials of healthy eating into practical, actionable steps.`
  },
  {
    id: "4",
    title: 'Exercise and Fitness: Your Complete Guide to Physical Activity',
    category: 'Fitness & Exercise',
    author: 'Dr. Michael Rodriguez, Exercise Physiologist',
    date: 'June 03, 2025',
    readTime: '14 min read',
    views: '22,340',
    rating: 4.9,
    excerpt: 'Comprehensive guide to exercise science, workout planning, injury prevention, and creating a fitness routine that fits your lifestyle and goals.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    featured: false,
    tags: ['Exercise', 'Fitness', 'Workout Plans', 'Health'],
    content: `Regular physical activity is one of the most important things you can do for your health. This comprehensive guide covers everything from exercise science to practical workout planning.`
  },
  {
    id: "5",
    title: 'Preventive Healthcare: Your Roadmap to Staying Healthy',
    category: 'Preventive Care',
    author: 'Dr. Lisa Chen, Family Medicine',
    date: 'May 30, 2025',
    readTime: '11 min read',
    views: '16,220',
    rating: 4.6,
    excerpt: 'Essential guide to preventive healthcare, including screening schedules, vaccinations, and lifestyle interventions that can prevent disease before it starts.',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    featured: false,
    tags: ['Prevention', 'Screenings', 'Vaccinations', 'Health Maintenance'],
    content: `Prevention is always better than treatment. This guide outlines the key preventive measures you should take at every stage of life to maintain optimal health.`
  },
  {
    id: "6",
    title: 'Understanding Medications: A Patient\'s Guide to Safe Drug Use',
    category: 'Medications',
    author: 'Dr. James Wilson, PharmD',
    date: 'May 28, 2025',
    readTime: '9 min read',
    views: '13,450',
    rating: 4.5,
    excerpt: 'Learn about medication safety, drug interactions, proper usage, and how to work effectively with your healthcare team to manage your medications.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    featured: false,
    tags: ['Medications', 'Drug Safety', 'Pharmacy', 'Healthcare'],
    content: `Understanding your medications is crucial for safe and effective treatment. This guide covers everything you need to know about prescription and over-the-counter drugs.`
  }
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

  const filteredArticles = featuredArticles.filter(article => {
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
