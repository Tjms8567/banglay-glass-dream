import { CheckCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import GlassCard from './GlassCard';
import { Button } from './ui/button';

interface EnrollmentSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
}

const EnrollmentSuccessModal = ({ isOpen, onClose, courseTitle }: EnrollmentSuccessModalProps) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleGoToDashboard = () => {
    onClose();
    navigate('/dashboard');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <GlassCard className="w-full max-w-md p-8 relative text-center" hover={false}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-md hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
        </div>

        {/* Content */}
        <h2 className="text-2xl font-bold mb-2">
          {t('Enrollment Successful!', 'তালিকাভুক্তি সফল!')}
        </h2>
        <p className="text-muted-foreground mb-6">
          {t(
            `You are now enrolled in "${courseTitle}". Start learning today!`,
            `আপনি এখন "${courseTitle}" এ নথিভুক্ত। আজই শেখা শুরু করুন!`
          )}
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          <Button onClick={handleGoToDashboard} className="w-full">
            {t('Go to Dashboard', 'ড্যাশবোর্ডে যান')}
          </Button>
          <Button onClick={onClose} variant="outline" className="w-full">
            {t('Continue Browsing', 'ব্রাউজিং চালিয়ে যান')}
          </Button>
        </div>
      </GlassCard>
    </div>
  );
};

export default EnrollmentSuccessModal;
