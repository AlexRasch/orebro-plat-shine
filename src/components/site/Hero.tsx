import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-roofing.jpg";

const Hero = () => (
  <section id="top" className="relative isolate overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <img
        src={heroImg}
        alt="Plåtslagare i Örebro lägger nytt bandtäckt plåttak vid solnedgång"
        width={1920}
        height={1080}
        fetchPriority="high"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
    </div>

    <div className="container-tight min-h-[88vh] md:min-h-[92vh] flex items-center py-20 md:py-28">
      <div className="max-w-2xl text-white">
        <span className="eyebrow text-accent">
          <span className="w-8 h-px bg-accent" aria-hidden="true" /> Plåtslageri i Örebro sedan 1998
        </span>
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-white">
          Hantverksstolthet på taket – <span className="text-accent">Örebros plåtslagare</span> du kan lita på
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl">
          Vi utför takarbeten, hängrännor, fasadplåt och ventilation åt privatpersoner och företag i Örebro med omnejd. Trygg garanti, fast pris och rena arbetsplatser.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="cta" size="xl">
            <a href="#kontakt">
              Begär kostnadsfri offert <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="ctaLight" size="xl">
            <a href="tel:+4619123456" aria-label="Ring oss på 019-123 45 67">
              <Phone className="w-5 h-5" /> 019-123 45 67
            </a>
          </Button>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80">
          <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent" aria-hidden="true" /> Auktoriserade & försäkrade</li>
          <li className="flex items-center gap-2"><Star className="w-4 h-4 text-accent" aria-hidden="true" /> 4,9/5 av 280+ kunder</li>
          <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent" aria-hidden="true" /> 10 års garanti</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Hero;
