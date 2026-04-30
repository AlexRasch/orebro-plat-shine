const Footer = () => (
  <footer className="bg-[hsl(var(--steel-900))] text-white/80">
    <div className="container-tight py-14 grid gap-10 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2 font-bold text-lg text-white">
          <span className="grid place-items-center w-9 h-9 rounded-md bg-accent text-accent-foreground text-sm">ÖP</span>
          Örebro Plåt AB
        </div>
        <p className="mt-4 text-sm max-w-md leading-relaxed">
          Auktoriserat plåtslageri i Örebro. Vi utför takarbeten, hängrännor, fasadplåt och ventilation åt privatpersoner och företag i hela Örebro län.
        </p>
      </div>

      <div>
        <h2 className="text-white font-semibold text-sm uppercase tracking-wider">Tjänster</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a href="#tjanster" className="hover:text-accent">Takarbeten</a></li>
          <li><a href="#tjanster" className="hover:text-accent">Hängrännor</a></li>
          <li><a href="#tjanster" className="hover:text-accent">Fasadplåt</a></li>
          <li><a href="#tjanster" className="hover:text-accent">Ventilation</a></li>
        </ul>
      </div>

      <div>
        <h2 className="text-white font-semibold text-sm uppercase tracking-wider">Kontakt</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a href="tel:+4619123456" className="hover:text-accent">019-123 45 67</a></li>
          <li><a href="mailto:info@orebroplat.se" className="hover:text-accent">info@orebroplat.se</a></li>
          <li>Industrigatan 12<br />702 22 Örebro</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container-tight py-5 text-xs text-white/60 flex flex-col sm:flex-row gap-3 justify-between">
        <p>© {new Date().getFullYear()} Örebro Plåt AB. Org.nr 556xxx-xxxx.</p>
        <p>Plåtslageri Örebro · Takläggare Örebro · Hängrännor Örebro</p>
      </div>
    </div>
  </footer>
);

export default Footer;
