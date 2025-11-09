export const mockAIResponses = [
  {
    en: "Great choice! I recommend our 'Web Development with React' course. It's perfect for beginners and taught in Bengali. The course covers everything from basics to building real projects.",
    bn: "দুর্দান্ত পছন্দ! আমি আমাদের 'রিয়েক্ট দিয়ে ওয়েব ডেভেলপমেন্ট' কোর্সটি সুপারিশ করছি। এটি নতুনদের জন্য পারফেক্ট এবং বাংলায় পড়ানো হয়।"
  },
  {
    en: "For digital marketing, I suggest starting with our 'Digital Marketing Bangla' course. It covers SEO, social media marketing, and paid advertising. Most students complete it in 2-3 weeks.",
    bn: "ডিজিটাল মার্কেটিং এর জন্য, আমি আমাদের 'ডিজিটাল মার্কেটিং বাংলা' কোর্স দিয়ে শুরু করার পরামর্শ দিচ্ছি। এতে এসইও, সোশ্যাল মিডিয়া মার্কেটিং এবং পেইড অ্যাডভারটাইজিং অন্তর্ভুক্ত।"
  },
  {
    en: "Based on your career goals, the 'AI & Machine Learning' masterclass would be perfect. It includes hands-on projects and real-world applications. You'll need Python knowledge to get started.",
    bn: "আপনার ক্যারিয়ার লক্ষ্য অনুযায়ী, 'এআই এবং মেশিন লার্নিং' মাস্টারক্লাস পারফেক্ট হবে। এতে হ্যান্ডস-অন প্রজেক্ট এবং বাস্তব-বিশ্বের অ্যাপ্লিকেশন অন্তর্ভুক্ত।"
  },
  {
    en: "I can help you find the perfect course! What are you interested in learning? We have courses in design, development, marketing, and more - all taught in Bengali.",
    bn: "আমি আপনাকে পারফেক্ট কোর্স খুঁজে পেতে সাহায্য করতে পারি! আপনি কী শিখতে আগ্রহী? আমাদের ডিজাইন, ডেভেলপমেন্ট, মার্কেটিং এবং আরও অনেক কোর্স আছে।"
  },
  {
    en: "For video editing, check out our 'Adobe Premiere Pro Masterclass'. You'll learn professional techniques used in the industry. The course is 8 hours long with 42 lectures.",
    bn: "ভিডিও এডিটিং এর জন্য, আমাদের 'অ্যাডোবি প্রিমিয়ার প্রো মাস্টারক্লাস' দেখুন। আপনি ইন্ডাস্ট্রিতে ব্যবহৃত পেশাদার কৌশল শিখবেন।"
  },
  {
    en: "Looking to start programming? Our 'Python Programming Bangla' course is ideal for complete beginners. No prior experience needed - we'll teach you everything from scratch!",
    bn: "প্রোগ্রামিং শুরু করতে চান? আমাদের 'পাইথন প্রোগ্রামিং বাংলা' কোর্স সম্পূর্ণ নতুনদের জন্য আদর্শ। কোনো পূর্ব অভিজ্ঞতার প্রয়োজন নেই!"
  },
  {
    en: "Want to learn design? I recommend starting with 'UI/UX Design Fundamentals' or 'Photoshop for Beginners' depending on your goals. Both courses include practical projects.",
    bn: "ডিজাইন শিখতে চান? আমি 'ইউআই/ইউএক্স ডিজাইন মৌলিক' অথবা 'ফটোশপ শুরু করুন' দিয়ে শুরু করার পরামর্শ দিচ্ছি।"
  },
  {
    en: "Need help with something specific? Feel free to ask about any course, instructor, or topic. I'm here to help you choose the right learning path for your goals!",
    bn: "কোনো নির্দিষ্ট বিষয়ে সাহায্য প্রয়োজন? যেকোনো কোর্স, ইন্সট্রাক্টর বা বিষয় সম্পর্কে জিজ্ঞাসা করুন। আমি এখানে আছি!"
  }
];

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export const initialChatMessages: ChatMessage[] = [
  {
    id: '1',
    text: "Hello! I'm your BanglaySikhun AI assistant. How can I help you today?",
    sender: 'ai',
    timestamp: new Date(Date.now() - 120000)
  },
  {
    id: '2',
    text: "I want to learn web development",
    sender: 'user',
    timestamp: new Date(Date.now() - 60000)
  },
  {
    id: '3',
    text: "Great choice! I recommend our 'Web Development with React' course. It's perfect for beginners and taught in Bengali. The course is 12 hours long and covers everything from React basics to building real projects. Would you like to know more about it?",
    sender: 'ai',
    timestamp: new Date(Date.now() - 30000)
  }
];
