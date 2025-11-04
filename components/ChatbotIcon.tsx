"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Ambil API Key dari environment variable
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

// Cegah error jika API key belum diatur
if (!API_KEY) {
  throw new Error("API key Gemini tidak ditemukan. Pastikan .env.local sudah diatur dengan NEXT_PUBLIC_GEMINI_API_KEY.");
}

// Inisialisasi Google Generative AI
const genAI = new GoogleGenerativeAI(API_KEY || "");

// Mendapatkan model chat
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      content: "Halo! Ada yang bisa saya bantu? 🤖",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mengirim pesan ke Gemini
  const sendMessage = async () => {
    if (!input.trim()) return;

    // Tambahkan pesan pengguna ke state
    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await model.generateContent(input);
      const response = await result.response;
      const text = response.text();

      // Tambahkan pesan balasan dari Gemini ke state
      const geminiMessage = { role: "model", content: text };
      setMessages((prevMessages) => [...prevMessages, geminiMessage]);
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      // Tampilkan pesan error kepada pengguna
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "model", content: "Maaf, terjadi kesalahan. Silakan coba lagi." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll ke bagian bawah setiap kali ada pesan baru
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isLoading) {
      sendMessage();
    }
  };

  return (
    <div className="w-full lg:container mx-auto px-5 lg:px-0 bg-amber-900 h-0 relative">
      {/* Chat Box */}
      <div
        className={`transition-all duration-700 absolute left-5 right-5 sm:left-auto bottom-5 ${
          isOpen ? "h-[500px]" : "h-0"
        } rounded-2xl overflow-hidden shadow-lg flex flex-col bg-white sm:w-96`}
      >
        {/* Header */}
        <div className="bg-red-600 text-white px-4 py-3 flex justify-between items-center">
          <h2 className="font-medium">AI Chatbot</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:opacity-80 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Chat Body */}
        <div className="flex-1 p-4 overflow-y-auto bg-white">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-lg p-3 text-sm ${
                    msg.role === "user"
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
          {isLoading && (
            <div className="flex justify-start mt-4">
              <div className="bg-gray-200 text-gray-800 p-3 rounded-lg text-sm max-w-[75%] animate-pulse">
                Mengetik...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Tanya apapun..."
              className="flex-1 border rounded-full px-4 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-red-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              className={`py-2 px-5 rounded-full text-white transition ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              }`}
              disabled={isLoading}
            >
              ➤
            </button>
          </div>
        </div>
      </div>

      {/* Floating Icon */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`transition-all duration-700 cursor-pointer inline-block will-change-transform animate-[shakeCycle_4s_ease-in-out_infinite] absolute right-5 ${
          isOpen ? "bottom-20" : "bottom-5"
        }`}
      >
        <Image
          src="/technical-support.png"
          alt="Chatbot"
          width={75}
          height={75}
          className="drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default Component;
