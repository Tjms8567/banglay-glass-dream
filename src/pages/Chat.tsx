import { useState, useRef, useEffect } from 'react';
import { Send, Bot } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { initialChatMessages, mockAIResponses, ChatMessage } from '@/data/mockAIResponses';

const Chat = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [messages, setMessages] = useState<ChatMessage[]>(initialChatMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Show typing indicator
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      
      // Get random AI response
      const randomResponse = mockAIResponses[Math.floor(Math.random() * mockAIResponses.length)];
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: language === 'en' ? randomResponse.en : randomResponse.bn,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <GlassCard className="h-[calc(100vh-200px)] flex flex-col" hover={false}>
          {/* Chat Header */}
          <div className="p-6 border-b border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold">
                {t('BanglaySikhun AI Assistant', 'বাংলায়শিখুন এআই সহায়ক')}
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-muted-foreground">{t('Online', 'অনলাইন')}</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} fade-in`}
              >
                <div
                  className={`max-w-[70%] ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : theme === 'dark'
                      ? 'glass-dark'
                      : 'glass-light'
                  } rounded-lg p-4`}
                >
                  {message.sender === 'ai' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-4 h-4 text-primary" />
                      <span className="text-xs font-semibold text-primary">
                        {t('AI Assistant', 'এআই সহায়ক')}
                      </span>
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <p className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start fade-in">
                <div className={`${theme === 'dark' ? 'glass-dark' : 'glass-light'} rounded-lg p-4`}>
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-primary" />
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full typing-dot"></div>
                      <div className="w-2 h-2 bg-primary rounded-full typing-dot"></div>
                      <div className="w-2 h-2 bg-primary rounded-full typing-dot"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-border">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('Type your message...', 'আপনার বার্তা টাইপ করুন...')}
                className={`flex-1 px-4 py-3 rounded-lg ${
                  theme === 'dark' ? 'glass-dark' : 'glass-light'
                } focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              <Button onClick={handleSendMessage} size="lg" disabled={!inputValue.trim()}>
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Chat;
