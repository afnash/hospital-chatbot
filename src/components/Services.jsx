export default function Services() {
  const services = [
    {
      title: "Cardiology",
      desc: "Advanced heart care including diagnostics, surgery, and rehabilitation.",
      icon: "cardiology"
    },
    {
      title: "Orthopedics",
      desc: "Expert treatment for bone, joint, and musculoskeletal conditions.",
      icon: "orthopedics"
    },
    {
      title: "Pediatrics",
      desc: "Dedicated pediatric care focusing on children's health and wellness.",
      icon: "child_care"
    },
    {
      title: "Neurology",
      desc: "Comprehensive neurological care for complex brain and nerve disorders.",
      icon: "neurology"
    }
  ];

  return (
    <section className="py-24 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 text-center">
          <h2 className="font-h2 text-h2 text-primary mb-4">Our Specialized Services</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-body-md">Comprehensive medical solutions tailored to your unique needs, delivered by international experts.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-surface-container rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{svc.icon}</span>
              </div>
              <h3 className="font-h3 text-h3 text-primary mb-3">{svc.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{svc.desc}</p>
              <a className="inline-flex items-center text-secondary font-semibold text-sm hover:gap-2 transition-all" href="#">
                Learn More <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
