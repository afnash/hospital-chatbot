export default function Testimonials() {
  const reviews = [
    {
      text: "\"The care I received at St. Antony was exceptional. The staff was incredibly attentive during my surgery and recovery. Truly a world-class experience.\"",
      name: "Johnathon Miller",
      type: "Cardiac Patient"
    },
    {
      text: "\"Best pediatric department in the region. They made my daughter feel so comfortable during her stay. I wouldn't trust any other hospital.\"",
      name: "Sarah Jenkins",
      type: "Parent"
    },
    {
      text: "\"Extremely professional and highly efficient. The booking process was seamless and the facility is spotless. High recommendations.\"",
      name: "Robert Chen",
      type: "Neurology Patient"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-h2 text-h2 text-primary">Patient Stories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="flex text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="font-body-md text-on-surface mb-8 italic">{rev.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                <div>
                  <p className="font-bold text-primary">{rev.name}</p>
                  <p className="text-xs text-on-surface-variant">{rev.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
