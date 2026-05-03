export default function Stats() {
  return (
    <section className="py-16 bg-white border-y border-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-4xl font-extrabold text-primary">25+</span>
            <span className="font-manrope text-on-surface-variant font-medium">Specializations</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2 border-x border-slate-100">
            <span className="text-4xl font-extrabold text-primary">500+</span>
            <span className="font-manrope text-on-surface-variant font-medium">Expert Doctors</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-4xl font-extrabold text-primary">24/7</span>
            <span className="font-manrope text-on-surface-variant font-medium">Emergency Care</span>
          </div>
        </div>
      </div>
    </section>
  );
}
