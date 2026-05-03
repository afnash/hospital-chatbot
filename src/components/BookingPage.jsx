import { useState } from 'react';

// --- Local Shadcn-like Components ---
const Card = ({ children, className = '' }) => (
  <div className={`rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`font-semibold leading-none tracking-tight text-lg ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80',
    secondary: 'border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80',
    outline: 'text-slate-950 border-slate-200',
  };
  return (
    <div className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

const Separator = ({ className = '', orientation = 'horizontal' }) => (
  <div className={`shrink-0 bg-slate-200 ${orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'} ${className}`} />
);

const Button = ({ children, variant = 'default', size = 'default', className = '', ...props }) => {
  const variants = {
    default: 'bg-slate-900 text-slate-50 hover:bg-slate-900/90',
    destructive: 'bg-red-500 text-slate-50 hover:bg-red-500/90',
    outline: 'border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-100/80',
    ghost: 'hover:bg-slate-100 hover:text-slate-900',
  };
  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-8 rounded-md px-3 text-xs',
    lg: 'h-12 rounded-md px-8',
    icon: 'h-9 w-9',
  };
  return (
    <button 
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function BookingPage({ doctor, onBack }) {
  const [selectedDate, setSelectedDate] = useState('03 May');
  const [selectedSlot, setSelectedSlot] = useState('');
  
  // 'select' | 'form' | 'success'
  const [bookingStep, setBookingStep] = useState('select');
  const [formData, setFormData] = useState({ id: '', name: '', age: '', phone: '' });
  
  // Fallbacks for missing data in JSON
  const experience = doctor.experience || '12 Years';
  const fee = doctor.fee ? `₹ ${doctor.fee}` : '₹ 800';
  const education = doctor.education || [
    { degree: 'MBBS, MD', institution: 'Reputed Medical College', year: '2010' }
  ];
  const awards = doctor.awards || [
    { award: 'Excellence in Healthcare', year: '2022' }
  ];

  const upcomingDays = [
    { day: 'Sun', date: '03 May' },
    { day: 'Mon', date: '04 May' },
    { day: 'Tue', date: '05 May' },
    { day: 'Wed', date: '06 May' },
    { day: 'Thu', date: '07 May' },
    { day: 'Fri', date: '08 May' },
    { day: 'Sat', date: '09 May' },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 pb-24 md:pb-12 font-body-md text-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Button variant="ghost" className="mb-6 gap-2 pl-0 hover:bg-transparent text-slate-500 hover:text-slate-900" onClick={onBack}>
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Back to Search
        </Button>

        {/* Top Header Card */}
        <Card className="mb-8 overflow-hidden relative">
          <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            
            {/* Reduced Image Size */}
            <img 
              src={doctor.image || '/favicon.svg'} 
              alt={doctor.name} 
              className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border bg-slate-50 shrink-0 shadow-sm"
            />
            
            <div className="flex-1 space-y-3">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">{doctor.name}</h1>
                <p className="text-sm text-slate-500 font-medium mt-1">
                  Senior Consultant | {doctor.dept}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{doctor.dept}</Badge>
                <Badge variant="outline">Verified Professional</Badge>
              </div>
            </div>

            <Separator orientation="vertical" className="hidden md:block h-20 self-center mx-4" />

            <div className="flex flex-row md:flex-col gap-6 md:gap-4 w-full md:w-auto">
              <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-2 rounded-md">
                  <span className="material-symbols-outlined text-slate-600 text-[20px]">work_history</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Experience</p>
                  <p className="font-semibold text-sm">{experience}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-2 rounded-md">
                  <span className="material-symbols-outlined text-slate-600 text-[20px]">payments</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Consultation Fee</p>
                  <p className="font-semibold text-sm">{fee}</p>
                </div>
              </div>
            </div>

            <Button variant="outline" size="icon" className="absolute top-6 right-6 hidden md:flex rounded-full">
              <span className="material-symbols-outlined text-[18px]">share</span>
            </Button>
          </div>
        </Card>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (Details) */}
          <div className="lg:col-span-7 space-y-6">
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-[20px]">person</span>
                  About
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm leading-relaxed text-slate-600 whitespace-pre-wrap">
                  {doctor.description}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-[20px]">school</span>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col">
                    <p className="font-medium text-sm text-slate-900">{edu.degree}</p>
                    <p className="text-sm text-slate-500">{edu.institution}, {edu.year}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-[20px]">workspace_premium</span>
                  Awards & Accolades
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {awards.map((aw, idx) => (
                  <div key={idx} className="flex flex-col">
                    <p className="font-medium text-sm text-slate-900">{aw.award}</p>
                    <p className="text-sm text-slate-500">{aw.year}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

          </div>

          {/* Right Column (Booking Widget) */}
          <div className="lg:col-span-5">
            <Card className="md:sticky md:top-28">
              <CardHeader>
                <CardTitle>Schedule Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                
                <div className="flex items-center justify-between mb-4 mt-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                  </Button>
                  <p className="font-semibold text-sm text-slate-900">May 2026</p>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                  </Button>
                </div>

                {/* Days Selector */}
                <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
                  {upcomingDays.map((d, i) => {
                    const isActive = selectedDate === d.date;
                    return (
                      <div 
                        key={i} 
                        onClick={() => setSelectedDate(d.date)}
                        className={`min-w-[72px] py-2 border rounded-md text-center cursor-pointer transition-colors shadow-sm ${isActive ? 'bg-slate-900 border-slate-900' : 'bg-white border-slate-200 hover:border-slate-400'}`}
                      >
                        <p className={`text-[10px] font-medium uppercase tracking-wider ${isActive ? 'text-slate-50' : 'text-slate-500'}`}>{d.day}</p>
                        <p className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-slate-900'}`}>{d.date}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Slots Selector */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-slate-700 mb-3">Available Slots</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    {(() => {
                      const generatedSlots = [];
                      doctor.available_slots.forEach(range => {
                        const [start, end] = range.split('-');
                        if (start && end) {
                          const parseTimeToMinutes = (t) => {
                            const [h, m] = t.trim().split(':').map(Number);
                            return h * 60 + m;
                          };
                          const startMins = parseTimeToMinutes(start);
                          const endMins = parseTimeToMinutes(end);
                          
                          for (let m = startMins; m < endMins; m += 20) {
                            const hStr = Math.floor(m / 60).toString().padStart(2, '0');
                            const mStr = (m % 60).toString().padStart(2, '0');
                            generatedSlots.push(`${hStr}:${mStr}`);
                          }
                        } else {
                          generatedSlots.push(range);
                        }
                      });
                      
                      return generatedSlots.map((slot, idx) => {
                        const isActive = selectedSlot === slot;
                        // Make specific slots red and unclickable, while keeping green ones clickable
                        const isUnbookable = idx === 1 || idx === 5;
                        
                        let baseClasses = "py-2 px-2 rounded-full border-2 text-[13px] font-semibold transition-all duration-200 shadow-sm flex items-center justify-center gap-1.5 ";
                        
                        if (isUnbookable) {
                          baseClasses += "border-red-400 bg-red-50 text-red-400 cursor-not-allowed opacity-60";
                        } else if (isActive) {
                          baseClasses += "bg-green-600 border-green-600 text-white cursor-pointer hover:scale-105 active:scale-95";
                        } else {
                          baseClasses += "bg-white border-green-500 text-green-700 hover:bg-green-50 cursor-pointer hover:scale-105 active:scale-95";
                        }

                        return (
                          <button 
                            key={idx}
                            disabled={isUnbookable}
                            onClick={() => setSelectedSlot(slot)}
                            className={baseClasses}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${isUnbookable ? 'bg-red-400' : (isActive ? 'bg-white' : 'bg-green-500')}`}></span>
                            {slot}
                          </button>
                        );
                      });
                    })()}
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full" 
                    size="lg"
                    disabled={!selectedDate || !selectedSlot}
                    onClick={() => setBookingStep('form')}
                  >
                    Book Now
                  </Button>
                  <Button variant="secondary" className="w-full" size="lg">
                    Request A Call Back
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Overlay Modal for Form and Success */}
      {(bookingStep === 'form' || bookingStep === 'success') && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          
          {bookingStep === 'form' && (
            <Card className="w-full max-w-md shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              <CardHeader className="border-b bg-slate-50/50 pb-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Patient Details</CardTitle>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setBookingStep('select')}>
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-5">
                <div className="bg-white p-4 rounded-lg border border-slate-200 text-sm space-y-2 shadow-sm">
                  <div className="flex justify-between"><span className="text-slate-500 font-medium">Doctor</span><span className="font-semibold text-slate-900">{doctor.name}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500 font-medium">Department</span><span className="font-semibold text-slate-900">{doctor.dept}</span></div>
                  <Separator className="my-2" />
                  <div className="flex justify-between"><span className="text-slate-500 font-medium">Date</span><span className="font-bold text-primary">{selectedDate}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500 font-medium">Time</span><span className="font-bold text-primary">{selectedSlot}</span></div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 block">Hospital ID No <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <input 
                      type="text" 
                      placeholder="e.g. HS-12345"
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow bg-white" 
                      value={formData.id} 
                      onChange={e => setFormData({...formData, id: e.target.value})} 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 block">Full Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow bg-white" 
                      value={formData.name} 
                      onChange={e => setFormData({...formData, name: e.target.value})} 
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1/3">
                      <label className="text-xs font-bold text-slate-700 mb-1.5 block">Age <span className="text-red-500">*</span></label>
                      <input 
                        type="number" 
                        placeholder="Years"
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow bg-white" 
                        value={formData.age} 
                        onChange={e => setFormData({...formData, age: e.target.value})} 
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-xs font-bold text-slate-700 mb-1.5 block">Phone Number <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        inputMode="numeric"
                        placeholder="+91 xxxxx xxxxx"
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow bg-white" 
                        value={formData.phone} 
                        onChange={e => setFormData({...formData, phone: e.target.value})} 
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <Button variant="outline" className="w-full" onClick={() => setBookingStep('select')}>Cancel</Button>
                  <Button 
                    className="w-full" 
                    disabled={!formData.name || !formData.age || !formData.phone}
                    onClick={() => setBookingStep('success')}
                  >
                    Confirm Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {bookingStep === 'success' && (
            <Card className="w-full max-w-sm shadow-2xl border-green-200 animate-in fade-in zoom-in-95 duration-200">
              <CardContent className="pt-10 pb-8 text-center flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 border-8 border-green-50">
                  <span className="material-symbols-outlined text-[40px]">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Booking Confirmed!</h3>
                <p className="text-[15px] leading-relaxed text-slate-600 mb-8 px-4">
                  Your appointment is successfully confirmed for <br/>
                  <strong className="text-slate-900">{formData.name}</strong> on <strong className="text-slate-900">{selectedDate}</strong> at <strong className="text-slate-900">{selectedSlot}</strong>.
                </p>
                <Button className="w-full max-w-[200px]" size="lg" onClick={onBack}>
                  Done
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
