export interface Review {
  id: number;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  comment: string;
}

export const mockReviews: Review[] = [
  {
    id: 1,
    userName: "Mahbub Rahman",
    userAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50",
    rating: 5,
    date: "2024-02-15",
    comment: "Excellent course! The instructor explains everything clearly in Bengali. I was able to start freelancing after completing this course. Highly recommended!"
  },
  {
    id: 2,
    userName: "Shakila Akter",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50",
    rating: 5,
    date: "2024-02-10",
    comment: "Best investment I made for my career. The projects are practical and the support is amazing. Worth every taka!"
  },
  {
    id: 3,
    userName: "Rafiq Ahmed",
    userAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50",
    rating: 4,
    date: "2024-02-05",
    comment: "Great content and well structured. I would have liked a few more advanced topics, but overall very satisfied with the course."
  },
  {
    id: 4,
    userName: "Nadia Islam",
    userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50",
    rating: 5,
    date: "2024-01-28",
    comment: "বাংলায় এত সুন্দর করে শেখানোর জন্য ধন্যবাদ! Everything is explained step by step. Perfect for beginners like me."
  },
  {
    id: 5,
    userName: "Kamal Hossain",
    userAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=50",
    rating: 5,
    date: "2024-01-20",
    comment: "Outstanding course! The instructor is very knowledgeable and patient. I learned so much and already applying it to my work."
  }
];
