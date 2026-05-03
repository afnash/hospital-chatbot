export default function Trust() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-container/10 -skew-x-12 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <img className="rounded-2xl shadow-2xl w-full h-[500px] object-cover" alt="Medical staff" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD16xa_qVMld9JzavScwLXyHNtrObLK6p93M9IZz_9zuXLnqraXMSt7LkQxaFQQkqgQmLL1sHe2w7HcIRm2fiovdXGzpxxQgpIqvWZjiGGLsUFTqHTHGrCi7ZKyNg2v_F0lLY77cA5Ld4hPr7NKgTCkErZ7pU2dMyVJJ4X-l-z2uBvBMAYF1w1CNfcHsue1CLkaurU7pwGyoSV-Uy6Xok3HRYOKO51y0_2pI6GNPtwmwpc_h6ntb74u_BgPsJvJQArfRDowDMAX-ccR" />
          <div className="absolute -bottom-8 -right-8 glass-effect p-8 rounded-xl border border-white/20 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary rounded-full">
                <span className="material-symbols-outlined text-white">health_and_safety</span>
              </div>
              <div>
                <p className="text-primary font-bold text-lg">JCI Accredited</p>
                <p className="text-on-surface-variant text-xs">International Standard of Care</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="font-label-caps text-on-primary-container tracking-widest mb-4 block uppercase">The St. Antony Difference</span>
          <h2 className="font-h2 text-h2 mb-8 leading-tight">Why Choose Our Medical Center?</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">biotech</span>
              </div>
              <div>
                <h4 className="font-manrope font-bold text-lg mb-2">Cutting-Edge Technology</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">Equipped with the latest robotic surgery systems and diagnostic imaging for pinpoint accuracy.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">favorite</span>
              </div>
              <div>
                <h4 className="font-manrope font-bold text-lg mb-2">Compassionate Care</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">Treating every patient like family with empathy, respect, and personalized attention.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">public</span>
              </div>
              <div>
                <h4 className="font-manrope font-bold text-lg mb-2">Global Standards</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">Adhering to strict international protocols for hygiene, safety, and clinical outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
