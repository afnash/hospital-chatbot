import { useState, useRef, useEffect } from 'react';
import docData from '../data/doc.json';

export default function Chatbot({ onBookNow }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const initialMessages = [
    { sender: 'bot', text: 'Hello! How can I help you today?' },
    { 
      sender: 'bot', 
      type: 'options',
      options: ['Book an appointment', 'Health checkup', 'Request a call back', 'Search a Doctor']
    }
  ];

  const [messages, setMessages] = useState(initialMessages);
  const messagesEndRef = useRef(null);
  const scrollRef = useRef({});

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleCloseChat = () => {
    setIsOpen(false);
    setTimeout(() => setMessages(initialMessages), 300);
  };

  const handleOptionClick = (option, type) => {
    // Add user message
    const newMessages = [...messages, { sender: 'user', text: option }];

    if (type === 'options') {
      if (option === 'Book an appointment') {
        newMessages.push({ sender: 'bot', text: 'Please select a speciality:' });
        newMessages.push({
          sender: 'bot',
          type: 'specialties',
          options: [
            'General Medicine', 'Cardiology', 'Orthopedics', 'Pediatrics', 
            'Gynecology', 'Dermatology', 'ENT (Ear, Nose & Throat)', 
            'Neurology', 'Gastroenterology', 'Emergency / Casualty'
          ]
        });
      } else {
        newMessages.push({ sender: 'bot', text: `You selected "${option}". Our team will contact you shortly.` });
      }
    } else if (type === 'specialties') {
      // Map 'ENT (Ear, Nose & Throat)' to 'ENT'
      const searchDept = option === 'ENT (Ear, Nose & Throat)' ? 'ENT' : option;
      const dept = docData.departments.find(d => d.name === searchDept);
      
      if (dept && dept.doctors.length > 0) {
        newMessages.push({ sender: 'bot', text: `Here are the available doctors for ${option}:` });
        newMessages.push({
          sender: 'bot',
          type: 'doctors',
          doctors: dept.doctors
        });
      } else {
        newMessages.push({ sender: 'bot', text: `Sorry, we couldn't find any available doctors for ${option} at the moment.` });
      }
    }
    
    setMessages(newMessages);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      {/* Chat Window */}
      <div 
        className={`w-[400px] bg-white rounded-3xl shadow-2xl border border-outline-variant flex flex-col overflow-hidden origin-bottom-right transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
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
          <button className="text-white/60 hover:text-white transition-colors" onClick={handleCloseChat}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="h-[520px] overflow-y-auto p-6 bg-surface-container-lowest flex flex-col gap-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.sender === 'user' ? 'ml-auto flex-row-reverse max-w-[85%]' : 'max-w-[95%] min-w-[85%]'}`}>
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-secondary-fixed-dim flex-shrink-0 flex items-center justify-center mt-1">
                  <span className="material-symbols-outlined text-primary text-sm">smart_toy</span>
                </div>
              )}
              
              <div className="flex flex-col gap-2 w-full">
                {msg.text && (
                  <div className={`${msg.sender === 'user' ? 'bg-secondary text-white rounded-bl-xl' : 'bg-surface-container-low text-on-surface border border-outline-variant rounded-br-xl'} px-5 py-3.5 rounded-t-xl text-[14px] leading-relaxed shadow-sm w-fit`}>
                    <p className="text-body-md text-inherit">{msg.text}</p>
                  </div>
                )}
                
                {(msg.type === 'options' || msg.type === 'specialties') && (
                  <div className="flex flex-wrap justify-start gap-2 mt-1">
                    {msg.options.map((opt, oIdx) => (
                      <button 
                        key={oIdx}
                        onClick={() => handleOptionClick(opt, msg.type)}
                        className="bg-surface text-on-surface border border-outline-variant hover:bg-secondary hover:text-white hover:border-secondary transition-all px-4 py-2.5 rounded-full text-[13px] font-medium shadow-sm"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {msg.type === 'doctors' && (
                  <div className="relative mt-2">
                    <div 
                      ref={(el) => (scrollRef.current[idx] = el)}
                      className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pr-8"
                    >
                      {msg.doctors.map((doc, dIdx) => (
                        <div key={dIdx} className="snap-center shrink-0 w-[260px] min-h-[180px] bg-white border border-outline-variant rounded-2xl p-5 shadow-sm flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <img src={doc.image || '/favicon.svg'} alt={doc.name} className="w-14 h-14 rounded-full object-cover border border-slate-100 bg-slate-50 shrink-0 shadow-sm" />
                            <div className="overflow-hidden">
                              <p className="font-bold text-primary text-[15px] truncate">{doc.name}</p>
                              <p className="text-[11px] text-secondary font-semibold uppercase tracking-wider truncate mt-0.5">{doc.dept}</p>
                            </div>
                          </div>
                          <div className="space-y-2.5 text-[13px] text-on-surface-variant bg-surface-container-lowest rounded-xl p-3 border border-slate-50 grow flex flex-col justify-center">
                            <p className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary/80">calendar_month</span> <span className="truncate font-medium">{doc.available_days.join(', ')}</span></p>
                            <p className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary/80">schedule</span> <span className="truncate font-medium">{doc.available_slots.join(', ')}</span></p>
                          </div>
                          <button 
                            className="w-full bg-secondary text-white py-2.5 rounded-xl text-[13px] font-semibold hover:bg-primary hover:shadow-md transition-all mt-auto shrink-0 tracking-wide"
                            onClick={() => {
                              if (onBookNow) {
                                onBookNow(doc.name);
                                handleCloseChat();
                              }
                            }}
                          >
                            Book now
                          </button>
                        </div>
                      ))}
                    </div>
                    {/* Right Arrow Indicator */}
                    {msg.doctors.length > 1 && (
                      <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white via-white/40 to-transparent flex items-center justify-end pointer-events-none rounded-r-2xl pr-1">
                        <button
                          onClick={() => {
                            if (scrollRef.current[idx]) {
                              scrollRef.current[idx].scrollBy({ left: 240, behavior: 'smooth' });
                            }
                          }}
                          className="w-7 h-7 rounded-full bg-white shadow border border-outline-variant flex items-center justify-center text-primary hover:bg-slate-50 pointer-events-auto transition-all cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
          {messages.length > 2 && (
            <div className="flex justify-center mt-2 mb-2">
              <button 
                onClick={() => setMessages(initialMessages)}
                className="flex items-center gap-1.5 bg-error/10 text-error hover:bg-error hover:text-white transition-colors px-3 py-1.5 rounded-full text-[11px] font-semibold shadow-sm border border-error/20"
              >
                <span className="material-symbols-outlined text-[14px]">refresh</span>
                Restart Chat
              </button>
            </div>
          )}
          <div ref={messagesEndRef} />
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
        onClick={() => isOpen ? handleCloseChat() : setIsOpen(true)}
      >
        <span className="material-symbols-outlined text-2xl">{isOpen ? 'close' : 'chat'}</span>
      </button>
    </div>
  );
}
