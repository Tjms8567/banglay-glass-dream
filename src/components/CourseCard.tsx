import { Star, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import GlassCard from './GlassCard';
import { Course } from '@/data/mockCourses';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <GlassCard
      className="p-4 fade-in"
      onClick={() => navigate(`/course/${course.id}`)}
    >
      {/* Course Image */}
      <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-semibold">
          {course.category}
        </div>
      </div>

      {/* Course Info */}
      <h3 className="text-lg font-semibold mb-2 line-clamp-2">
        {language === 'en' ? course.title : course.titleBn}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-3">{course.instructor}</p>

      {/* Rating & Students */}
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          <span className="text-sm font-medium">{course.rating}</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Users className="w-4 h-4" />
          <span className="text-sm">{course.students.toLocaleString()}</span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-primary">৳{course.price}</span>
        <span className="text-xs text-muted-foreground">{course.level}</span>
      </div>
    </GlassCard>
  );
};

export default CourseCard;
