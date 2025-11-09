import { useState } from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { mockCourses } from '@/data/mockCourses';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';

const Courses = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    { id: 'All', labelEn: 'All', labelBn: 'সব' },
    { id: 'Design', labelEn: 'Design', labelBn: 'ডিজাইন' },
    { id: 'Development', labelEn: 'Development', labelBn: 'ডেভেলপমেন্ট' },
    { id: 'Marketing', labelEn: 'Marketing', labelBn: 'মার্কেটিং' },
    { id: 'AI/ML', labelEn: 'AI/ML', labelBn: 'এআই/এমএল' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            {t('All Courses', 'সকল কোর্স')}
          </h1>
          <p className="text-muted-foreground">
            {t('Browse our comprehensive collection of courses', 'আমাদের কোর্সের বিস্তৃত সংগ্রহ ব্রাউজ করুন')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('Search courses...', 'কোর্স খুঁজুন...')}
              className={`w-full pl-12 pr-4 py-3 rounded-lg ${
                theme === 'dark' ? 'glass-dark' : 'glass-light'
              } focus:outline-none focus:ring-2 focus:ring-primary`}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.id)}
              className={activeFilter === filter.id ? '' : theme === 'dark' ? 'glass-dark' : 'glass-light'}
            >
              {t(filter.labelEn, filter.labelBn)}
            </Button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
