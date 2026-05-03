import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      {/* Chat Window */}
      <div 
        className={`w-[380px] bg-white rounded-2xl shadow-2xl border border-outline-variant flex flex-col overflow-hidden origin-bottom-right transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
        id="chat-window"
      >
        <div className="bg-primary px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-secondary-container rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-on-secondary-container text-xl">support_agent</span>
            </div>
            <div>
              <h5 className="text-white font-manrope font-semibold text-sm">St. Antony Assistant</h5>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-blue-100/70 text-[10px] uppercase font-bold tracking-wider">Online</span>
              </div>
            </div>
          </div>
          <button className="text-white/60 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="h-[400px] overflow-y-auto p-6 bg-surface-container-lowest flex flex-col gap-4">
          <div className="flex gap-3 max-w-[85%]">
            <div className="w-8 h-8 rounded-full bg-secondary-fixed-dim flex-shrink-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-sm">smart_toy</span>
            </div>
            <div className="bg-surface-container-low px-4 py-3 rounded-2xl rounded-tl-none border border-outline-variant">
              <p className="text-body-md text-on-surface text-sm">Hello! How can I help you today?</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white border-t border-outline-variant">
          <div className="relative flex items-center">
            <input className="w-full bg-surface-container-low border border-outline-variant rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" placeholder="Type your message..." type="text" />
            <button className="absolute right-2 p-2 text-secondary hover:bg-secondary/10 rounded-lg transition-colors">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
          <p className="text-[10px] text-center text-on-surface-variant mt-2 font-medium">Typical response time: &lt; 1 min</p>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        className="w-14 h-14 bg-secondary text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-symbols-outlined text-2xl">{isOpen ? 'close' : 'chat'}</span>
      </button>
    </div>
  );
}
