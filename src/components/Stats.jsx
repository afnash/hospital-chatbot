export default function Stats() {
  const points = [
    {
      icon: "diversity_1",
      val: "98.7%",
      label: "Patient Satisfaction",
      desc: "Direct surveys over past 5 years"
    },
    {
      icon: "clinical_trial",
      val: "25+",
      label: "Specialties",
      desc: "Specialized medicine departments"
    },
    {
      icon: "acute",
      val: "A-Grade",
      label: "Clinical Safety",
      desc: "Top-tier hygienic & safety protocols"
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center text-center p-6 rounded border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center mb-4 border border-blue-100 text-blue-600">
                <span className="material-symbols-outlined text-2xl">{p.icon}</span>
              </div>
              <span className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">{p.val}</span>
              <span className="font-semibold text-slate-800 text-sm mb-1">{p.label}</span>
              <span className="text-slate-500 text-xs font-normal">{p.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
