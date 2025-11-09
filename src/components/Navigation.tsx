import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', labelEn: 'Home', labelBn: 'হোম' },
    { path: '/courses', labelEn: 'Courses', labelBn: 'কোর্স' },
    { path: '/dashboard', labelEn: 'Dashboard', labelBn: 'ড্যাশবোর্ড' },
    { path: '/chat', labelEn: 'AI Chat', labelBn: 'এআই চ্যাট' },
    { path: '/admin', labelEn: 'Admin', labelBn: 'অ্যাডমিন' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${theme === 'dark' ? 'glass-dark' : 'glass-light'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            {t('BanglaySikhun', 'বাংলায়শিখুন')}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t(link.labelEn, link.labelBn)}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                theme === 'dark' ? 'glass-dark hover:bg-white/20' : 'glass-light hover:bg-black/10'
              }`}
            >
              {language === 'en' ? 'বাং' : 'EN'}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md transition-colors ${
                theme === 'dark' ? 'glass-dark hover:bg-white/20' : 'glass-light hover:bg-black/10'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${
                theme === 'dark' ? 'glass-dark hover:bg-white/20' : 'glass-light hover:bg-black/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-4 py-4 rounded-lg ${theme === 'dark' ? 'glass-dark' : 'glass-light'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t(link.labelEn, link.labelBn)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
