import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="kontakt" className="section bg-primary text-primary-foreground">
      <div className="container-tight grid lg:grid-cols-2 gap-12">
        <div>
          <span className="eyebrow text-accent">
            <span className="w-8 h-px bg-accent" aria-hidden="true" /> Kontakt
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl text-white">Hör av dig till oss</h2>
          <p className="mt-4 text-white/80 text-lg max-w-md">
            Ring eller mejla oss direkt så återkommer vi med ett tydligt och fast pris inom 24 timmar.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="lg">
              <a href="tel:+4619123456" aria-label="Ring oss på 019-123 45 67">
                <Phone className="w-4 h-4" /> Ring 019-123 45 67
              </a>
            </Button>
            <Button asChild variant="ctaOutline" size="lg">
              <a href="mailto:info@orebroplat.se" aria-label="Skicka e-post till info@orebroplat.se">
                <Mail className="w-4 h-4" /> Mejla oss
              </a>
            </Button>
          </div>

          <ul className="mt-10 space-y-5 text-white/90">
            <li className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-accent mt-1" aria-hidden="true" />
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">Telefon</div>
                <a href="tel:+4619123456" className="text-lg font-semibold hover:text-accent">019-123 45 67</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-accent mt-1" aria-hidden="true" />
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">E-post</div>
                <a href="mailto:info@orebroplat.se" className="text-lg font-semibold hover:text-accent">info@orebroplat.se</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-accent mt-1" aria-hidden="true" />
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">Adress</div>
                <div className="text-lg font-semibold">Industrigatan 12, 702 22 Örebro</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-accent mt-1" aria-hidden="true" />
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">Öppettider</div>
                <div className="text-lg font-semibold">Mån–Fre 07:00 – 16:00</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[var(--shadow-lg)] min-h-[400px]">
          <iframe
            title="Karta över Örebro Plåt AB i Örebro"
            src="https://www.google.com/maps?q=%C3%96rebro&output=embed"
            loading="lazy"
            className="w-full h-full min-h-[400px] border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
