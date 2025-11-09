export interface Course {
  id: number;
  title: string;
  titleBn: string;
  instructor: string;
  price: number;
  rating: number;
  students: number;
  image: string;
  category: string;
  duration: string;
  lectures: number;
  level: string;
  description: string;
  descriptionBn: string;
  whatYouLearn: string[];
  requirements: string[];
  curriculum: {
    module: string;
    lessons: string[];
  }[];
}

export const mockCourses: Course[] = [
  {
    id: 1,
    title: "Adobe Premiere Pro Masterclass",
    titleBn: "অ্যাডোবি প্রিমিয়ার প্রো মাস্টারক্লাস",
    instructor: "Sarah Johnson",
    price: 2999,
    rating: 4.8,
    students: 1250,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400",
    category: "Design",
    duration: "8 hours",
    lectures: 42,
    level: "Beginner",
    description: "Master video editing with Adobe Premiere Pro from scratch. Learn professional techniques used in industry.",
    descriptionBn: "শূন্য থেকে অ্যাডোবি প্রিমিয়ার প্রো দিয়ে ভিডিও এডিটিং শিখুন। ইন্ডাস্ট্রিতে ব্যবহৃত পেশাদার কৌশল শিখুন।",
    whatYouLearn: [
      "Professional video editing techniques",
      "Color grading and correction",
      "Audio mixing and mastering",
      "Export settings for different platforms",
      "Advanced effects and transitions"
    ],
    requirements: ["Basic computer knowledge", "Adobe Premiere Pro installed"],
    curriculum: [
      {
        module: "Introduction to Premiere Pro",
        lessons: ["Interface overview", "Project setup", "Importing media", "Timeline basics"]
      },
      {
        module: "Editing Fundamentals",
        lessons: ["Cutting and trimming", "Adding transitions", "Working with layers", "Speed control"]
      },
      {
        module: "Color Grading",
        lessons: ["Color wheels", "LUTs application", "Matching shots", "Creative looks"]
      },
      {
        module: "Export & Delivery",
        lessons: ["Export settings", "Different formats", "YouTube optimization", "Final project"]
      }
    ]
  },
  {
    id: 2,
    title: "Web Development with React",
    titleBn: "রিয়েক্ট দিয়ে ওয়েব ডেভেলপমেন্ট",
    instructor: "Rahul Ahmed",
    price: 3499,
    rating: 4.9,
    students: 2100,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
    category: "Development",
    duration: "12 hours",
    lectures: 65,
    level: "Intermediate",
    description: "Build modern web applications with React. Learn hooks, state management, and best practices.",
    descriptionBn: "রিয়েক্ট দিয়ে আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরি করুন। হুকস, স্টেট ম্যানেজমেন্ট এবং সেরা অনুশীলন শিখুন।",
    whatYouLearn: [
      "React fundamentals and JSX",
      "Hooks and state management",
      "Component architecture",
      "API integration",
      "Routing and navigation"
    ],
    requirements: ["HTML, CSS, JavaScript knowledge"],
    curriculum: [
      {
        module: "React Basics",
        lessons: ["Components", "Props", "State", "Events"]
      },
      {
        module: "Advanced Hooks",
        lessons: ["useState", "useEffect", "useContext", "Custom hooks"]
      },
      {
        module: "State Management",
        lessons: ["Redux basics", "Context API", "Zustand", "Best practices"]
      },
      {
        module: "Real Project",
        lessons: ["Planning", "Building", "Testing", "Deployment"]
      }
    ]
  },
  {
    id: 3,
    title: "Digital Marketing Bangla",
    titleBn: "ডিজিটাল মার্কেটিং বাংলা",
    instructor: "Nadia Khan",
    price: 1999,
    rating: 4.7,
    students: 1850,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
    category: "Marketing",
    duration: "6 hours",
    lectures: 38,
    level: "Beginner",
    description: "Complete digital marketing course in Bengali. Learn SEO, social media, and paid advertising.",
    descriptionBn: "বাংলায় সম্পূর্ণ ডিজিটাল মার্কেটিং কোর্স। এসইও, সোশ্যাল মিডিয়া এবং পেইড বিজ্ঞাপন শিখুন।",
    whatYouLearn: [
      "SEO fundamentals",
      "Facebook & Instagram marketing",
      "Google Ads basics",
      "Content marketing",
      "Analytics and tracking"
    ],
    requirements: ["Basic internet knowledge"],
    curriculum: [
      {
        module: "Digital Marketing Intro",
        lessons: ["What is digital marketing", "Career opportunities", "Tools overview", "Creating accounts"]
      },
      {
        module: "SEO Mastery",
        lessons: ["Keyword research", "On-page SEO", "Off-page SEO", "Technical SEO"]
      },
      {
        module: "Social Media",
        lessons: ["Facebook strategy", "Instagram growth", "Content planning", "Engagement tactics"]
      },
      {
        module: "Paid Advertising",
        lessons: ["Google Ads", "Facebook Ads", "Budget planning", "ROI tracking"]
      }
    ]
  },
  {
    id: 4,
    title: "Photoshop for Beginners",
    titleBn: "ফটোশপ শুরু করুন",
    instructor: "Arif Hassan",
    price: 1499,
    rating: 4.6,
    students: 980,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400",
    category: "Design",
    duration: "5 hours",
    lectures: 30,
    level: "Beginner",
    description: "Learn Adobe Photoshop from basics to advanced photo manipulation and graphic design.",
    descriptionBn: "বেসিক থেকে অ্যাডভান্স ফটো ম্যানিপুলেশন এবং গ্রাফিক ডিজাইন শিখুন।",
    whatYouLearn: [
      "Photoshop interface",
      "Layer management",
      "Photo retouching",
      "Text effects",
      "Creative compositions"
    ],
    requirements: ["Adobe Photoshop installed"],
    curriculum: [
      {
        module: "Getting Started",
        lessons: ["Interface tour", "Tools panel", "Layers basics", "Saving files"]
      },
      {
        module: "Photo Editing",
        lessons: ["Color correction", "Retouching", "Removing objects", "Filters"]
      },
      {
        module: "Graphic Design",
        lessons: ["Text effects", "Shapes", "Mockups", "Social media posts"]
      },
      {
        module: "Advanced Techniques",
        lessons: ["Masking", "Blending modes", "Actions", "Final project"]
      }
    ]
  },
  {
    id: 5,
    title: "Python Programming Bangla",
    titleBn: "পাইথন প্রোগ্রামিং বাংলা",
    instructor: "Kamal Uddin",
    price: 2499,
    rating: 4.9,
    students: 1620,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400",
    category: "Development",
    duration: "10 hours",
    lectures: 55,
    level: "Beginner",
    description: "Learn Python programming from scratch in Bengali. Perfect for beginners starting their coding journey.",
    descriptionBn: "শূন্য থেকে বাংলায় পাইথন প্রোগ্রামিং শিখুন। নতুনদের জন্য পারফেক্ট।",
    whatYouLearn: [
      "Python basics and syntax",
      "Data structures",
      "Object-oriented programming",
      "File handling",
      "Web scraping basics"
    ],
    requirements: ["No prior programming knowledge needed"],
    curriculum: [
      {
        module: "Python Fundamentals",
        lessons: ["Variables", "Data types", "Operators", "Control flow"]
      },
      {
        module: "Functions & Modules",
        lessons: ["Defining functions", "Parameters", "Modules", "Packages"]
      },
      {
        module: "OOP Concepts",
        lessons: ["Classes", "Objects", "Inheritance", "Polymorphism"]
      },
      {
        module: "Practical Projects",
        lessons: ["Calculator app", "Web scraper", "Data analysis", "Final project"]
      }
    ]
  },
  {
    id: 6,
    title: "UI/UX Design Fundamentals",
    titleBn: "ইউআই/ইউএক্স ডিজাইন মৌলিক",
    instructor: "Priya Roy",
    price: 2799,
    rating: 4.8,
    students: 1340,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
    category: "Design",
    duration: "7 hours",
    lectures: 40,
    level: "Beginner",
    description: "Master UI/UX design principles and create beautiful user experiences.",
    descriptionBn: "ইউআই/ইউএক্স ডিজাইনের নীতি আয়ত্ত করুন এবং সুন্দর ইউজার এক্সপেরিয়েন্স তৈরি করুন।",
    whatYouLearn: [
      "Design thinking process",
      "User research methods",
      "Wireframing and prototyping",
      "Visual design principles",
      "Usability testing"
    ],
    requirements: ["Figma or Adobe XD"],
    curriculum: [
      {
        module: "UX Basics",
        lessons: ["What is UX", "User research", "Personas", "User journeys"]
      },
      {
        module: "UI Design",
        lessons: ["Color theory", "Typography", "Layout", "Components"]
      },
      {
        module: "Prototyping",
        lessons: ["Wireframes", "High-fidelity mockups", "Interactive prototypes", "Animations"]
      },
      {
        module: "Testing & Delivery",
        lessons: ["Usability testing", "Feedback iteration", "Handoff to developers", "Portfolio"]
      }
    ]
  },
  {
    id: 7,
    title: "AI & Machine Learning",
    titleBn: "এআই এবং মেশিন লার্নিং",
    instructor: "Dr. Amit Shah",
    price: 4999,
    rating: 4.9,
    students: 890,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
    category: "AI/ML",
    duration: "15 hours",
    lectures: 72,
    level: "Advanced",
    description: "Deep dive into AI and machine learning with practical projects and real-world applications.",
    descriptionBn: "ব্যবহারিক প্রকল্প এবং বাস্তব-বিশ্বের অ্যাপ্লিকেশন সহ এআই এবং মেশিন লার্নিং শিখুন।",
    whatYouLearn: [
      "Machine learning fundamentals",
      "Neural networks",
      "Deep learning with TensorFlow",
      "Computer vision",
      "Natural language processing"
    ],
    requirements: ["Python programming knowledge", "Basic mathematics"],
    curriculum: [
      {
        module: "ML Fundamentals",
        lessons: ["What is ML", "Types of learning", "Data preprocessing", "Model evaluation"]
      },
      {
        module: "Supervised Learning",
        lessons: ["Linear regression", "Classification", "Decision trees", "Ensemble methods"]
      },
      {
        module: "Deep Learning",
        lessons: ["Neural networks", "CNNs", "RNNs", "Transfer learning"]
      },
      {
        module: "Real Projects",
        lessons: ["Image classification", "Text analysis", "Prediction models", "Deployment"]
      }
    ]
  },
  {
    id: 8,
    title: "Social Media Marketing",
    titleBn: "সোশ্যাল মিডিয়া মার্কেটিং",
    instructor: "Fatima Ahmed",
    price: 1799,
    rating: 4.7,
    students: 1520,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400",
    category: "Marketing",
    duration: "5 hours",
    lectures: 32,
    level: "Beginner",
    description: "Master social media marketing across all major platforms and grow your online presence.",
    descriptionBn: "সকল প্রধান প্ল্যাটফর্মে সোশ্যাল মিডিয়া মার্কেটিং আয়ত্ত করুন।",
    whatYouLearn: [
      "Platform strategies",
      "Content creation",
      "Community management",
      "Analytics tracking",
      "Influencer marketing"
    ],
    requirements: ["Social media accounts"],
    curriculum: [
      {
        module: "Platform Mastery",
        lessons: ["Facebook strategy", "Instagram growth", "LinkedIn networking", "Twitter engagement"]
      },
      {
        module: "Content Creation",
        lessons: ["Visual content", "Copywriting", "Video content", "Stories & Reels"]
      },
      {
        module: "Growth Tactics",
        lessons: ["Hashtag strategy", "Engagement tactics", "Collaboration", "Viral content"]
      },
      {
        module: "Monetization",
        lessons: ["Brand partnerships", "Sponsored posts", "Affiliate marketing", "Building business"]
      }
    ]
  },
  {
    id: 9,
    title: "Video Editing Advanced",
    titleBn: "ভিডিও এডিটিং অ্যাডভান্স",
    instructor: "Imran Khan",
    price: 3299,
    rating: 4.8,
    students: 760,
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400",
    category: "Design",
    duration: "9 hours",
    lectures: 48,
    level: "Advanced",
    description: "Advanced video editing techniques for professionals. Master complex effects and workflows.",
    descriptionBn: "পেশাদারদের জন্য অ্যাডভান্স ভিডিও এডিটিং কৌশল। জটিল ইফেক্ট আয়ত্ত করুন।",
    whatYouLearn: [
      "Advanced color grading",
      "Motion graphics",
      "3D camera tracking",
      "Professional workflows",
      "Client management"
    ],
    requirements: ["Premiere Pro or Final Cut Pro experience"],
    curriculum: [
      {
        module: "Advanced Techniques",
        lessons: ["Multi-cam editing", "Green screen", "Motion tracking", "Speed ramping"]
      },
      {
        module: "Motion Graphics",
        lessons: ["After Effects integration", "Text animations", "Lower thirds", "Transitions"]
      },
      {
        module: "Color Science",
        lessons: ["Color theory", "Professional grading", "LUT creation", "Matching footage"]
      },
      {
        module: "Business Skills",
        lessons: ["Client communication", "Pricing", "Portfolio", "Freelancing"]
      }
    ]
  },
  {
    id: 10,
    title: "Graphic Design Complete",
    titleBn: "গ্রাফিক ডিজাইন সম্পূর্ণ",
    instructor: "Zainab Ali",
    price: 2899,
    rating: 4.7,
    students: 1120,
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=400",
    category: "Design",
    duration: "8 hours",
    lectures: 45,
    level: "Intermediate",
    description: "Complete graphic design course covering branding, typography, and visual communication.",
    descriptionBn: "ব্র্যান্ডিং, টাইপোগ্রাফি এবং ভিজ্যুয়াল কমিউনিকেশন সহ সম্পূর্ণ গ্রাফিক ডিজাইন।",
    whatYouLearn: [
      "Design principles",
      "Logo design",
      "Brand identity",
      "Print design",
      "Portfolio development"
    ],
    requirements: ["Adobe Illustrator and Photoshop"],
    curriculum: [
      {
        module: "Design Fundamentals",
        lessons: ["Principles", "Color theory", "Typography", "Composition"]
      },
      {
        module: "Logo Design",
        lessons: ["Research", "Sketching", "Digital creation", "Presentation"]
      },
      {
        module: "Brand Identity",
        lessons: ["Brand strategy", "Visual systems", "Guidelines", "Applications"]
      },
      {
        module: "Print & Digital",
        lessons: ["Business cards", "Posters", "Social media", "Final portfolio"]
      }
    ]
  },
  {
    id: 11,
    title: "JavaScript Masterclass",
    titleBn: "জাভাস্ক্রিপ্ট মাস্টারক্লাস",
    instructor: "Sabbir Rahman",
    price: 3199,
    rating: 4.9,
    students: 1890,
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400",
    category: "Development",
    duration: "11 hours",
    lectures: 60,
    level: "Intermediate",
    description: "Master modern JavaScript including ES6+, async programming, and frameworks.",
    descriptionBn: "ES6+, অ্যাসিঙ্ক প্রোগ্রামিং এবং ফ্রেমওয়ার্ক সহ আধুনিক জাভাস্ক্রিপ্ট শিখুন।",
    whatYouLearn: [
      "Modern JavaScript syntax",
      "Async/await patterns",
      "DOM manipulation",
      "API integration",
      "Framework basics"
    ],
    requirements: ["Basic JavaScript knowledge"],
    curriculum: [
      {
        module: "ES6+ Features",
        lessons: ["Arrow functions", "Destructuring", "Spread operator", "Template literals"]
      },
      {
        module: "Async Programming",
        lessons: ["Promises", "Async/await", "Fetch API", "Error handling"]
      },
      {
        module: "Advanced Concepts",
        lessons: ["Closures", "Prototypes", "This keyword", "Modules"]
      },
      {
        module: "Real Applications",
        lessons: ["Todo app", "Weather app", "API projects", "Final project"]
      }
    ]
  },
  {
    id: 12,
    title: "Content Writing Course",
    titleBn: "কন্টেন্ট রাইটিং কোর্স",
    instructor: "Anika Das",
    price: 1699,
    rating: 4.6,
    students: 920,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400",
    category: "Marketing",
    duration: "6 hours",
    lectures: 35,
    level: "Beginner",
    description: "Learn professional content writing for blogs, websites, and social media.",
    descriptionBn: "ব্লগ, ওয়েবসাইট এবং সোশ্যাল মিডিয়ার জন্য পেশাদার কন্টেন্ট লেখা শিখুন।",
    whatYouLearn: [
      "Writing fundamentals",
      "SEO writing",
      "Blog post structure",
      "Copywriting basics",
      "Portfolio building"
    ],
    requirements: ["Good command of language"],
    curriculum: [
      {
        module: "Writing Basics",
        lessons: ["Grammar review", "Style guide", "Audience analysis", "Voice & tone"]
      },
      {
        module: "SEO Content",
        lessons: ["Keyword research", "SEO structure", "Meta descriptions", "Optimization"]
      },
      {
        module: "Different Formats",
        lessons: ["Blog posts", "Articles", "Social media", "Email copy"]
      },
      {
        module: "Professional Skills",
        lessons: ["Client briefs", "Editing", "Portfolio", "Freelancing"]
      }
    ]
  },
  {
    id: 13,
    title: "SEO Optimization",
    titleBn: "এসইও অপটিমাইজেশন",
    instructor: "Tanvir Hossain",
    price: 2199,
    rating: 4.8,
    students: 1280,
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=400",
    category: "Marketing",
    duration: "7 hours",
    lectures: 40,
    level: "Intermediate",
    description: "Complete SEO course to rank your website on Google and drive organic traffic.",
    descriptionBn: "আপনার ওয়েবসাইট গুগলে র‍্যাঙ্ক করতে সম্পূর্ণ এসইও কোর্স।",
    whatYouLearn: [
      "On-page SEO",
      "Technical SEO",
      "Link building",
      "Local SEO",
      "SEO tools"
    ],
    requirements: ["Basic website knowledge"],
    curriculum: [
      {
        module: "SEO Fundamentals",
        lessons: ["How search works", "Keyword research", "Competition analysis", "SEO strategy"]
      },
      {
        module: "On-Page SEO",
        lessons: ["Title tags", "Meta descriptions", "Header tags", "Internal linking"]
      },
      {
        module: "Technical SEO",
        lessons: ["Site speed", "Mobile optimization", "Structured data", "XML sitemaps"]
      },
      {
        module: "Off-Page SEO",
        lessons: ["Link building", "Guest posting", "Local citations", "Tracking results"]
      }
    ]
  },
  {
    id: 14,
    title: "Mobile App Development",
    titleBn: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
    instructor: "Rashed Ahmed",
    price: 3999,
    rating: 4.7,
    students: 680,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400",
    category: "Development",
    duration: "13 hours",
    lectures: 68,
    level: "Advanced",
    description: "Build cross-platform mobile apps with React Native. From basics to app store deployment.",
    descriptionBn: "রিয়েক্ট নেটিভ দিয়ে ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ তৈরি করুন।",
    whatYouLearn: [
      "React Native fundamentals",
      "Navigation patterns",
      "State management",
      "API integration",
      "App deployment"
    ],
    requirements: ["React knowledge", "JavaScript proficiency"],
    curriculum: [
      {
        module: "Getting Started",
        lessons: ["Setup", "Components", "Styling", "Layout"]
      },
      {
        module: "Navigation",
        lessons: ["Stack navigator", "Tab navigator", "Drawer", "Deep linking"]
      },
      {
        module: "Advanced Features",
        lessons: ["Camera", "Push notifications", "Local storage", "Maps"]
      },
      {
        module: "Deployment",
        lessons: ["iOS build", "Android build", "App Store", "Play Store"]
      }
    ]
  },
  {
    id: 15,
    title: "Data Science Bangla",
    titleBn: "ডেটা সায়েন্স বাংলা",
    instructor: "Dr. Mahbub Khan",
    price: 4499,
    rating: 4.9,
    students: 540,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    category: "AI/ML",
    duration: "14 hours",
    lectures: 70,
    level: "Advanced",
    description: "Complete data science course in Bengali covering statistics, machine learning, and data visualization.",
    descriptionBn: "পরিসংখ্যান, মেশিন লার্নিং এবং ডেটা ভিজ্যুয়ালাইজেশন সহ সম্পূর্ণ ডেটা সায়েন্স।",
    whatYouLearn: [
      "Data analysis with Python",
      "Statistics for data science",
      "Machine learning models",
      "Data visualization",
      "Real-world projects"
    ],
    requirements: ["Python basics", "Mathematics knowledge"],
    curriculum: [
      {
        module: "Data Analysis",
        lessons: ["NumPy", "Pandas", "Data cleaning", "Exploratory analysis"]
      },
      {
        module: "Statistics",
        lessons: ["Descriptive stats", "Inferential stats", "Hypothesis testing", "Probability"]
      },
      {
        module: "Machine Learning",
        lessons: ["Supervised learning", "Unsupervised learning", "Model evaluation", "Feature engineering"]
      },
      {
        module: "Visualization & Projects",
        lessons: ["Matplotlib", "Seaborn", "Plotly", "Capstone project"]
      }
    ]
  }
];
