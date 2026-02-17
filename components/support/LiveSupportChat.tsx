import React, { useState } from "react";

interface Message {
  id: number;
  text: string;
  time: string;
  sender: "support" | "user";
}

const LiveSupportChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! How can we help you today?",
      time: "10:30 AM",
      sender: "support",
    },
    {
      id: 2,
      text: "I have a question about my recent order.",
      time: "10:32 AM",
      sender: "user",
    },
    {
      id: 3,
      text: "I'd be happy to help! Could you provide your order number?",
      time: "10:33 AM",
      sender: "support",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: input,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sender: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <section className="w-full p-6 sm:p-8 lg:p-9 bg-[#222222] rounded-[24px] border border-[#FAFAFA1A] flex flex-col gap-8">
      
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-neutral-50 font-hk">
          Live Support Chat
        </h2>
        <p className="text-neutral-50/60 text-base sm:text-lg font-medium font-hk">
          Chat with our support team in real-time
        </p>
      </div>

      {/* Chat Messages */}
      <div className="flex flex-col gap-6 p-6 rounded-xl outline outline-1 outline-neutral-50/10 max-h-[400px] overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-xl text-base sm:text-lg font-medium font-hk ${
                msg.sender === "user"
                  ? "bg-blue-600 text-neutral-50"
                  : "bg-neutral-800 outline outline-1 outline-neutral-50/10 text-neutral-50"
              }`}
            >
              <p>{msg.text}</p>
              <span
                className={`block mt-1 text-sm ${
                  msg.sender === "user"
                    ? "text-neutral-50/70"
                    : "text-neutral-50/30"
                }`}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="flex gap-3 items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-3 bg-neutral-800 rounded-xl outline outline-1 outline-neutral-50/10 text-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <button
          onClick={handleSend}
          className="px-4 py-3 bg-blue-600 rounded-xl text-neutral-50 font-semibold font-hk hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default LiveSupportChat;
