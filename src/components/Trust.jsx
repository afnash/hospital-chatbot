export default function Trust() {
  const values = [
    {
      icon: "biotech",
      title: "Cutting-Edge Technology",
      desc: "Equipped with the latest robotic surgery systems and diagnostic imaging for pinpoint accuracy."
    },
    {
      icon: "favorite",
      title: "Compassionate Care",
      desc: "Treating every patient like family with empathy, respect, and personalized attention."
    },
    {
      icon: "public",
      title: "Global Standards",
      desc: "Adhering to strict international protocols for hygiene, safety, and clinical outcomes."
    }
  ];

  return (
    <section className="py-20 bg-white text-slate-900 overflow-hidden relative select-none border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Image / Showcase */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <img 
              className="w-full h-full object-cover" 
              alt="Medical staff" 
              src="/trust.png" 
            />
          </div>
        </div>

        {/* Right: Text & Values */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-50 border border-blue-100 text-blue-800 text-xs font-semibold tracking-wider">
              The St. Antony Difference
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Why Patients Choose Us
            </h2>
            <p className="text-slate-500 font-normal text-sm leading-relaxed max-w-xl">
              We combine trusted local healthcare roots with global medical excellence to create a truly supportive healing environment.
            </p>
          </div>

          <div className="space-y-6">
            {values.map((v, i) => (
              <div 
                key={i} 
                className="flex gap-4 p-4 rounded border border-slate-100 bg-slate-50/40 hover:bg-slate-50 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-xl">{v.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-900 mb-0.5 leading-snug">{v.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
