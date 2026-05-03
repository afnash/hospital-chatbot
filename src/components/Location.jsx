export default function Location() {
  return (
    <section className="py-28 bg-slate-50/40 relative select-none" id="locations">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Contact info & address */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-extrabold uppercase tracking-wider">
              Accessible Care
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Get In Touch
            </h2>
            <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-md">
              Convenient, centralized healthcare available 24/7. Stop by our main campus or send us a digital inquiry.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-white/50 hover:bg-white transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100 text-blue-600 flex-shrink-0">
                <span className="material-symbols-outlined text-xl">location_on</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm mb-0.5">Main Campus</p>
                <p className="text-xs text-slate-500 leading-relaxed">45 Medical Plaza, Marina Heights, ST 12345</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-white/50 hover:bg-white transition-all">
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center border border-green-100 text-green-600 flex-shrink-0">
                <span className="material-symbols-outlined text-xl">call</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm mb-0.5">Emergency Line (24/7)</p>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold text-green-600">1-800-MARINA-HELP</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-white/50 hover:bg-white transition-all">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100 text-indigo-600 flex-shrink-0">
                <span className="material-symbols-outlined text-xl">mail</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm mb-0.5">Digital Inquiries</p>
                <p className="text-xs text-slate-500 leading-relaxed">support@stantonyhealth.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Stylized Placeholder map */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60 aspect-[4/3] max-h-[420px] bg-slate-100 relative group select-none">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
              alt="Map graphic" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaxOwabYFJuSeLssW7V_pQrpCFsWUUJg71ZBiH-GRLJhd2xzHVStDb3RiUzJ-fqiFHKD1rtWgRMZ09SnIzvkcnDaMMZJRyEotT-E8oHag1cnQ2f5LoRQZg65xKW2XU_L3KKd3oS9Gp7_nCQPb-rDNZOpM-aszPkwT823iUa2BF4vzmIiTpIhjO6n3fd4vX8P5g5DTDIZUjOYUzkR0hWxzqjL4dSpAhS8ie51NU9ZmmUHNSFVHM1OTEihkwJydI4GzA_stANBMIrAjp" 
            />
            {/* Dark vignette tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-40" />
          </div>
        </div>

      </div>
    </section>
  );
}
