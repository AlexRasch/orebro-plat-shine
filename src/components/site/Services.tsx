import { ArrowUpRight, Building2, CloudRain, Home, Wind } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Takarbeten",
    desc: "Nyläggning, omläggning och reparation av plåttak. Bandtäckning, profilerad plåt och takdetaljer av högsta kvalitet.",
    keywords: "takläggare Örebro",
  },
  {
    icon: CloudRain,
    title: "Hängrännor & stuprör",
    desc: "Montering, byte och rengöring av hängrännor i Örebro. Vi tar hand om hela vattenavrinningen från tak till mark.",
    keywords: "hängrännor Örebro",
  },
  {
    icon: Building2,
    title: "Fasadplåt",
    desc: "Hållbar och stilren fasadbeklädnad i plåt för villor, flerbostadshus och industri. Modern design som tål nordiskt klimat.",
    keywords: "fasadplåt Örebro",
  },
  {
    icon: Wind,
    title: "Ventilation",
    desc: "Kanaler, huvar och takgenomföringar för bostäder och verksamheter. Trygg och energieffektiv ventilationslösning.",
    keywords: "ventilation Örebro",
  },
];

const Services = () => (
  <section id="tjanster" className="section bg-secondary/40">
    <div className="container-tight">
      <div className="max-w-2xl">
        <span className="eyebrow"><span className="w-8 h-px bg-accent" aria-hidden="true" /> Våra tjänster</span>
        <h2 className="mt-4 text-3xl md:text-4xl">Komplett plåtslageri i Örebro</h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Vi är din lokala specialist på allt inom byggnadsplåt – från små reparationer till stora entreprenader.
        </p>
      </div>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <li
            key={title}
            className="group relative bg-card border border-border rounded-xl p-6 hover:border-accent/60 hover:shadow-[var(--shadow-md)] transition-all"
          >
            <div className="grid place-items-center w-12 h-12 rounded-lg bg-primary text-primary-foreground mb-5 group-hover:bg-accent transition-colors">
              <Icon className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            <a
              href="#kontakt"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
              aria-label={`Begär offert för ${title.toLowerCase()}`}
            >
              Begär offert <ArrowUpRight className="w-4 h-4" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Services;
