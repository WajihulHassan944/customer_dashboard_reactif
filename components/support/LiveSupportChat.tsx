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
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M17.105 0.421057C16.9159 0.233224 16.6786 0.101178 16.4192 0.0394311C16.1599 -0.0223156 15.8885 -0.0113729 15.635 0.0710566L1.00503 4.95106C0.733698 5.03703 0.493932 5.20149 0.316014 5.42365C0.138095 5.64581 0.0300049 5.91572 0.00539418 6.19928C-0.0192166 6.48284 0.0407563 6.76733 0.177738 7.01682C0.31472 7.26632 0.522567 7.46962 0.775027 7.60106L6.84503 10.6011L9.84503 16.6911C9.96561 16.9294 10.1501 17.1296 10.3779 17.2691C10.6058 17.4086 10.8679 17.482 11.135 17.4811H11.235C11.5211 17.46 11.7943 17.3534 12.019 17.175C12.2437 16.9967 12.4095 16.7549 12.495 16.4811L17.445 1.89106C17.5334 1.63899 17.5484 1.367 17.4882 1.10675C17.428 0.846508 17.2951 0.608714 17.105 0.421057ZM1.62503 6.33106L14.395 2.07106L7.30503 9.16106L1.62503 6.33106ZM11.205 15.9011L8.36503 10.2211L15.455 3.13106L11.205 15.9011Z" fill="#FAFAFA"/>
</svg>
        </button>
      </div>
    </section>
  );
};

export default LiveSupportChat;
