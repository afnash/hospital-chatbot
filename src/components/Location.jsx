export default function Location() {
  return (
    <section className="py-24 bg-surface-container-low" id="locations">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h2 className="font-h2 text-h2 text-primary mb-6">Find Us Near You</h2>
          <p className="text-on-surface-variant mb-8">Multiple convenient locations across the city to serve your healthcare needs quickly and efficiently.</p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary">location_on</span>
              <div>
                <p className="font-bold text-primary">Main Campus</p>
                <p className="text-sm text-on-surface-variant">45 Medical Plaza, Marina Heights, ST 12345</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary">call</span>
              <div>
                <p className="font-bold text-primary">Emergency Line</p>
                <p className="text-sm text-on-surface-variant">1-800-MARINA-HELP (24/7)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary">mail</span>
              <div>
                <p className="font-bold text-primary">Email Support</p>
                <p className="text-sm text-on-surface-variant">contact@stmarinahealth.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-2xl overflow-hidden shadow-sm h-[400px] bg-slate-200">
            <img className="w-full h-full object-cover grayscale opacity-80" alt="Map graphic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaxOwabYFJuSeLssW7V_pQrpCFsWUUJg71ZBiH-GRLJhd2xzHVStDb3RiUzJ-fqiFHKD1rtWgRMZ09SnIzvkcnDaMMZJRyEotT-E8oHag1cnQ2f5LoRQZg65xKW2XU_L3KKd3oS9Gp7_nCQPb-rDNZOpM-aszPkwT823iUa2BF4vzmIiTpIhjO6n3fd4vX8P5g5DTDIZUjOYUzkR0hWxzqjL4dSpAhS8ie51NU9ZmmUHNSFVHM1OTEihkwJydI4GzA_stANBMIrAjp" />
          </div>
        </div>
      </div>
    </section>
  );
}
