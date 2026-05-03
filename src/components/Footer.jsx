export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 w-full block py-12">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <a className="text-lg font-extrabold text-blue-900" href="#">St. Antony Hospital</a>
          <p className="font-manrope text-sm leading-relaxed text-slate-500">© 2024 St. Antony Hospital. Dedicated to clinical excellence and compassionate care.</p>
        </div>
        <div className="flex flex-wrap md:justify-end gap-x-8 gap-y-4 font-manrope text-sm">
          <a className="text-slate-500 hover:text-blue-700 underline-offset-4 hover:underline transition-opacity duration-300" href="#">Privacy Policy</a>
          <a className="text-slate-500 hover:text-blue-700 underline-offset-4 hover:underline transition-opacity duration-300" href="#">Terms of Service</a>
          <a className="text-slate-500 hover:text-blue-700 underline-offset-4 hover:underline transition-opacity duration-300" href="#">Patient Rights</a>
          <a className="text-slate-500 hover:text-blue-700 underline-offset-4 hover:underline transition-opacity duration-300" href="#">Accessibility</a>
          <a className="text-slate-500 hover:text-blue-700 underline-offset-4 hover:underline transition-opacity duration-300" href="#">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}
