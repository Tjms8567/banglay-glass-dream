import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const GlassCard = ({ children, className, hover = true, onClick }: GlassCardProps) => {
  const { theme } = useTheme();

  return (
    <div
      onClick={onClick}
      className={cn(
        'rounded-lg',
        theme === 'dark' ? 'glass-dark' : 'glass-light',
        hover && 'hover-glass cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
