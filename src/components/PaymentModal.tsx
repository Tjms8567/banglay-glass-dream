import { useState } from 'react';
import { X, CreditCard } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import GlassCard from './GlassCard';
import { Button } from './ui/button';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  courseTitle: string;
  coursePrice: number;
}

const PaymentModal = ({ isOpen, onClose, onSuccess, courseTitle, coursePrice }: PaymentModalProps) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handlePayment = () => {
    setLoading(true);
    // Fake payment processing
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <GlassCard className="w-full max-w-md p-6 relative" hover={false}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-md hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{t('Complete Payment', 'পেমেন্ট সম্পন্ন করুন')}</h2>
          <p className="text-sm text-muted-foreground">{courseTitle}</p>
          <p className="text-2xl font-bold text-primary mt-2">৳{coursePrice}</p>
        </div>

        {/* Payment Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              {t('Card Number', 'কার্ড নম্বর')}
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className={`w-full px-4 py-2 rounded-md ${
                  theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                } border focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              <CreditCard className="absolute right-3 top-2.5 w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('Expiry Date', 'মেয়াদ শেষ')}
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className={`w-full px-4 py-2 rounded-md ${
                  theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                } border focus:outline-none focus:ring-2 focus:ring-primary`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">CVV</label>
              <input
                type="text"
                placeholder="123"
                className={`w-full px-4 py-2 rounded-md ${
                  theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                } border focus:outline-none focus:ring-2 focus:ring-primary`}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              {t('Cardholder Name', 'কার্ডধারীর নাম')}
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className={`w-full px-4 py-2 rounded-md ${
                theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
              } border focus:outline-none focus:ring-2 focus:ring-primary`}
            />
          </div>
        </div>

        {/* Payment Button */}
        <Button
          onClick={handlePayment}
          disabled={loading}
          className="w-full mt-6"
        >
          {loading ? t('Processing...', 'প্রসেসিং...') : t('Pay Now', 'এখনই পেমেন্ট করুন')}
        </Button>

        <p className="text-xs text-center text-muted-foreground mt-4">
          {t('Secure payment powered by BanglaySikhun', 'বাংলায়শিখুন দ্বারা সুরক্ষিত পেমেন্ট')}
        </p>
      </GlassCard>
    </div>
  );
};

export default PaymentModal;
