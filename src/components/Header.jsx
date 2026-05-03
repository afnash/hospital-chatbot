export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm h-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-12">
          <a className="text-xl font-bold tracking-tighter text-blue-900" href="#">St. Antony Hospital</a>
          <nav className="hidden md:flex items-center gap-8 font-manrope tracking-tight text-sm font-medium">
            <a className="text-slate-600 hover:text-blue-700 transition-colors duration-200" href="#services">Our Services</a>
            <a className="text-slate-600 hover:text-blue-700 transition-colors duration-200" href="#doctors">Find a Doctor</a>
            <a className="text-slate-600 hover:text-blue-700 transition-colors duration-200" href="#locations">Locations</a>
            <a className="text-slate-600 hover:text-blue-700 transition-colors duration-200" href="#">Patient Portal</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-slate-600 hover:text-blue-900 transition-colors font-medium text-sm">
            <span className="material-symbols-outlined text-lg">search</span>
            Search
          </button>
        </div>
      </div>
    </header>
  );
}
