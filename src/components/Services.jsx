export default function Services() {
  const services = [
    {
      title: "Cardiology",
      desc: "Comprehensive heart care featuring advanced non-invasive diagnostics, surgery, and tailored rehabilitation.",
      icon: "favorite"
    },
    {
      title: "Orthopedics",
      desc: "Expert, advanced clinical treatments for all bone, joint, and musculoskeletal conditions.",
      icon: "airline_seat_flat"
    },
    {
      title: "Pediatrics",
      desc: "Specialized, compassionate pediatric care ensuring your child's complete health and wellness.",
      icon: "child_care"
    },
    {
      title: "Neurology",
      desc: "Complete neurological solutions for intricate brain, spine, and complex nervous system disorders.",
      icon: "psychology"
    }
  ];

  return (
    <section className="py-20 bg-slate-50/40 relative border-b border-slate-200" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-50 border border-blue-100 text-blue-800 text-xs font-semibold tracking-wider">
            Comprehensive Specialties
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Our Medical Services
          </h2>
          <p className="text-slate-500 font-normal text-sm leading-relaxed max-w-lg mx-auto">
            World-class medical solutions tailored precisely to your distinct needs, delivered by certified clinical experts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((svc, i) => (
            <div 
              key={i} 
              className="bg-white p-6 rounded border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200 group flex flex-col justify-between min-h-[280px] select-none"
            >
              <div>
                <div className="w-12 h-12 rounded bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 text-blue-600">
                  <span className="material-symbols-outlined text-2xl">{svc.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{svc.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4 font-normal">
                  {svc.desc}
                </p>
              </div>
              <a className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 text-xs tracking-wide transition-all" href="#">
                Learn More
                <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
