import { Users, BookOpen, DollarSign, TrendingUp, Activity } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import GlassCard from '@/components/GlassCard';
import { mockAdminStats, mockActivities, revenueChartData, enrollmentChartData } from '@/data/mockAdminData';
import { mockAdminUsers } from '@/data/mockUsers';
import { mockCourses } from '@/data/mockCourses';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '@/contexts/ThemeContext';

const Admin = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{t('Admin Dashboard', 'অ্যাডমিন ড্যাশবোর্ড')}</h1>
          <p className="text-muted-foreground">
            {t('Manage your platform and monitor performance', 'আপনার প্ল্যাটফর্ম পরিচালনা এবং পারফরম্যান্স মনিটর করুন')}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <GlassCard className="p-6" hover={false}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{mockAdminStats.totalStudents.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">{t('Total Students', 'মোট শিক্ষার্থী')}</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6" hover={false}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{mockAdminStats.activeCourses}</p>
                <p className="text-sm text-muted-foreground">{t('Active Courses', 'সক্রিয় কোর্স')}</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6" hover={false}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">৳{mockAdminStats.monthlyRevenue.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">{t('Monthly Revenue', 'মাসিক আয়')}</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6" hover={false}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{mockAdminStats.newEnrollments}</p>
                <p className="text-sm text-muted-foreground">{t('New Enrollments', 'নতুন তালিকাভুক্তি')}</p>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <GlassCard className="p-6" hover={false}>
            <h2 className="text-2xl font-bold mb-6">{t('Revenue Trend', 'আয়ের প্রবণতা')}</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="name" stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
                <YAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* Enrollment Chart */}
          <GlassCard className="p-6" hover={false}>
            <h2 className="text-2xl font-bold mb-6">{t('Weekly Enrollments', 'সাপ্তাহিক তালিকাভুক্তি')}</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={enrollmentChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="name" stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
                <YAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Management */}
          <div className="lg:col-span-2">
            <GlassCard className="p-6" hover={false}>
              <h2 className="text-2xl font-bold mb-6">{t('User Management', 'ইউজার ম্যানেজমেন্ট')}</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4">{t('User', 'ইউজার')}</th>
                      <th className="text-left py-3 px-4">{t('Email', 'ইমেইল')}</th>
                      <th className="text-left py-3 px-4">{t('Courses', 'কোর্স')}</th>
                      <th className="text-left py-3 px-4">{t('Status', 'স্ট্যাটাস')}</th>
                      <th className="text-left py-3 px-4">{t('Actions', 'অ্যাকশন')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockAdminUsers.map((user) => (
                      <tr key={user.id} className="border-b border-border last:border-0">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                            <span className="font-medium">{user.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">{user.email}</td>
                        <td className="py-3 px-4">{user.coursesEnrolled}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                              user.status === 'active'
                                ? 'bg-green-500/20 text-green-500'
                                : 'bg-gray-500/20 text-gray-500'
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-primary hover:underline text-sm">
                            {t('View', 'দেখুন')}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>

          {/* Recent Activity */}
          <div>
            <GlassCard className="p-6" hover={false}>
              <h2 className="text-2xl font-bold mb-6">{t('Recent Activity', 'সাম্প্রতিক কার্যকলাপ')}</h2>
              <div className="space-y-4">
                {mockActivities.map((activity) => (
                  <div key={activity.id} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Activity className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{activity.description}</p>
                      <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
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

export default Admin;
