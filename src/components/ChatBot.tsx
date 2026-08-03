"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Loader2 } from "lucide-react";
import api from "@/service/api";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const WELCOME: Message = {
  role: "assistant",
  content:
    "Hi! I'm Opar AI  — ask me anything about Rijoan Rashid Opar, his skills or projects.",
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  // Focus the input when the panel opens
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await api.post("/chat", { message: text });
      const reply: string = res.data?.reply ?? "Sorry, I couldn't respond.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Oops! Something went wrong. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end">
      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="mb-3 flex h-[70vh] max-h-[540px] w-[calc(100vw-2rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-yellow-400/25 bg-white shadow-2xl shadow-yellow-500/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-yellow-500/20 bg-yellow-400 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg shadow-yellow-600/30">
                  <Bot className="h-5 w-5 text-black" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-black">
                    Opar AI
                  </p>
                  <p className="flex items-center gap-1 text-xs font-semibold text-black/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 ring-2 ring-emerald-500/30" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-1.5 text-black/60 transition hover:bg-black/10 hover:text-black"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto bg-white px-4 py-4"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "rounded-br-sm bg-yellow-400 text-black shadow-lg shadow-yellow-500/20"
                        : "rounded-bl-sm border border-yellow-400/40 bg-yellow-50 text-black"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-yellow-400/40 bg-yellow-50 px-3.5 py-3">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-yellow-400 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-yellow-400 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-yellow-400" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-yellow-200 bg-white px-3 py-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm text-black outline-none transition placeholder:text-black/40 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black shadow-lg shadow-yellow-500/30 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black shadow-lg shadow-yellow-500/40 ring-4 ring-yellow-400/15 transition hover:shadow-xl hover:shadow-yellow-500/50"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-7 w-7" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Bot className="h-7 w-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ChatBot;
