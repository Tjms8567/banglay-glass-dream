import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <footer className={`mt-20 ${theme === 'dark' ? 'glass-dark' : 'glass-light'}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">
              {t('BanglaySikhun', 'বাংলায়শিখুন')}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t(
                'Learn professional skills in Bengali. Quality education for everyone.',
                'বাংলায় পেশাদার দক্ষতা শিখুন। সবার জন্য মানসম্পন্ন শিক্ষা।'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('Quick Links', 'দ্রুত লিংক')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/courses" className="hover:text-foreground transition-colors">{t('All Courses', 'সকল কোর্স')}</a></li>
              <li><a href="/dashboard" className="hover:text-foreground transition-colors">{t('Dashboard', 'ড্যাশবোর্ড')}</a></li>
              <li><a href="/chat" className="hover:text-foreground transition-colors">{t('AI Assistant', 'এআই সহায়তা')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('About Us', 'আমাদের সম্পর্কে')}</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">{t('Categories', 'বিভাগ')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t('Design', 'ডিজাইন')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('Development', 'ডেভেলপমেন্ট')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('Marketing', 'মার্কেটিং')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('AI/ML', 'এআই/এমএল')}</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">{t('Follow Us', 'আমাদের ফলো করুন')}</h4>
            <div className="flex gap-4">
              <a href="#" className={`p-2 rounded-md transition-colors ${theme === 'dark' ? 'glass-dark hover:bg-white/20' : 'glass-light hover:bg-black/10'}`}>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className={`p-2 rounded-md transition-colors ${theme === 'dark' ? 'glass-dark hover:bg-white/20' : 'glass-light hover:bg-black/10'}`}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className={`p-2 rounded-md transition-colors ${theme === 'dark' ? 'glass-dark hover:bg-white/20' : 'glass-light hover:bg-black/10'}`}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className={`p-2 rounded-md transition-colors ${theme === 'dark' ? 'glass-dark hover:bg-white/20' : 'glass-light hover:bg-black/10'}`}>
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 BanglaySikhun. {t('All rights reserved.', 'সর্বস্বত্ব সংরক্ষিত।')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
