import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Users, Clock, BookOpen, Award, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { mockCourses } from '@/data/mockCourses';
import { mockReviews } from '@/data/mockReviews';
import GlassCard from '@/components/GlassCard';
import PaymentModal from '@/components/PaymentModal';
import EnrollmentSuccessModal from '@/components/EnrollmentSuccessModal';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CourseDetail = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const course = mockCourses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <p className="text-xl text-muted-foreground">{t('Course not found', 'কোর্স পাওয়া যায়নি')}</p>
      </div>
    );
  }

  const handlePaymentSuccess = () => {
    setPaymentModalOpen(false);
    setSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-md text-sm font-semibold">
                  {course.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">
                {language === 'en' ? course.title : course.titleBn}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {language === 'en' ? course.description : course.descriptionBn}
              </p>

              {/* Rating & Students */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-muted-foreground">({mockReviews.length} {t('reviews', 'রিভিউ')})</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5" />
                  <span>{course.students.toLocaleString()} {t('students', 'শিক্ষার্থী')}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50"
                  alt={course.instructor}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{course.instructor}</p>
                  <p className="text-sm text-muted-foreground">{t('Instructor', 'ইন্সট্রাক্টর')}</p>
                </div>
              </div>
            </div>

            {/* Course Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
            </div>

            {/* What You'll Learn */}
            <GlassCard className="p-6 mb-8" hover={false}>
              <h2 className="text-2xl font-bold mb-4">
                {t("What You'll Learn", 'আপনি যা শিখবেন')}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.whatYouLearn.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Course Curriculum */}
            <GlassCard className="p-6 mb-8" hover={false}>
              <h2 className="text-2xl font-bold mb-4">
                {t('Course Curriculum', 'কোর্স পাঠ্যক্রম')}
              </h2>
              <Accordion type="single" collapsible>
                {course.curriculum.map((module, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">{module.module}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-4">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-center gap-2 text-muted-foreground">
                            <BookOpen className="w-4 h-4" />
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>

            {/* Requirements */}
            <GlassCard className="p-6 mb-8" hover={false}>
              <h2 className="text-2xl font-bold mb-4">{t('Requirements', 'প্রয়োজনীয়তা')}</h2>
              <ul className="space-y-2">
                {course.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Reviews */}
            <GlassCard className="p-6" hover={false}>
              <h2 className="text-2xl font-bold mb-6">{t('Student Reviews', 'শিক্ষার্থীর রিভিউ')}</h2>
              <div className="space-y-6">
                {mockReviews.map((review) => (
                  <div key={review.id} className="border-b border-border pb-6 last:border-0">
                    <div className="flex items-start gap-4">
                      <img
                        src={review.userAvatar}
                        alt={review.userName}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{review.userName}</h3>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <GlassCard className="p-6" hover={false}>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">৳{course.price}</div>
                </div>

                <Button onClick={() => setPaymentModalOpen(true)} className="w-full mb-4" size="lg">
                  {t('Enroll Now', 'এখনই তালিকাভুক্ত হন')}
                </Button>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">{t('Duration', 'সময়কাল')}</p>
                      <p className="font-semibold">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">{t('Lectures', 'লেকচার')}</p>
                      <p className="font-semibold">{course.lectures}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">{t('Level', 'লেভেল')}</p>
                      <p className="font-semibold">{course.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">{t('Language', 'ভাষা')}</p>
                      <p className="font-semibold">{t('Bengali', 'বাংলা')}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        onSuccess={handlePaymentSuccess}
        courseTitle={language === 'en' ? course.title : course.titleBn}
        coursePrice={course.price}
      />
      <EnrollmentSuccessModal
        isOpen={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        courseTitle={language === 'en' ? course.title : course.titleBn}
      />
    </div>
  );
};

export default CourseDetail;
