
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import AnimatedSection from '@/components/global/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle, Upload, Calendar, Users, Zap, Star, FileText, Headphones, CreditCard, Settings } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf', 'text/plain'];

const contactSchema = z.object({
  // Basic Info
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  
  // Inquiry Details
  department: z.string().min(1, 'Please select a department'),
  priority: z.string().min(1, 'Please select priority level'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  
  // Preferences
  preferredContact: z.string().min(1, 'Please select preferred contact method'),
  timezone: z.string().optional(),
  bestTimeToCall: z.string().optional(),
  
  // Additional
  files: z.any().optional(),
  newsletter: z.boolean().default(false),
  appointmentRequest: z.boolean().default(false),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [activeTab, setActiveTab] = useState('form');

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      department: '',
      priority: '',
      subject: '',
      message: '',
      preferredContact: '',
      timezone: '',
      bestTimeToCall: '',
      newsletter: false,
      appointmentRequest: false,
    },
  });

  const departments = [
    { value: 'sales', label: 'Sales & Partnerships', icon: Users, description: 'New customer inquiries and partnerships' },
    { value: 'support', label: 'Customer Support', icon: Headphones, description: 'Technical help and account assistance' },
    { value: 'billing', label: 'Billing & Payments', icon: CreditCard, description: 'Billing questions and payment issues' },
    { value: 'technical', label: 'Technical Support', icon: Settings, description: 'Technical issues and integrations' },
    { value: 'general', label: 'General Inquiry', icon: MessageSquare, description: 'General questions and feedback' },
  ];

  const priorityLevels = [
    { value: 'low', label: 'Low Priority', color: 'bg-gray-500', response: '3-5 business days' },
    { value: 'medium', label: 'Medium Priority', color: 'bg-blue-500', response: '24-48 hours' },
    { value: 'high', label: 'High Priority', color: 'bg-orange-500', response: '4-8 hours' },
    { value: 'urgent', label: 'Urgent', color: 'bg-red-500', response: 'Within 2 hours', premium: true },
  ];

  const contactMethods = [
    { value: 'email', label: 'Email', icon: Mail },
    { value: 'phone', label: 'Phone Call', icon: Phone },
    { value: 'both', label: 'Both Email & Phone', icon: MessageSquare },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => {
      if (file.size > MAX_FILE_SIZE) {
        toast({
          title: "File Too Large",
          description: `${file.name} is larger than 5MB`,
          variant: "destructive",
        });
        return false;
      }
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: `${file.name} is not a supported file type`,
          variant: "destructive",
        });
        return false;
      }
      return true;
    });
    
    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Premium contact form submitted:', { ...data, files: uploadedFiles });
      
      const selectedPriority = priorityLevels.find(p => p.value === data.priority);
      
      toast({
        title: "Message Sent Successfully! 🎉",
        description: `Thank you for contacting us. Expected response time: ${selectedPriority?.response || '24-48 hours'}`,
      });
      
      form.reset();
      setUploadedFiles([]);
      setCurrentStep(1);
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const getStepProgress = () => (currentStep / 3) * 100;

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      content: "support@wellnessportal.com",
      description: "Response within 24 hours",
      href: "mailto:support@wellnessportal.com",
    },
    {
      icon: Phone,
      title: "Priority Hotline",
      content: "(555) 123-4567",
      description: "24/7 for premium members",
      href: "tel:+15551234567",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      content: "Available Now",
      description: "Instant support online",
      href: null,
    },
    {
      icon: Calendar,
      title: "Book Consultation",
      content: "Schedule Meeting",
      description: "30-min strategy session",
      href: null,
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Priority Support",
      description: "Skip the queue with premium priority handling"
    },
    {
      icon: FileText,
      title: "Document Upload",
      description: "Share files, images, and documents securely"
    },
    {
      icon: Calendar,
      title: "Direct Scheduling",
      description: "Book appointments directly from your inquiry"
    },
    {
      icon: Star,
      title: "Dedicated Account Manager",
      description: "Personal support for enterprise customers"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto section-padding">
        <AnimatedSection>
          <header className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-deep-teal/10 rounded-full text-deep-teal text-sm font-medium mb-6">
              <Star size={16} className="mr-2" />
              Premium Contact Experience
            </div>
            <h1 className="text-5xl md:text-7xl font-display text-charcoal mb-6 leading-tight">
              Get <span className="gradient-text">Premium</span> Support
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience our premium contact system with priority routing, file uploads, 
              and dedicated support channels designed for your success.
            </p>
          </header>
        </AnimatedSection>

        {/* Premium Features Grid */}
        <AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-deep-teal/10 rounded-xl mb-4">
                  <feature.icon size={24} className="text-deep-teal" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Premium Contact Form */}
          <AnimatedSection className="lg:col-span-2">
            <Card className="shadow-2xl rounded-3xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-3xl font-display text-deep-teal flex items-center">
                    <Send size={32} className="mr-3" />
                    Premium Contact Form
                  </CardTitle>
                  <Badge variant="secondary" className="bg-deep-teal/10 text-deep-teal">
                    Step {currentStep} of 3
                  </Badge>
                </div>
                <Progress value={getStepProgress()} className="mt-4" />
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="form">Contact Form</TabsTrigger>
                    <TabsTrigger value="chat">Live Chat</TabsTrigger>
                    <TabsTrigger value="schedule">Schedule Call</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="form">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {currentStep === 1 && (
                          <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-charcoal mb-4">Basic Information</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-charcoal font-medium">Full Name *</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Enter your full name"
                                        className="h-12 rounded-xl border-gray-200 focus:border-deep-teal transition-colors"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-charcoal font-medium">Email Address *</FormLabel>
                                    <FormControl>
                                      <Input
                                        type="email"
                                        placeholder="your.email@example.com"
                                        className="h-12 rounded-xl border-gray-200 focus:border-deep-teal transition-colors"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                              <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-charcoal font-medium">Phone Number</FormLabel>
                                    <FormControl>
                                      <Input
                                        type="tel"
                                        placeholder="(555) 123-4567"
                                        className="h-12 rounded-xl border-gray-200 focus:border-deep-teal transition-colors"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-charcoal font-medium">Company/Organization</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Your company name"
                                        className="h-12 rounded-xl border-gray-200 focus:border-deep-teal transition-colors"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <Button type="button" onClick={nextStep} className="w-full btn-primary text-lg py-4 h-auto">
                              Continue to Inquiry Details
                              <Send size={20} className="ml-2" />
                            </Button>
                          </div>
                        )}

                        {currentStep === 2 && (
                          <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-charcoal mb-4">Inquiry Details</h3>
                            
                            <FormField
                              control={form.control}
                              name="department"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-charcoal font-medium">Department *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:border-deep-teal">
                                        <SelectValue placeholder="Select department" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {departments.map((dept) => (
                                        <SelectItem key={dept.value} value={dept.value}>
                                          <div className="flex items-center space-x-3">
                                            <dept.icon size={16} />
                                            <div>
                                              <div className="font-medium">{dept.label}</div>
                                              <div className="text-sm text-muted-foreground">{dept.description}</div>
                                            </div>
                                          </div>
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="priority"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-charcoal font-medium">Priority Level *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:border-deep-teal">
                                        <SelectValue placeholder="Select priority level" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {priorityLevels.map((priority) => (
                                        <SelectItem key={priority.value} value={priority.value}>
                                          <div className="flex items-center space-x-3">
                                            <div className={`w-3 h-3 rounded-full ${priority.color}`} />
                                            <div>
                                              <div className="flex items-center space-x-2">
                                                <span className="font-medium">{priority.label}</span>
                                                {priority.premium && <Badge variant="secondary" className="text-xs">Premium</Badge>}
                                              </div>
                                              <div className="text-sm text-muted-foreground">Response: {priority.response}</div>
                                            </div>
                                          </div>
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="subject"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-charcoal font-medium">Subject *</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Brief description of your inquiry"
                                      className="h-12 rounded-xl border-gray-200 focus:border-deep-teal transition-colors"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="message"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-charcoal font-medium">Detailed Message *</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      placeholder="Please provide detailed information about your inquiry..."
                                      className="min-h-[120px] rounded-xl border-gray-200 focus:border-deep-teal transition-colors resize-none"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="flex space-x-4">
                              <Button type="button" onClick={prevStep} variant="outline" className="flex-1">
                                Back
                              </Button>
                              <Button type="button" onClick={nextStep} className="flex-1 btn-primary">
                                Continue to Preferences
                              </Button>
                            </div>
                          </div>
                        )}

                        {currentStep === 3 && (
                          <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-charcoal mb-4">Preferences & Attachments</h3>
                            
                            <FormField
                              control={form.control}
                              name="preferredContact"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-charcoal font-medium">Preferred Contact Method *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:border-deep-teal">
                                        <SelectValue placeholder="How would you like us to contact you?" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {contactMethods.map((method) => (
                                        <SelectItem key={method.value} value={method.value}>
                                          <div className="flex items-center space-x-2">
                                            <method.icon size={16} />
                                            <span>{method.label}</span>
                                          </div>
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="grid md:grid-cols-2 gap-6">
                              <FormField
                                control={form.control}
                                name="timezone"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-charcoal font-medium">Timezone</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="e.g., EST, PST, GMT"
                                        className="h-12 rounded-xl border-gray-200 focus:border-deep-teal transition-colors"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="bestTimeToCall"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-charcoal font-medium">Best Time to Call</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="e.g., 9 AM - 5 PM"
                                        className="h-12 rounded-xl border-gray-200 focus:border-deep-teal transition-colors"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            {/* File Upload */}
                            <div className="space-y-4">
                              <FormLabel className="text-charcoal font-medium">Attachments</FormLabel>
                              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
                                <input
                                  type="file"
                                  multiple
                                  accept=".jpg,.jpeg,.png,.pdf,.txt"
                                  onChange={handleFileUpload}
                                  className="hidden"
                                  id="file-upload"
                                />
                                <label htmlFor="file-upload" className="cursor-pointer">
                                  <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                                  <p className="text-sm text-gray-600">
                                    Click to upload files or drag and drop
                                  </p>
                                  <p className="text-xs text-gray-400 mt-1">
                                    Max 5MB • JPG, PNG, PDF, TXT
                                  </p>
                                </label>
                              </div>
                              
                              {uploadedFiles.length > 0 && (
                                <div className="space-y-2">
                                  {uploadedFiles.map((file, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                      <div className="flex items-center space-x-2">
                                        <FileText size={16} className="text-gray-400" />
                                        <span className="text-sm">{file.name}</span>
                                        <span className="text-xs text-gray-400">
                                          ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                        </span>
                                      </div>
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removeFile(index)}
                                      >
                                        ×
                                      </Button>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Additional Options */}
                            <div className="space-y-4 pt-4 border-t border-gray-200">
                              <div className="flex items-center space-x-2">
                                <Checkbox 
                                  id="newsletter" 
                                  {...form.register('newsletter')}
                                />
                                <label htmlFor="newsletter" className="text-sm text-charcoal">
                                  Subscribe to our newsletter for health tips and updates
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox 
                                  id="appointment" 
                                  {...form.register('appointmentRequest')}
                                />
                                <label htmlFor="appointment" className="text-sm text-charcoal">
                                  I would like to schedule an appointment
                                </label>
                              </div>
                            </div>

                            <div className="flex space-x-4">
                              <Button type="button" onClick={prevStep} variant="outline" className="flex-1">
                                Back
                              </Button>
                              <Button
                                type="submit"
                                disabled={form.formState.isSubmitting}
                                className="flex-1 btn-primary text-lg py-4 h-auto group"
                              >
                                {form.formState.isSubmitting ? (
                                  <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                                    Sending Message...
                                  </>
                                ) : (
                                  <>
                                    Send Premium Message
                                    <Send size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                  </>
                                )}
                              </Button>
                            </div>
                          </div>
                        )}
                      </form>
                    </Form>
                  </TabsContent>
                  
                  <TabsContent value="chat" className="text-center py-12">
                    <MessageSquare size={48} className="mx-auto text-deep-teal mb-4" />
                    <h3 className="text-xl font-semibold text-charcoal mb-2">Live Chat Available</h3>
                    <p className="text-muted-foreground mb-6">
                      Connect with our support team instantly for immediate assistance.
                    </p>
                    <Button className="btn-primary">
                      Start Live Chat
                      <MessageSquare size={16} className="ml-2" />
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="schedule" className="text-center py-12">
                    <Calendar size={48} className="mx-auto text-deep-teal mb-4" />
                    <h3 className="text-xl font-semibold text-charcoal mb-2">Schedule a Call</h3>
                    <p className="text-muted-foreground mb-6">
                      Book a personalized consultation with our experts.
                    </p>
                    <Button className="btn-primary">
                      Book Consultation
                      <Calendar size={16} className="ml-2" />
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Premium Contact Information */}
          <AnimatedSection>
            <div className="space-y-6">
              <Card className="shadow-xl rounded-3xl border-0 bg-gradient-to-br from-deep-teal to-blue-600 text-white overflow-hidden">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-display text-white flex items-center">
                    <Star size={24} className="mr-2" />
                    Premium Support Channels
                  </CardTitle>
                  <p className="text-blue-100 mt-2">
                    Multiple ways to reach our expert team
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-0 space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="group">
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="flex items-start space-x-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                        >
                          <div className="flex-shrink-0">
                            <info.icon size={24} className="text-white group-hover:scale-110 transition-transform" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                            <p className="text-blue-100 font-medium">{info.content}</p>
                            <p className="text-blue-200 text-sm">{info.description}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/10 cursor-pointer hover:bg-white/20 transition-all duration-300">
                          <div className="flex-shrink-0">
                            <info.icon size={24} className="text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                            <p className="text-blue-100 font-medium">{info.content}</p>
                            <p className="text-blue-200 text-sm">{info.description}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Premium Benefits */}
              <Card className="shadow-lg rounded-2xl border border-gray-200">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Zap size={32} className="text-deep-teal mx-auto mb-3" />
                    <h3 className="font-semibold text-charcoal mb-2">Premium Benefits</h3>
                    <ul className="text-sm text-muted-foreground space-y-2 text-left">
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Priority response within 2 hours</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Dedicated account manager</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>File upload support</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>24/7 live chat access</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full mt-4">
                      Upgrade to Premium
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>

        {/* Premium CTA Section */}
        <AnimatedSection>
          <div className="mt-20 text-center">
            <Card className="max-w-4xl mx-auto shadow-xl rounded-3xl border-0 bg-gradient-to-r from-gray-50 to-blue-50">
              <CardContent className="p-12">
                <Star size={48} className="mx-auto text-deep-teal mb-4" />
                <h2 className="text-3xl font-display text-charcoal mb-4">
                  Experience Premium Healthcare
                </h2>
                <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                  Join thousands of satisfied customers who trust our premium healthcare platform 
                  for their wellness journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="btn-primary">
                    Start Premium Trial
                  </Button>
                  <Button size="lg" variant="outline">
                    View All Services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactPage;
