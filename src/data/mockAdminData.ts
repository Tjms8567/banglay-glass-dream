export interface AdminStats {
  totalStudents: number;
  activeCourses: number;
  monthlyRevenue: number;
  newEnrollments: number;
}

export const mockAdminStats: AdminStats = {
  totalStudents: 10234,
  activeCourses: 52,
  monthlyRevenue: 125000,
  newEnrollments: 856
};

export interface ActivityItem {
  id: number;
  type: 'user' | 'course' | 'revenue' | 'review';
  description: string;
  timestamp: string;
}

export const mockActivities: ActivityItem[] = [
  {
    id: 1,
    type: 'user',
    description: "New user registered: Sarah Khan",
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    type: 'course',
    description: "Course updated: React Masterclass",
    timestamp: "4 hours ago"
  },
  {
    id: 3,
    type: 'revenue',
    description: "Payment received: ৳2,999 from Ahmed Ali",
    timestamp: "5 hours ago"
  },
  {
    id: 4,
    type: 'review',
    description: "New 5-star review on Python course",
    timestamp: "8 hours ago"
  },
  {
    id: 5,
    type: 'user',
    description: "Course completed: Fatima Rahman finished UI/UX Design",
    timestamp: "1 day ago"
  }
];

export interface ChartData {
  name: string;
  value: number;
}

export const revenueChartData: ChartData[] = [
  { name: 'Jan', value: 45000 },
  { name: 'Feb', value: 52000 },
  { name: 'Mar', value: 61000 },
  { name: 'Apr', value: 73000 },
  { name: 'May', value: 89000 },
  { name: 'Jun', value: 95000 },
  { name: 'Jul', value: 110000 },
  { name: 'Aug', value: 125000 }
];

export const enrollmentChartData: ChartData[] = [
  { name: 'Mon', value: 45 },
  { name: 'Tue', value: 62 },
  { name: 'Wed', value: 48 },
  { name: 'Thu', value: 71 },
  { name: 'Fri', value: 89 },
  { name: 'Sat', value: 124 },
  { name: 'Sun', value: 98 }
];

export const popularityChartData: ChartData[] = [
  { name: 'Design', value: 35 },
  { name: 'Development', value: 45 },
  { name: 'Marketing', value: 20 }
];
