import { Award, Hammer, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "25+", label: "År i branschen" },
  { value: "1 200+", label: "Genomförda projekt" },
  { value: "10 år", label: "Garanti på arbetet" },
  { value: "4,9★", label: "Snittbetyg från kunder" },
];

const About = () => (
  <section id="om-oss" className="section">
    <div className="container-tight grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div>
        <span className="eyebrow"><span className="w-8 h-px bg-accent" aria-hidden="true" /> Om oss</span>
        <h2 className="mt-4 text-3xl md:text-4xl">Lokala plåtslagare med hjärtat i Örebro</h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Sedan 1998 har vi hjälpt villaägare, bostadsrättsföreningar och företag i Örebro län med trygga plåtarbeten. Hos oss möts traditionellt hantverk och moderna tekniker – alltid med fokus på kvalitet, säkerhet och rena arbetsplatser.
        </p>

        <ul className="mt-8 space-y-4">
          {[
            { icon: Hammer, title: "Erfarna hantverkare", desc: "Egen personal med yrkesbevis – aldrig oannonserade underleverantörer." },
            { icon: Award, title: "Certifierade & försäkrade", desc: "Auktoriserat plåtslageri med fullgott ansvarsskydd." },
            { icon: Users, title: "Personlig service", desc: "Du har samma kontaktperson från offert till slutbesiktning." },
          ].map(({ icon: Icon, title, desc }) => (
            <li key={title} className="flex gap-4">
              <div className="grid place-items-center shrink-0 w-11 h-11 rounded-lg bg-secondary text-primary">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-muted-foreground text-sm mt-0.5">{desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <Button asChild variant="cta" size="lg" className="mt-10">
          <a href="#kontakt">Kontakta oss</a>
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-card p-6 md:p-8 hover:border-accent/60 transition-colors"
          >
            <div className="text-3xl md:text-4xl font-extrabold text-primary">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
        <div className="col-span-2 rounded-xl p-6 md:p-8 text-white" style={{ background: "var(--gradient-steel)" }}>
          <p className="text-lg font-medium leading-relaxed">
            "Snabb offert, professionellt utfört och rent efter sig. Bästa plåtslagaren i Örebro!"
          </p>
          <p className="mt-3 text-sm text-white/70">— Anna L., villaägare i Adolfsberg</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
