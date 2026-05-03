export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 w-full block py-16 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-3">
          <a className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-blue-400">health_and_safety</span>
            St. Antony Hospital
          </a>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-400 max-w-sm font-medium">
            Dedicated to world-class clinical excellence and highly compassionate patient care.
          </p>
        </div>
        <div className="flex flex-wrap md:justify-end gap-x-6 gap-y-3 text-xs sm:text-sm font-medium">
          <a className="text-slate-400 hover:text-blue-400 underline-offset-4 hover:underline transition-all" href="#">Privacy Policy</a>
          <a className="text-slate-400 hover:text-blue-400 underline-offset-4 hover:underline transition-all" href="#">Terms of Service</a>
          <a className="text-slate-400 hover:text-blue-400 underline-offset-4 hover:underline transition-all" href="#">Patient Portal</a>
          <a className="text-slate-400 hover:text-blue-400 underline-offset-4 hover:underline transition-all" href="#">Accessibility</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 border-t border-slate-800/60 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-medium">
        <p>© 2026 St. Antony Hospital. All Rights Reserved.</p>
        <p className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[14px] text-green-500">verified_user</span>
          Certified Patient Safe Facility
        </p>
      </div>
    </footer>
  );
}
