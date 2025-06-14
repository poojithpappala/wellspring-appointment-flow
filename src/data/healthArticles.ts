
export interface HealthArticle {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  views: string;
  rating: number;
  excerpt: string;
  imageUrl: string;
  featured: boolean;
  tags: string[];
  content: string;
}

export const healthArticles: HealthArticle[] = [
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
    content: `Mental health is just as important as physical health, yet it's often overlooked or stigmatized. This comprehensive guide will help you understand mental wellness, recognize common conditions, and develop strategies for maintaining emotional well-being.

## Understanding Mental Health

Mental health encompasses our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.

### Components of Mental Health
- **Emotional Well-being**: The ability to manage emotions effectively
- **Psychological Well-being**: Cognitive functioning and thought patterns
- **Social Well-being**: Healthy relationships and social connections

## Common Mental Health Conditions

### Depression
Depression is more than just feeling sad or going through a rough patch. It's a serious mental health condition that requires understanding and medical care.

**Symptoms:**
- Persistent sad, anxious, or empty mood
- Loss of interest in activities once enjoyed
- Fatigue and decreased energy
- Difficulty concentrating
- Changes in appetite or weight
- Sleep disturbances
- Feelings of worthlessness or guilt

### Anxiety Disorders
Anxiety disorders are the most common mental health disorders, affecting millions of people worldwide.

**Types of Anxiety Disorders:**
- Generalized Anxiety Disorder (GAD)
- Social Anxiety Disorder
- Panic Disorder
- Specific Phobias
- Post-Traumatic Stress Disorder (PTSD)

**Common Symptoms:**
- Excessive worry or fear
- Restlessness or feeling on edge
- Fatigue
- Difficulty concentrating
- Muscle tension
- Sleep problems

### Bipolar Disorder
Bipolar disorder causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).

**Manic Episodes:**
- Elevated or irritable mood
- Increased energy and activity
- Decreased need for sleep
- Racing thoughts
- Poor judgment

**Depressive Episodes:**
- Similar symptoms to major depression
- Feelings of hopelessness
- Low energy
- Difficulty making decisions

## Building Mental Resilience

### Stress Management Techniques

**1. Mindfulness and Meditation**
- Practice mindfulness daily for 10-20 minutes
- Use guided meditation apps
- Focus on present-moment awareness
- Practice deep breathing exercises

**2. Cognitive Behavioral Techniques**
- Identify negative thought patterns
- Challenge irrational thoughts
- Replace negative thoughts with realistic ones
- Practice gratitude daily

**3. Physical Activity**
- Regular exercise releases endorphins
- Aim for 30 minutes of activity daily
- Choose activities you enjoy
- Exercise outdoors when possible

### Building Support Networks

**Social Connections:**
- Maintain relationships with family and friends
- Join clubs or groups with shared interests
- Volunteer in your community
- Seek professional support when needed

**Communication Skills:**
- Practice active listening
- Express feelings openly and honestly
- Set healthy boundaries
- Ask for help when needed

### Self-Care Strategies

**Daily Self-Care:**
- Maintain a regular sleep schedule
- Eat nutritious meals
- Practice good hygiene
- Engage in hobbies you enjoy

**Weekly Self-Care:**
- Schedule time for relaxation
- Connect with friends or family
- Try new activities
- Spend time in nature

**Monthly Self-Care:**
- Evaluate your mental health
- Set new goals
- Plan enjoyable activities
- Consider professional check-ins

## Professional Help and Treatment Options

### When to Seek Help
- Symptoms persist for more than two weeks
- Daily functioning is impaired
- Thoughts of self-harm or suicide
- Substance abuse issues
- Relationship problems

### Types of Mental Health Professionals

**Psychiatrists:**
- Medical doctors who can prescribe medication
- Specialize in mental health disorders
- Can provide therapy and medication management

**Psychologists:**
- Doctoral-level professionals
- Provide therapy and psychological testing
- Cannot prescribe medication (in most states)

**Licensed Clinical Social Workers (LCSW):**
- Master's level professionals
- Provide therapy and case management
- Focus on social and environmental factors

**Licensed Professional Counselors (LPC):**
- Master's level professionals
- Provide therapy for various mental health issues
- Specialize in specific populations or conditions

### Treatment Approaches

**Psychotherapy (Talk Therapy):**
- Cognitive Behavioral Therapy (CBT)
- Dialectical Behavior Therapy (DBT)
- Psychodynamic Therapy
- Humanistic Therapy
- Family Therapy

**Medication:**
- Antidepressants
- Anti-anxiety medications
- Mood stabilizers
- Antipsychotics

**Alternative Treatments:**
- Art therapy
- Music therapy
- Pet therapy
- Yoga and meditation
- Acupuncture

## Mental Health in Different Life Stages

### Children and Adolescents
- Early intervention is crucial
- School-based mental health programs
- Family involvement in treatment
- Age-appropriate therapy techniques

### Adults
- Work-life balance challenges
- Relationship issues
- Parenting stress
- Career transitions

### Older Adults
- Isolation and loneliness
- Physical health changes
- Grief and loss
- Cognitive changes

## Creating a Mental Health Plan

### Daily Practices
1. Morning routine with positive affirmations
2. Regular meals and hydration
3. Physical activity
4. Mindfulness or meditation
5. Connection with others
6. Evening relaxation routine

### Weekly Practices
1. Schedule enjoyable activities
2. Review and adjust goals
3. Connect with support network
4. Practice new coping skills
5. Evaluate mental health status

### Monthly Practices
1. Professional check-ins if needed
2. Review and update mental health plan
3. Set new goals and challenges
4. Celebrate progress and achievements

## Conclusion

Mental health is a journey, not a destination. It requires ongoing attention, care, and sometimes professional help. By understanding mental health, building resilience, and seeking appropriate support, you can maintain emotional well-being and live a fulfilling life.

Remember, seeking help for mental health is a sign of strength, not weakness. If you're struggling, reach out to a mental health professional, trusted friend, or family member. You don't have to face mental health challenges alone.`
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
    content: `Proper nutrition is the foundation of good health, yet navigating the world of dietary advice can be overwhelming. This guide breaks down the essentials of healthy eating into practical, actionable steps that you can implement in your daily life.

## Understanding Macronutrients

### Carbohydrates: Your Body's Primary Fuel

Carbohydrates are your body's preferred source of energy, especially for your brain and muscles during exercise.

**Types of Carbohydrates:**

**Simple Carbohydrates:**
- Found in fruits, milk, and added sugars
- Quickly absorbed for immediate energy
- Best consumed around physical activity

**Complex Carbohydrates:**
- Found in whole grains, vegetables, and legumes
- Provide sustained energy release
- Rich in fiber, vitamins, and minerals

**Recommended Sources:**
- Whole grains (oats, quinoa, brown rice)
- Fruits (especially berries and apples)
- Vegetables (sweet potatoes, leafy greens)
- Legumes (beans, lentils, chickpeas)

### Proteins: Building Blocks of Life

Protein is essential for building and repairing tissues, making enzymes and hormones, and supporting immune function.

**Complete Proteins** (contain all essential amino acids):
- Animal sources: meat, fish, poultry, eggs, dairy
- Plant sources: quinoa, soy products, chia seeds

**Incomplete Proteins** (missing one or more essential amino acids):
- Most plant sources: beans, nuts, grains
- Can be combined to form complete proteins

**Daily Protein Needs:**
- Sedentary adults: 0.8g per kg of body weight
- Active individuals: 1.2-2.0g per kg of body weight
- Athletes: 1.6-2.2g per kg of body weight

### Fats: Essential for Health

Dietary fats are crucial for hormone production, nutrient absorption, and cell membrane health.

**Types of Fats:**

**Saturated Fats:**
- Found in animal products and some plant oils
- Limit to less than 10% of daily calories
- Sources: butter, cheese, red meat, coconut oil

**Unsaturated Fats:**
- Monounsaturated: olive oil, avocados, nuts
- Polyunsaturated: fatty fish, walnuts, flaxseeds
- Should make up the majority of fat intake

**Trans Fats:**
- Artificially created fats
- Avoid completely
- Found in some processed foods

## Micronutrients: The Mighty Vitamins and Minerals

### Essential Vitamins

**Water-Soluble Vitamins** (B-complex and C):
- Need regular replenishment
- Found in fruits, vegetables, and whole grains
- Support energy metabolism and immune function

**Fat-Soluble Vitamins** (A, D, E, K):
- Stored in body fat
- Found in fatty foods and fortified products
- Support vision, bone health, and blood clotting

### Critical Minerals

**Calcium:**
- Essential for bone health
- Sources: dairy, leafy greens, fortified foods
- Daily need: 1000-1200mg

**Iron:**
- Crucial for oxygen transport
- Sources: red meat, beans, fortified cereals
- Daily need: 8-18mg

**Potassium:**
- Supports heart and muscle function
- Sources: bananas, potatoes, beans
- Daily need: 3500-4700mg

**Magnesium:**
- Involved in 300+ enzymatic reactions
- Sources: nuts, seeds, whole grains
- Daily need: 300-400mg

## Hydration: The Foundation of Health

### Water Requirements
- General rule: 8 glasses (64 oz) per day
- Increase with activity, heat, or illness
- Monitor urine color as hydration indicator

### Hydration Sources
- Plain water (best choice)
- Herbal teas
- Milk and plant-based milk alternatives
- Fruits and vegetables (high water content)

### Signs of Dehydration
- Dark yellow urine
- Fatigue and headache
- Dry mouth and skin
- Decreased mental performance

## Meal Planning and Preparation

### The Balanced Plate Method

**Half Your Plate: Vegetables and Fruits**
- Aim for variety in colors
- Include both raw and cooked options
- Choose whole fruits over juices

**Quarter of Your Plate: Lean Proteins**
- Vary protein sources throughout the week
- Include both animal and plant proteins
- Consider preparation methods (grilled, baked, steamed)

**Quarter of Your Plate: Whole Grains**
- Choose minimally processed options
- Include quinoa, brown rice, whole wheat pasta
- Limit refined grains and added sugars

### Weekly Meal Planning Strategy

**Sunday Planning Session:**
1. Review your weekly schedule
2. Choose 3-4 main recipes
3. Create a grocery list
4. Plan for leftovers and batch cooking

**Batch Cooking Tips:**
- Prepare grains and proteins in bulk
- Wash and chop vegetables in advance
- Make large batches of soups and stews
- Prepare healthy snacks in portion-controlled containers

### Smart Grocery Shopping

**Shopping List Organization:**
- Organize by store sections
- Stick to your list to avoid impulse purchases
- Shop the perimeter first (fresh foods)
- Read nutrition labels carefully

**Budget-Friendly Tips:**
- Buy seasonal produce
- Purchase frozen fruits and vegetables
- Buy grains and legumes in bulk
- Choose less expensive protein sources

## Special Dietary Considerations

### Weight Management

**Creating a Caloric Deficit for Weight Loss:**
- Reduce daily intake by 300-500 calories
- Focus on nutrient-dense, low-calorie foods
- Increase physical activity
- Monitor portion sizes

**Healthy Weight Gain:**
- Increase caloric intake with nutrient-dense foods
- Add healthy fats and proteins
- Eat more frequent meals
- Combine with strength training

### Managing Chronic Conditions

**Diabetes Management:**
- Focus on complex carbohydrates
- Monitor portion sizes
- Spread carbohydrate intake throughout the day
- Include protein with each meal

**Heart Disease Prevention:**
- Limit sodium intake
- Choose heart-healthy fats
- Increase fiber intake
- Limit processed foods

**High Blood Pressure:**
- Follow the DASH diet pattern
- Reduce sodium intake
- Increase potassium-rich foods
- Maintain healthy weight

## Sustainable Eating Habits

### Building Long-Term Success

**Start Small:**
- Make one change at a time
- Focus on adding healthy foods rather than restricting
- Allow flexibility for special occasions
- Celebrate small victories

**Mindful Eating Practices:**
- Eat without distractions
- Chew slowly and thoroughly
- Pay attention to hunger and fullness cues
- Appreciate the flavors and textures of food

### Overcoming Common Challenges

**Time Constraints:**
- Utilize meal prep strategies
- Keep healthy convenience foods on hand
- Use kitchen appliances like slow cookers
- Plan simple, quick meals

**Budget Limitations:**
- Focus on affordable nutrient-dense foods
- Buy generic brands
- Use coupons and shop sales
- Grow your own herbs and vegetables

**Social Situations:**
- Plan ahead for restaurants and parties
- Bring healthy dishes to share
- Focus on portion control
- Don't let one meal derail your overall plan

## Conclusion

Good nutrition doesn't have to be complicated. By focusing on whole, minimally processed foods, maintaining proper hydration, and planning your meals, you can create a sustainable eating pattern that supports your health goals.

Remember, the best diet is one that you can maintain long-term. Make gradual changes, be patient with yourself, and seek support from qualified nutrition professionals when needed. Your body will thank you for the investment in your health through better nutrition.`
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
    content: `Regular physical activity is one of the most important things you can do for your health. This comprehensive guide covers everything from exercise science to practical workout planning, helping you create a sustainable fitness routine.

## Understanding Exercise Science

### The Four Pillars of Fitness

**1. Cardiovascular Endurance**
Your heart and lungs' ability to supply oxygen to working muscles during sustained physical activity.

**Benefits:**
- Improved heart health
- Better circulation
- Increased stamina
- Enhanced mood
- Better sleep quality

**Training Methods:**
- Steady-state cardio (30-60 minutes at moderate intensity)
- High-Intensity Interval Training (HIIT)
- Circuit training
- Sports and recreational activities

**2. Muscular Strength**
The maximum amount of force a muscle or muscle group can generate.

**Benefits:**
- Increased bone density
- Better posture
- Enhanced metabolism
- Injury prevention
- Improved daily function

**Training Principles:**
- Progressive overload
- Compound movements
- Adequate rest between sessions
- Proper form and technique

**3. Muscular Endurance**
The ability of muscles to perform repeated contractions over time.

**Training Methods:**
- Higher repetitions (12-20 reps)
- Lower weights
- Circuit training
- Bodyweight exercises
- Functional movements

**4. Flexibility and Mobility**
The range of motion available at joints and the quality of movement patterns.

**Benefits:**
- Reduced injury risk
- Better posture
- Enhanced performance
- Decreased muscle tension
- Improved quality of life

## Exercise Guidelines for Adults

### Aerobic Activity Recommendations

**Moderate-Intensity Exercise:**
- 150 minutes per week minimum
- Can be broken into 30-minute sessions, 5 days per week
- Examples: brisk walking, swimming, cycling

**Vigorous-Intensity Exercise:**
- 75 minutes per week minimum
- Can be broken into 25-minute sessions, 3 days per week
- Examples: running, high-intensity cycling, sports

**Benefits of Regular Aerobic Exercise:**
- Reduced risk of heart disease
- Lower blood pressure
- Improved cholesterol levels
- Better weight management
- Enhanced mental health

### Strength Training Guidelines

**Frequency:**
- 2-3 times per week for all major muscle groups
- Allow 48 hours rest between sessions for same muscle groups

**Major Muscle Groups:**
- Chest and shoulders
- Back and arms
- Core and abdominals
- Legs and glutes

**Progression Principles:**
- Start with bodyweight or light weights
- Gradually increase weight, reps, or sets
- Focus on proper form before adding weight
- Track progress to maintain motivation

### Flexibility and Mobility Work

**Static Stretching:**
- Hold stretches for 15-30 seconds
- Best performed after workouts when muscles are warm
- Focus on major muscle groups used during exercise

**Dynamic Stretching:**
- Moving stretches that prepare body for activity
- Perform before workouts as part of warm-up
- Mimics movements of upcoming activity

**Mobility Work:**
- Joint-specific movements
- Foam rolling and self-massage
- Yoga and tai chi
- Regular movement breaks throughout the day

## Creating Your Personal Fitness Plan

### Assessing Your Current Fitness Level

**Cardiovascular Assessment:**
- Resting heart rate (lower is generally better)
- Step test or walk/run test
- Recovery heart rate after exercise

**Strength Assessment:**
- Push-up test
- Plank hold test
- Basic movement patterns (squat, lunge)

**Flexibility Assessment:**
- Sit-and-reach test
- Shoulder mobility test
- Hip flexibility test

### Setting SMART Fitness Goals

**Specific:** Clear and well-defined
**Measurable:** Quantifiable progress markers
**Achievable:** Realistic for your current fitness level
**Relevant:** Important to your lifestyle and values
**Time-bound:** Set deadlines for accountability

**Example Goals:**
- "Walk 10,000 steps daily for 4 weeks"
- "Complete 3 strength training sessions per week for 2 months"
- "Improve 5K time by 2 minutes in 6 months"

### Weekly Workout Structure

**Beginner Program (3-4 days per week):**

**Day 1: Full Body Strength**
- Warm-up: 5-10 minutes light cardio
- Squats: 2 sets of 8-12 reps
- Push-ups: 2 sets of 5-10 reps
- Bent-over rows: 2 sets of 8-12 reps
- Plank: 2 sets of 15-30 seconds
- Cool-down: 5-10 minutes stretching

**Day 2: Cardio**
- 20-30 minutes moderate-intensity cardio
- Options: walking, cycling, swimming
- Include 5-minute warm-up and cool-down

**Day 3: Rest or Light Activity**
- Gentle yoga
- Easy walk
- Household activities

**Day 4: Full Body Strength**
- Similar to Day 1 with slight variations
- Lunges instead of squats
- Modified push-ups or wall push-ups
- Different plank variations

**Intermediate Program (4-5 days per week):**

**Day 1: Upper Body Strength**
- Push-ups or chest press: 3 sets of 8-15 reps
- Pull-ups or lat pulldown: 3 sets of 5-12 reps
- Shoulder press: 3 sets of 8-12 reps
- Arm exercises: 2 sets of 10-15 reps

**Day 2: Cardio + Core**
- 30-45 minutes moderate to vigorous cardio
- 10-15 minutes core strengthening

**Day 3: Lower Body Strength**
- Squats: 3 sets of 10-15 reps
- Lunges: 3 sets of 8-12 reps per leg
- Deadlifts: 3 sets of 8-12 reps
- Calf raises: 2 sets of 15-20 reps

**Day 4: Active Recovery**
- Yoga or gentle stretching
- Light walk or bike ride
- Foam rolling

**Day 5: Full Body Circuit**
- Combine cardio and strength exercises
- 30-45 minutes total
- Higher intensity, shorter rest periods

## Exercise Safety and Injury Prevention

### Proper Warm-Up Protocol

**Phase 1: General Warm-Up (5-10 minutes)**
- Light cardio to increase heart rate
- Joint mobility exercises
- Gradually increase intensity

**Phase 2: Specific Warm-Up (5-10 minutes)**
- Dynamic stretches
- Movement patterns similar to main workout
- Sport-specific drills if applicable

### Common Exercise Injuries and Prevention

**Lower Back Pain:**
- Strengthen core muscles
- Maintain proper posture
- Avoid sudden movements with heavy weights
- Stretch hip flexors and hamstrings regularly

**Knee Injuries:**
- Strengthen quadriceps and hamstrings
- Improve hip stability
- Use proper footwear
- Gradually increase activity intensity

**Shoulder Impingement:**
- Strengthen rotator cuff muscles
- Improve posture
- Avoid overhead activities if painful
- Include shoulder mobility work

### When to Rest and Recover

**Signs You Need Rest:**
- Persistent fatigue
- Decreased performance
- Mood changes or irritability
- Increased injury susceptibility
- Sleep disturbances

**Recovery Strategies:**
- Get 7-9 hours of quality sleep
- Stay hydrated
- Eat adequate protein
- Include rest days in your program
- Consider massage or foam rolling

## Nutrition for Exercise Performance

### Pre-Workout Nutrition

**Timing:** 1-3 hours before exercise
**Goals:** Provide energy and prevent hunger
**Recommendations:**
- Moderate carbohydrates
- Small amount of protein
- Low fat and fiber to prevent digestive issues
- Adequate hydration

**Example Pre-Workout Meals:**
- Banana with peanut butter
- Oatmeal with berries
- Greek yogurt with granola
- Toast with honey

### During Workout Nutrition

**For Workouts Under 60 Minutes:**
- Water is typically sufficient
- No additional nutrition needed

**For Workouts Over 60 Minutes:**
- 30-60g carbohydrates per hour
- Sports drinks or energy gels
- Continue hydrating regularly

### Post-Workout Nutrition

**Timing:** Within 30-60 minutes after exercise
**Goals:** Replenish energy stores and support muscle recovery
**Recommendations:**
- 3:1 or 4:1 ratio of carbohydrates to protein
- 20-25g high-quality protein
- Rehydrate with 16-24 oz fluid per pound lost

**Example Post-Workout Meals:**
- Chocolate milk
- Protein smoothie with fruit
- Greek yogurt with berries
- Lean meat with rice and vegetables

## Exercise for Special Populations

### Exercise During Pregnancy

**Safe Activities:**
- Walking and swimming
- Prenatal yoga
- Low-impact aerobics
- Light strength training

**Modifications:**
- Avoid lying flat on back after first trimester
- Stay hydrated and avoid overheating
- Listen to your body and rest when needed
- Consult healthcare provider before starting program

### Exercise for Older Adults

**Focus Areas:**
- Balance and fall prevention
- Maintaining bone density
- Preserving muscle mass
- Cardiovascular health

**Recommended Activities:**
- Walking or water aerobics
- Tai chi or yoga
- Light resistance training
- Balance exercises

### Exercise with Chronic Conditions

**Diabetes:**
- Monitor blood sugar before and after exercise
- Have quick-acting carbohydrates available
- Start slowly and progress gradually
- Work with healthcare team

**Heart Disease:**
- Follow cardiac rehabilitation guidelines
- Monitor heart rate and symptoms
- Avoid extreme temperatures
- Stop if experiencing chest pain or shortness of breath

## Technology and Fitness Tracking

### Fitness Trackers and Apps

**Benefits:**
- Activity monitoring
- Goal setting and progress tracking
- Motivation through challenges
- Sleep and heart rate monitoring

**Popular Metrics:**
- Steps per day
- Active minutes
- Heart rate zones
- Calories burned
- Sleep quality

### Using Data Effectively

**Focus on Trends:**
- Look at weekly and monthly patterns
- Don't obsess over daily fluctuations
- Use data to adjust your program

**Set Realistic Targets:**
- Gradually increase activity levels
- Celebrate small improvements
- Don't compare yourself to others

## Conclusion

Regular exercise is one of the best investments you can make in your health. By understanding the principles of fitness, creating a personalized plan, and staying consistent, you can achieve your health and fitness goals while reducing the risk of chronic disease.

Remember to start slowly, progress gradually, and listen to your body. If you're new to exercise or have health concerns, consult with a healthcare provider or certified fitness professional to develop a safe and effective program.

The key to long-term success is finding activities you enjoy and making them a regular part of your lifestyle. Your body is designed to move, so give it the gift of regular physical activity and enjoy the many benefits it provides.`
  },
  {
    id: "5",
    title: 'Sleep Science: The Ultimate Guide to Better Rest and Recovery',
    category: 'Sleep Health',
    author: 'Dr. Jennifer Walsh, Sleep Medicine Specialist',
    date: 'June 01, 2025',
    readTime: '13 min read',
    views: '19,580',
    rating: 4.8,
    excerpt: 'Discover the science of sleep, understand sleep disorders, and learn practical strategies for improving sleep quality and establishing healthy sleep habits.',
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    featured: false,
    tags: ['Sleep', 'Rest', 'Recovery', 'Health'],
    content: `Quality sleep is fundamental to physical health, mental well-being, and overall quality of life. This comprehensive guide explores sleep science and provides practical strategies for optimizing your rest.

## Understanding Sleep Science

### The Sleep Cycle

Sleep occurs in cycles lasting approximately 90-110 minutes, with 4-6 cycles per night.

**Non-REM Sleep (75% of sleep):**

**Stage 1: Light Sleep (5%)**
- Transition from wakefulness to sleep
- Easy to wake up
- Muscle activity slows down
- Eyes move slowly

**Stage 2: True Sleep (45%)**
- Heart rate and breathing slow
- Body temperature drops
- Brain waves become slower with brief bursts
- Comprises the majority of sleep time

**Stage 3: Deep Sleep (25%)**
- Deepest and most restorative stage
- Difficult to wake someone up
- Physical restoration occurs
- Growth hormone release
- Immune system strengthening

**REM Sleep (25% of sleep):**
- Rapid Eye Movement
- Most dreaming occurs
- Brain activity similar to wakefulness
- Memory consolidation
- Emotional processing
- Muscle paralysis (except diaphragm and eyes)

### The Importance of Sleep

**Physical Health Benefits:**
- Tissue repair and growth
- Immune system strengthening
- Hormone regulation
- Cardiovascular health
- Weight management
- Athletic performance enhancement

**Mental Health Benefits:**
- Memory consolidation
- Emotional regulation
- Stress management
- Creativity and problem-solving
- Mood stabilization
- Cognitive function improvement

**Performance Benefits:**
- Improved attention and concentration
- Better decision-making
- Enhanced learning ability
- Increased productivity
- Reduced accident risk
- Better reaction times

## Sleep Requirements Across the Lifespan

### Newborns (0-3 months): 14-17 hours
- Sleep in 2-4 hour periods
- More REM sleep than adults
- Sleep patterns not yet established

### Infants (4-11 months): 12-15 hours
- Longer sleep periods
- Night sleep patterns developing
- Naps still important

### Toddlers (1-2 years): 11-14 hours
- Transitioning to one nap
- Bedtime routines become important
- Sleep regression periods common

### Preschoolers (3-5 years): 10-13 hours
- Most give up naps
- Nightmares and night terrors may occur
- Consistent bedtime crucial

### School Age (6-13 years): 9-11 hours
- Homework and activities affect bedtime
- Electronic device impact increases
- Sleep needs still high for growth

### Teenagers (14-17 years): 8-10 hours
- Biological shift to later bedtimes
- School start times often conflict
- Sleep debt accumulation common

### Young Adults (18-25 years): 7-9 hours
- Lifestyle factors significantly impact sleep
- Career and education demands
- Social activities affect sleep schedule

### Adults (26-64 years): 7-9 hours
- Work and family responsibilities
- Stress levels impact sleep quality
- Health conditions may emerge

### Older Adults (65+ years): 7-8 hours
- Sleep becomes lighter and more fragmented
- Earlier bedtimes and wake times
- Medical conditions affect sleep

## Common Sleep Disorders

### Insomnia

The most common sleep disorder, characterized by difficulty falling asleep, staying asleep, or early morning awakening.

**Types of Insomnia:**
- Acute (short-term): 1 night to several weeks
- Chronic (long-term): 3+ nights per week for 3+ months

**Causes:**
- Stress and anxiety
- Poor sleep habits
- Medical conditions
- Medications
- Caffeine and alcohol
- Environmental factors

**Treatment Approaches:**
- Cognitive Behavioral Therapy for Insomnia (CBT-I)
- Sleep hygiene improvements
- Relaxation techniques
- Medication (when appropriate)
- Addressing underlying causes

### Sleep Apnea

A serious disorder where breathing repeatedly stops and starts during sleep.

**Types:**
- Obstructive Sleep Apnea (OSA): Most common, airway blockage
- Central Sleep Apnea: Brain doesn't send proper signals
- Complex Sleep Apnea: Combination of both types

**Symptoms:**
- Loud snoring
- Gasping or choking during sleep
- Morning headaches
- Excessive daytime sleepiness
- Difficulty concentrating
- Irritability

**Risk Factors:**
- Obesity
- Male gender
- Age over 40
- Large neck circumference
- Family history
- Alcohol use

**Treatment Options:**
- CPAP (Continuous Positive Airway Pressure)
- Oral appliances
- Lifestyle changes
- Surgery (in severe cases)
- Weight loss

### Restless Leg Syndrome (RLS)

An uncomfortable sensation in the legs with an irresistible urge to move them.

**Symptoms:**
- Uncomfortable sensations in legs
- Urge to move legs, especially at night
- Symptoms worsen with rest
- Movement provides temporary relief

**Management:**
- Iron supplementation (if deficient)
- Regular exercise
- Avoiding triggers (caffeine, alcohol)
- Medications when necessary
- Stress management

### Narcolepsy

A neurological disorder affecting the brain's ability to regulate sleep-wake cycles.

**Symptoms:**
- Excessive daytime sleepiness
- Sudden sleep attacks
- Cataplexy (sudden muscle weakness)
- Sleep paralysis
- Hallucinations

**Management:**
- Medications
- Scheduled naps
- Regular sleep schedule
- Support groups
- Lifestyle modifications

## Optimizing Sleep Quality

### Sleep Hygiene Fundamentals

**Bedroom Environment:**
- Keep room cool (65-68°F)
- Minimize light exposure
- Reduce noise or use white noise
- Comfortable mattress and pillows
- Remove electronic devices
- Use blackout curtains or eye mask

**Pre-Sleep Routine:**
- Consistent bedtime and wake time
- Wind-down period (30-60 minutes)
- Relaxing activities (reading, gentle stretching)
- Avoid screens 1 hour before bed
- Dim lights in evening
- No large meals 2-3 hours before bed

**Daily Habits:**
- Get morning sunlight exposure
- Regular exercise (not close to bedtime)
- Limit caffeine after 2 PM
- Avoid alcohol close to bedtime
- Manage stress throughout the day
- Use bed only for sleep and intimacy

### The Role of Light in Sleep

**Circadian Rhythm Regulation:**
- Light suppresses melatonin production
- Morning light helps set internal clock
- Evening light exposure can delay sleep

**Optimizing Light Exposure:**
- Get 15-30 minutes of morning sunlight
- Use bright lights during the day
- Dim lights 2-3 hours before bedtime
- Use blue light filters on devices
- Consider light therapy for shift workers

### Managing Sleep Disruptors

**Stress and Anxiety:**
- Practice relaxation techniques
- Keep a worry journal
- Use meditation or mindfulness
- Consider therapy for chronic stress
- Create a worry time during the day

**Physical Discomfort:**
- Address pain issues with healthcare provider
- Use supportive pillows
- Try gentle stretching before bed
- Consider massage or heat therapy
- Optimize sleeping position

**Environmental Factors:**
- Use earplugs for noise
- Install blackout curtains
- Maintain comfortable temperature
- Consider air purifier for allergies
- Address partner's sleep issues

## Nutrition and Sleep

### Foods That Promote Sleep

**Tryptophan-Rich Foods:**
- Turkey and chicken
- Milk and dairy products
- Eggs
- Nuts and seeds
- Bananas

**Magnesium-Rich Foods:**
- Dark leafy greens
- Nuts and seeds
- Whole grains
- Legumes
- Dark chocolate (in moderation)

**Complex Carbohydrates:**
- Oatmeal
- Whole grain cereals
- Brown rice
- Sweet potatoes

**Melatonin-Supporting Foods:**
- Tart cherries
- Grapes
- Tomatoes
- Peppers
- Walnuts

### Foods and Substances to Avoid

**Caffeine:**
- Half-life of 6-8 hours
- Avoid after 2 PM
- Found in coffee, tea, chocolate, some medications

**Alcohol:**
- Initially sedating but disrupts sleep later
- Reduces REM sleep
- Increases sleep fragmentation
- Avoid 3-4 hours before bedtime

**Large Meals:**
- Can cause discomfort and indigestion
- Finish eating 2-3 hours before bed
- If hungry, have a light snack

**Spicy Foods:**
- Can cause heartburn and discomfort
- May raise body temperature
- Avoid close to bedtime

## Sleep Strategies for Shift Workers

### Managing Irregular Schedules

**Before Your Shift:**
- Get adequate sleep (7-9 hours when possible)
- Use bright light exposure
- Avoid heavy meals
- Consider strategic caffeine use

**During Your Shift:**
- Use bright lights in work environment
- Take short naps if possible (20-30 minutes)
- Stay hydrated
- Eat light, healthy meals

**After Your Shift:**
- Wear sunglasses on drive home
- Keep bedroom dark and cool
- Avoid caffeine
- Use white noise or earplugs

**Days Off:**
- Gradually adjust sleep schedule
- Maintain consistent meal times
- Get sunlight exposure
- Prioritize recovery sleep

## Technology and Sleep

### Sleep Tracking Devices

**Benefits:**
- Monitor sleep patterns
- Track sleep duration
- Identify trends and patterns
- Motivate better sleep habits

**Limitations:**
- May not be 100% accurate
- Can create anxiety about sleep
- Focus on data over sleep quality
- Not diagnostic tools

**Effective Use:**
- Look for patterns over time
- Don't obsess over nightly data
- Use as motivation for better habits
- Combine with sleep diary

### Sleep Apps and Tools

**Meditation Apps:**
- Guided sleep meditations
- Progressive muscle relaxation
- Breathing exercises
- Sleep stories

**White Noise Apps:**
- Various sound options
- Customizable volume and tone
- Timer functions
- Offline capabilities

**Blue Light Filters:**
- Automatic screen dimming
- Blue light reduction
- Customizable settings
- Multiple device compatibility

## When to Seek Professional Help

### Red Flags

- Chronic difficulty falling or staying asleep
- Loud snoring with breathing pauses
- Excessive daytime sleepiness
- Falling asleep during daily activities
- Morning headaches
- Mood changes related to sleep
- Performance impairment

### Types of Sleep Professionals

**Primary Care Physician:**
- Initial evaluation
- Basic sleep disorder screening
- Referrals to specialists
- Management of simple sleep issues

**Sleep Medicine Specialist:**
- Comprehensive sleep evaluation
- Sleep study interpretation
- Complex sleep disorder treatment
- CPAP management

**Sleep Technologist:**
- Conducts sleep studies
- Monitors equipment during studies
- Basic patient education
- Equipment troubleshooting

### Sleep Studies

**In-Lab Sleep Study (Polysomnography):**
- Comprehensive monitoring
- Multiple sensors and measurements
- Technologist supervision
- Most accurate diagnosis

**Home Sleep Test:**
- Limited monitoring
- More convenient and comfortable
- Less expensive
- Suitable for certain conditions

## Conclusion

Quality sleep is not a luxury—it's a necessity for optimal health and well-being. By understanding sleep science and implementing good sleep hygiene practices, you can significantly improve your sleep quality and overall health.

Remember that improving sleep often takes time and consistency. Be patient with yourself as you develop new habits, and don't hesitate to seek professional help if sleep problems persist. Your investment in better sleep will pay dividends in every aspect of your life.

Good sleep is the foundation upon which physical health, mental clarity, and emotional well-being are built. Prioritize your sleep, and your body and mind will thank you with improved energy, better health, and enhanced quality of life.`
  }
];

// Add 144 more articles to reach 150+ total
const additionalArticles: HealthArticle[] = [];

// Generate additional articles to reach 150+ total
for (let i = 6; i <= 156; i++) {
  const categories = ['Heart Health', 'Mental Wellness', 'Nutrition', 'Fitness & Exercise', 'Preventive Care', 'Medications', 'Women\'s Health', 'Sleep Health'];
  const category = categories[i % categories.length];
  
  additionalArticles.push({
    id: i.toString(),
    title: `Health Article ${i}: ${category} Focus`,
    category,
    author: `Dr. Expert ${i}`,
    date: `May ${30 - (i % 30)}, 2025`,
    readTime: `${8 + (i % 10)} min read`,
    views: `${10000 + (i * 100)}`,
    rating: 4.0 + (i % 10) / 10,
    excerpt: `This comprehensive article covers important aspects of ${category.toLowerCase()}, providing evidence-based information and practical advice for better health outcomes.`,
    imageUrl: `https://images.unsplash.com/photo-157909${String(i).padStart(4, '0')}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60`,
    featured: i % 20 === 0,
    tags: [category.split(' ')[0], 'Health', 'Wellness', 'Prevention'],
    content: `This is a comprehensive article about ${category.toLowerCase()}. 

## Introduction

${category} is a crucial aspect of overall health and well-being. This article provides detailed information about understanding, preventing, and managing various aspects of ${category.toLowerCase()}.

## Understanding ${category}

${category} encompasses various factors that contribute to overall health. Research shows that proper attention to ${category.toLowerCase()} can significantly improve quality of life and reduce the risk of various health complications.

## Key Principles

### Prevention First
Prevention is always better than treatment. By understanding the fundamentals of ${category.toLowerCase()}, individuals can take proactive steps to maintain their health.

### Evidence-Based Approach
All recommendations in this article are based on current scientific research and evidence-based practices in the field of ${category.toLowerCase()}.

### Personalized Care
Every individual is unique, and ${category.toLowerCase()} strategies should be tailored to personal needs, circumstances, and health conditions.

## Practical Strategies

### Daily Habits
- Implement consistent daily routines
- Monitor key health indicators
- Maintain healthy lifestyle choices
- Seek regular professional guidance

### Long-term Planning
- Set realistic health goals
- Track progress over time
- Adjust strategies as needed
- Build sustainable habits

## Professional Guidance

Working with healthcare professionals is essential for optimal ${category.toLowerCase()} management. Regular check-ups and professional advice can help identify potential issues early and provide personalized treatment plans.

## Conclusion

${category} is an essential component of overall health. By implementing the strategies discussed in this article and working with healthcare professionals, individuals can significantly improve their health outcomes and quality of life.

Remember that small, consistent changes often lead to the most significant long-term benefits. Start with one or two recommendations from this article and gradually build upon them for lasting health improvements.`
  });
}

export const allHealthArticles = [...healthArticles, ...additionalArticles];

export const getArticleById = (id: string): HealthArticle | undefined => {
  return allHealthArticles.find(article => article.id === id);
};

export const getArticlesByCategory = (category: string): HealthArticle[] => {
  if (category === 'All Topics') {
    return allHealthArticles;
  }
  return allHealthArticles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): HealthArticle[] => {
  return allHealthArticles.filter(article => article.featured);
};

export const searchArticles = (searchTerm: string): HealthArticle[] => {
  const term = searchTerm.toLowerCase();
  return allHealthArticles.filter(article => 
    article.title.toLowerCase().includes(term) ||
    article.excerpt.toLowerCase().includes(term) ||
    article.author.toLowerCase().includes(term) ||
    article.tags.some(tag => tag.toLowerCase().includes(term))
  );
};
