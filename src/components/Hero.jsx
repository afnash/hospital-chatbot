export default function Hero() {
  return (
    <section className="relative min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-50 select-none border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-20 z-10">
        
        {/* Text Area */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-50 border border-blue-100 text-blue-800 font-medium tracking-wider text-xs w-fit">
            <span className="material-symbols-outlined text-sm text-blue-600">verified</span>
            St. Antony Medical Excellence
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Advanced Healthcare. <br/>
              Compassionate Service.
            </h1>
            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-lg">
              At St. Antony Hospital, we combine trusted clinical expertise with state-of-the-art medical technology to deliver high-quality patient care.
            </p>
          </div>

          {/* Call to Actions & Key Highlights */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <a href="#services" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow-sm text-sm transition-all flex items-center gap-2">
              Explore Our Services
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
            <a href="#doctors" className="px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 font-semibold rounded text-sm text-slate-800 shadow-sm transition-all flex items-center gap-2">
              Meet Our Specialists
            </a>
          </div>

          {/* Clean clinical stats */}
          <div className="grid grid-cols-3 border-t border-slate-200 pt-6 gap-4 w-full">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">25+</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Specialties</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">500+</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Specialists</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">24/7</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Emergency Care</p>
            </div>
          </div>
        </div>

        {/* Dynamic Image / Feature Showcase */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
            <img 
              className="w-full h-full object-cover" 
              alt="A brightly lit, modern hospital reception area at St. Antony Hospital" 
              src="/hero.png" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
