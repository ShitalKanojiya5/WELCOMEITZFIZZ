function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full px-6 py-7 md:px-12 lg:px-16">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-black tracking-tight md:text-2xl">
          ITZ<span className="text-[#7867ff]">FIZZ</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <a
            href="#home"
            className="border-b border-[#7867ff] pb-2 text-[11px] font-medium tracking-[0.2em]">
            HOME
          </a>

          <a href="#about"
            className="text-[11px] tracking-[0.2em] text-white/60 transition hover:text-white">
            ABOUT
          </a>

          <a
            href="#services"
            className="text-[11px] tracking-[0.2em] text-white/60 transition hover:text-white">
            SERVICES
          </a>

          <a
            href="#work"
            className="text-[11px] tracking-[0.2em] text-white/60 transition hover:text-white">
            WORK
          </a>

          <a
            href="#contact"
            className="text-[11px] tracking-[0.2em] text-white/60 transition hover:text-white" >
            CONTACT
          </a>
        </div>

        {/* CTA */}
        <button
          className=" rounded-full border border-[#7867ff] px-6 py-3text-[10px]
            font-semibold tracking-[0.2em] transition hover:bg-[#7867ff]">
          GET STARTED
        </button>

      </nav>
    </header>
  );
}

export default Navbar;