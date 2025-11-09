import { useNavigate } from 'react-router-dom';
import { BookOpen, Brain, Award, Clock, Users, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import GlassCard from '@/components/GlassCard';
import WaveAnimation from '@/components/WaveAnimation';
import { Button } from '@/components/ui/button';
import { mockCourses } from '@/data/mockCourses';
import CourseCard from '@/components/CourseCard';

const Home = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      titleEn: 'Video Lessons',
      titleBn: 'ভিডিও পাঠ',
      descEn: 'High-quality video content in Bengali',
      descBn: 'বাংলায় উচ্চ মানের ভিডিও কন্টেন্ট'
    },
    {
      icon: Brain,
      titleEn: 'AI Chatbot',
      titleBn: 'এআই চ্যাটবট',
      descEn: '24/7 AI assistant for your learning',
      descBn: 'আপনার শেখার জন্য ২৪/৭ এআই সহায়ক'
    },
    {
      icon: Award,
      titleEn: 'Certificates',
      titleBn: 'সার্টিফিকেট',
      descEn: 'Get certified on course completion',
      descBn: 'কোর্স সম্পূর্ণ করে সার্টিফিকেট পান'
    },
    {
      icon: Clock,
      titleEn: 'Learn at Your Pace',
      titleBn: 'নিজের গতিতে শিখুন',
      descEn: 'Lifetime access to all courses',
      descBn: 'সকল কোর্সে আজীবন প্রবেশাধিকার'
    },
    {
      icon: Users,
      titleEn: 'Community',
      titleBn: 'কমিউনিটি',
      descEn: 'Join thousands of learners',
      descBn: 'হাজার হাজার শিক্ষার্থীর সাথে যোগ দিন'
    },
    {
      icon: MessageSquare,
      titleEn: 'Bengali Content',
      titleBn: 'বাংলা কন্টেন্ট',
      descEn: 'Everything taught in Bengali',
      descBn: 'সবকিছু বাংলায় শেখানো হয়'
    }
  ];

  const stats = [
    { value: '10,000+', labelEn: 'Students', labelBn: 'শিক্ষার্থী' },
    { value: '50+', labelEn: 'Courses', labelBn: 'কোর্স' },
    { value: '95%', labelEn: 'Success Rate', labelBn: 'সাফল্যের হার' },
    { value: '24/7', labelEn: 'AI Support', labelBn: 'এআই সহায়তা' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-earth.jpeg)',
            filter: 'brightness(0.4)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            {t('বাংলায় শিখুন', 'বাংলায় শিখুন')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground fade-in">
            {t('Learn Skills in Bengali', 'বাংলায় দক্ষতা শিখুন')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in">
            <Button size="lg" onClick={() => navigate('/courses')}>
              {t('Explore Courses', 'কোর্স দেখুন')}
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/chat')}>
              {t('Start Learning', 'শেখা শুরু করুন')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="p-6" hover={false}>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {t(stat.labelEn, stat.labelBn)}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Wave Animation */}
        <WaveAnimation />
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          {t('Why Choose BanglaySikhun?', 'কেন বাংলায়শিখুন বেছে নেবেন?')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t(
            'Learn from the best instructors with our comprehensive courses designed for Bengali speakers.',
            'বাংলা ভাষাভাষীদের জন্য ডিজাইন করা আমাদের ব্যাপক কোর্সগুলির সাথে সেরা প্রশিক্ষকদের কাছ থেকে শিখুন।'
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <GlassCard key={index} className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t(feature.titleEn, feature.titleBn)}
                </h3>
                <p className="text-muted-foreground">
                  {t(feature.descEn, feature.descBn)}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          {t('Popular Courses', 'জনপ্রিয় কোর্স')}
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          {t('Start learning with our most popular courses', 'আমাদের সবচেয়ে জনপ্রিয় কোর্স দিয়ে শেখা শুরু করুন')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockCourses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={() => navigate('/courses')}>
            {t('View All Courses', 'সকল কোর্স দেখুন')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
