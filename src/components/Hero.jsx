export default function Hero() {
  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover" alt="A brightly lit, modern hospital reception area at St. Antony Hospital with high ceilings and minimalist architectural lines." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxhBP-fcatzqtqlOVvBfHSZsP_6e-Nl3fN9MBQBK8veKZnTfIiBuydZf69SsRZ8y2uvZQdWTaWRmQh3fj6yCTIOAAe1KpYPGKRG72uyMacQWgV9j-cAM3rbTUBfVTMsSn5jEt0wqaBNLZYoZtPoxD_aHrntO92aC6upsHHpQvfAgXHMHl8rJw_d4k1oY3XSHU1B3BXE3LK0K58AzTnFK_SIF10NdDnlk4GtHYhD4PjKIq0xINpg6DIEP-23X1YsHxb-bYUyAz2_g8y" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-center gap-2 text-secondary font-label-caps uppercase tracking-widest bg-secondary-fixed/30 w-fit px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            World-Class Healthcare
          </div>
          <h1 className="font-h1 text-h1 text-primary max-w-lg leading-[1.1]">Excellence in Care, Every Day</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">Providing patient-centered medical excellence with a compassionate touch and cutting-edge clinical innovation.</p>
        </div>
      </div>
    </section>
  );
}
