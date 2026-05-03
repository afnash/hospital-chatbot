export default function Testimonials() {
  const reviews = [
    {
      text: "\"The care I received at St. Antony was completely exceptional. The staff was incredibly attentive during my recovery. Truly a world-class experience.\"",
      name: "Johnathon Miller",
      type: "Cardiac Patient",
      initials: "JM",
      color: "from-blue-100 to-sky-100 text-blue-800"
    },
    {
      text: "\"Best pediatric department in the region. They made my daughter feel so comfortable during her stay. I wouldn't trust any other hospital.\"",
      name: "Sarah Jenkins",
      type: "Parent",
      initials: "SJ",
      color: "from-indigo-100 to-purple-100 text-indigo-800"
    },
    {
      text: "\"Extremely professional and highly efficient. The booking process was seamless and the facility is spotless. Highest recommendation.\"",
      name: "Robert Chen",
      type: "Neurology Patient",
      initials: "RC",
      color: "from-rose-100 to-amber-100 text-rose-800"
    }
  ];

  return (
    <section className="py-28 bg-slate-50/20 relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-extrabold uppercase tracking-widest">
            Kind Words
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Patient & Family Stories
          </h2>
          <p className="text-slate-500 font-medium text-sm leading-relaxed">
            Read how our dedicated team and world-class care transforms lives every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-6 bg-amber-50/40 w-fit px-2.5 py-1 rounded-full border border-amber-100/50">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 italic">
                  {rev.text}
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-slate-50/80 pt-5">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr flex items-center justify-center font-bold text-sm tracking-wide shadow-sm border border-white/20 ${rev.color}`}>
                  {rev.initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-[15px]">{rev.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{rev.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
