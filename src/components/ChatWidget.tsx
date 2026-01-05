import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  X,
  Send,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import ChatBubble from './ChatBubble';
import TypingIndicator from './TypingIndicator';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

const FAQ_CHIPS = [
  'What services do you offer?',
  'What are your rates?',
  'Are you available for new projects?',
  'How can I contact you?',
  'What types of projects do you work on?',
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showFAQ, setShowFAQ] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!inputContainerRef.current) return;

    const rect = inputContainerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const formatTimestamp = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
      timestamp: formatTimestamp(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setError(null);
    setIsLoading(true);
    setShowFAQ(false);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text.trim() }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const data = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply || data.message || 'Sorry, I could not process that.',
        isUser: false,
        timestamp: formatTimestamp(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setError(
        'Unable to connect to AI assistant. Please try again later.'
      );
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    sendMessage(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFAQClick = (question: string) => {
    sendMessage(question);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={
          isOpen
            ? { rotate: 90 }
            : { rotate: 0 }
        }
        transition={{ duration: 0.3 }}
        aria-label="Toggle chat"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="text-background relative z-10" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare size={24} className="text-background relative z-10" />
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-40 w-[380px] h-[600px] max-h-[80vh] flex flex-col glass-card shadow-2xl overflow-hidden"
            style={{
              boxShadow:
                '0 0 40px hsl(185 100% 50% / 0.2), 0 0 80px hsl(270 80% 60% / 0.1)',
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-border/50 bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/30 flex items-center justify-center">
                <Sparkles size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm">AI Assistant</h3>
                <p className="text-xs text-muted-foreground">
                  Ask me anything about Abhishekh
                </p>
              </div>
              <motion.div
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center">
                    <Sparkles size={28} className="text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold mb-2">
                    Welcome! How can I help?
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Ask me about services, pricing, availability, or anything
                    else.
                  </p>
                </motion.div>
              )}

              {messages.map((message) => (
                <ChatBubble
                  key={message.id}
                  message={message.text}
                  isUser={message.isUser}
                  timestamp={message.timestamp}
                />
              ))}

              {isLoading && (
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <Sparkles size={16} className="text-secondary" />
                    </motion.div>
                  </div>
                  <div className="bg-muted/50 border border-border/50 rounded-2xl rounded-tl-sm backdrop-blur-md">
                    <TypingIndicator />
                  </div>
                </div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2 px-4 py-3 rounded-xl bg-destructive/10 border border-destructive/30"
                >
                  <AlertCircle size={16} className="text-destructive mt-0.5" />
                  <p className="text-xs text-destructive flex-1">{error}</p>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* FAQ Chips */}
            {showFAQ && messages.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-4 pb-3 flex flex-wrap gap-2"
              >
                {FAQ_CHIPS.map((question, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleFAQClick(question)}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {question}
                  </motion.button>
                ))}
              </motion.div>
            )}

            {/* Input Area */}
            <div className="relative border-t border-border/50 bg-muted/30">
              <div
                ref={inputContainerRef}
                onMouseMove={handleMouseMove}
                className="relative p-4"
              >
                {/* Cursor follow glow */}
                <motion.div
                  className="absolute rounded-full pointer-events-none blur-xl"
                  style={{
                    width: '150px',
                    height: '150px',
                    left: mousePos.x - 75,
                    top: mousePos.y - 75,
                    background:
                      'radial-gradient(circle, hsl(185 100% 50% / 0.15) 0%, transparent 70%)',
                  }}
                />

                <div className="relative flex items-end gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    disabled={isLoading}
                    className="flex-1 px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                    aria-label="Chat message input"
                  />

                  <motion.button
                    onClick={handleSend}
                    disabled={!inputValue.trim() || isLoading}
                    className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Send message"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                    <Send size={18} className="text-background relative z-10" />
                  </motion.button>
                </div>

                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Press <kbd className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs">Enter</kbd> to send, <kbd className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs">Esc</kbd> to close
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
