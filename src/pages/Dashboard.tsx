import { Award, BookOpen, Clock, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { mockUser } from '@/data/mockUsers';
import { mockCourses } from '@/data/mockCourses';
import GlassCard from '@/components/GlassCard';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const enrolledCourses = mockCourses.filter((course) =>
    mockUser.enrolledCourses.includes(course.id)
  );

  const certificateCourses = mockCourses.filter((course) =>
    mockUser.certificates.includes(course.id)
  );

  const recommendedCourses = mockCourses.slice(3, 5);

  const activities = [
    { text: 'Completed lesson 5 in React Course', time: '2 hours ago', icon: BookOpen },
    { text: 'Earned certificate in Python Programming', time: '1 day ago', icon: Award },
    { text: 'Started Adobe Premiere Pro course', time: '2 days ago', icon: TrendingUp },
    { text: 'Achieved 7-day learning streak', time: '3 days ago', icon: Clock },
    { text: 'Completed JavaScript fundamentals module', time: '4 days ago', icon: BookOpen }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            {t(`Welcome, ${mockUser.name}!`, `স্বাগতম, ${mockUser.name}!`)}
          </h1>
          <p className="text-muted-foreground">
            {t('Track your learning progress and achievements', 'আপনার শেখার অগ্রগতি এবং অর্জন ট্র্যাক করুন')}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <GlassCard className="p-6" hover={false}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{mockUser.totalHours}h</p>
                <p className="text-sm text-muted-foreground">{t('Total Hours', 'মোট ঘণ্টা')}</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6" hover={false}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {mockUser.certificates.length}/{mockUser.enrolledCourses.length}
                </p>
                <p className="text-sm text-muted-foreground">{t('Completed', 'সম্পূর্ণ')}</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6" hover={false}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{mockUser.certificates.length}</p>
                <p className="text-sm text-muted-foreground">{t('Certificates', 'সার্টিফিকেট')}</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6" hover={false}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{mockUser.currentStreak}</p>
                <p className="text-sm text-muted-foreground">{t('Day Streak', 'দিন স্ট্রিক')}</p>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Courses */}
            <GlassCard className="p-6" hover={false}>
              <h2 className="text-2xl font-bold mb-6">{t('My Courses', 'আমার কোর্স')}</h2>
              <div className="space-y-6">
                {enrolledCourses.map((course) => {
                  const progress = mockUser.progress[course.id] || 0;
                  const progressColor = progress > 70 ? 'bg-green-500' : progress > 40 ? 'bg-yellow-500' : 'bg-orange-500';
                  
                  return (
                    <div key={course.id} className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-semibold mb-1">
                              {language === 'en' ? course.title : course.titleBn}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">{course.instructor}</p>
                            <div className="flex items-center gap-2">
                              <Progress value={progress} className="w-32" />
                              <span className="text-sm font-medium">{progress}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button 
                        onClick={() => navigate(`/course/${course.id}`)}
                        variant="outline" 
                        size="sm"
                      >
                        {t('Continue Learning', 'শেখা চালিয়ে যান')}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </GlassCard>

            {/* Certificates */}
            <GlassCard className="p-6" hover={false}>
              <h2 className="text-2xl font-bold mb-6">{t('My Certificates', 'আমার সার্টিফিকেট')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certificateCourses.map((course) => (
                  <div key={course.id} className="relative group">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-6 flex flex-col justify-center items-center text-center border border-primary/20">
                      <Award className="w-12 h-12 text-primary mb-3" />
                      <h3 className="font-semibold mb-2 text-sm">
                        {t('Certificate of Completion', 'সমাপ্তির সার্টিফিকেট')}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {language === 'en' ? course.title : course.titleBn}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 w-full"
                      onClick={() => alert('Download feature (UI only)')}
                    >
                      {t('Download', 'ডাউনলোড')}
                    </Button>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Activity Timeline */}
            <GlassCard className="p-6" hover={false}>
              <h2 className="text-2xl font-bold mb-6">{t('Recent Activity', 'সাম্প্রতিক কার্যকলাপ')}</h2>
              <div className="space-y-4">
                {activities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{activity.text}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </GlassCard>

            {/* Recommended Courses */}
            <GlassCard className="p-6" hover={false}>
              <h2 className="text-2xl font-bold mb-6">{t('Recommended', 'প্রস্তাবিত')}</h2>
              <div className="space-y-4">
                {recommendedCourses.map((course) => (
                  <div 
                    key={course.id} 
                    className="flex gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => navigate(`/course/${course.id}`)}
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                        {language === 'en' ? course.title : course.titleBn}
                      </h3>
                      <p className="text-xs text-muted-foreground">{course.instructor}</p>
                      <p className="text-sm font-bold text-primary mt-1">৳{course.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
