export interface User {
  name: string;
  email: string;
  avatar: string;
  enrolledCourses: number[];
  progress: { [key: number]: number };
  certificates: number[];
  totalHours: number;
  currentStreak: number;
  joinDate: string;
}

export const mockUser: User = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
  enrolledCourses: [1, 5, 11],
  progress: {
    1: 75,
    5: 50,
    11: 25
  },
  certificates: [2, 4],
  totalHours: 45,
  currentStreak: 7,
  joinDate: "2024-01-15"
};

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
  coursesEnrolled: number;
  joinDate: string;
  status: 'active' | 'inactive';
}

export const mockAdminUsers: AdminUser[] = [
  {
    id: 1,
    name: "Sarah Khan",
    email: "sarah@example.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50",
    coursesEnrolled: 5,
    joinDate: "2024-01-10",
    status: "active"
  },
  {
    id: 2,
    name: "Ahmed Ali",
    email: "ahmed@example.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50",
    coursesEnrolled: 3,
    joinDate: "2024-01-15",
    status: "active"
  },
  {
    id: 3,
    name: "Fatima Rahman",
    email: "fatima@example.com",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50",
    coursesEnrolled: 7,
    joinDate: "2024-01-20",
    status: "active"
  },
  {
    id: 4,
    name: "Karim Hassan",
    email: "karim@example.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50",
    coursesEnrolled: 2,
    joinDate: "2024-02-01",
    status: "inactive"
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50",
    coursesEnrolled: 4,
    joinDate: "2024-02-05",
    status: "active"
  },
  {
    id: 6,
    name: "Tanvir Ahmed",
    email: "tanvir@example.com",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50",
    coursesEnrolled: 6,
    joinDate: "2024-02-10",
    status: "active"
  },
  {
    id: 7,
    name: "Ayesha Siddique",
    email: "ayesha@example.com",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=50",
    coursesEnrolled: 3,
    joinDate: "2024-02-15",
    status: "active"
  },
  {
    id: 8,
    name: "Rahim Khan",
    email: "rahim@example.com",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=50",
    coursesEnrolled: 8,
    joinDate: "2024-02-20",
    status: "active"
  },
  {
    id: 9,
    name: "Sadia Islam",
    email: "sadia@example.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50",
    coursesEnrolled: 2,
    joinDate: "2024-03-01",
    status: "inactive"
  },
  {
    id: 10,
    name: "Imran Hossain",
    email: "imran@example.com",
    avatar: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=50",
    coursesEnrolled: 5,
    joinDate: "2024-03-05",
    status: "active"
  }
];
