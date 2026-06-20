"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, AlertTriangle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    role: "user" | "bot";
    content: string;
    citations?: string[];
}

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: inputValue.trim(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsLoading(true);

        try {
            const response = await fetch("https://qyggakfcew.ap-south-1.awsapprunner.com/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: userMessage.content }),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch response");
            }

            const data = await response.json();

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "bot",
                content: data.answer,
                citations: data.citations,
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Chat error:", error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "bot",
                content: "I apologize, but I'm having trouble connecting to the server right now. Please try again later.",
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl hover:from-red-500 hover:to-red-400 transition-all duration-300 group"
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageCircle className="w-6 h-6" />
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-100"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-red-600 to-red-500 p-4 text-white flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <Bot className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Dr. AmbAnaX</h3>
                                <p className="text-xs text-red-100 opacity-90">AI Medical Assistant</p>
                            </div>
                        </div>

                        {/* Content Area */}
                        {!hasAcceptedDisclaimer ? (
                            // Disclaimer View
                            <div className="flex-1 p-6 flex flex-col items-center justify-center text-center bg-gray-50">
                                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-amber-600">
                                    <AlertTriangle className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Medical Disclaimer</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    This AI assistant provides information for educational purposes only. It is <span className="font-bold text-gray-800">not a substitute for professional medical advice</span>, diagnosis, or treatment.
                                    <br /><br />
                                    Always consult with a qualified healthcare provider for medical concerns.
                                </p>
                                <button
                                    onClick={() => setHasAcceptedDisclaimer(true)}
                                    className="w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-red-500 hover:to-red-400 transition-all duration-300 transform hover:-translate-y-0.5"
                                >
                                    I Understand, Start Chat
                                </button>
                            </div>
                        ) : (
                            // Chat View
                            <>
                                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 scrollbar-thin scrollbar-thumb-gray-200">
                                    {/* Welcome Message */}
                                    {messages.length === 0 && (
                                        <div className="flex justify-start">
                                            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[85%] text-gray-700">
                                                <p>Hello! I am AmbAnaX&apos;s AI assistant. I can help answer medical questions based on standard protocols.</p>
                                                <p className="mt-2 text-xs text-gray-400 italic">Please remember I am an AI, not a doctor.</p>
                                            </div>
                                        </div>
                                    )}

                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={cn(
                                                "flex w-full",
                                                msg.role === "user" ? "justify-end" : "justify-start"
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    "max-w-[85%] p-3 rounded-2xl text-sm shadow-sm",
                                                    msg.role === "user"
                                                        ? "bg-gradient-to-br from-red-600 to-red-500 text-white rounded-br-none"
                                                        : "bg-white border border-gray-100 text-gray-700 rounded-tl-none"
                                                )}
                                            >
                                                <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                                                {msg.citations && msg.citations.length > 0 && (
                                                    <div className="mt-2 pt-2 border-t border-gray-100/20 text-xs opacity-70">
                                                        <span className="font-semibold">Sources:</span> {msg.citations.join(", ")}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    {isLoading && (
                                        <div className="flex justify-start">
                                            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                                                <Loader2 className="w-5 h-5 text-red-500 animate-spin" />
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input Area */}
                                <div className="p-4 bg-white border-t border-gray-100">
                                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-xl border border-gray-200 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500 transition-all">
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            placeholder="Ask a medical question..."
                                            className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder:text-gray-400 px-2"
                                        />
                                        <button
                                            onClick={handleSendMessage}
                                            disabled={isLoading || !inputValue.trim()}
                                            className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
