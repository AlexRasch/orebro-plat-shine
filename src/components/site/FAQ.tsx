import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Vad kostar ett nytt plåttak i Örebro?",
    a: "Priset beror på takets storlek, material och komplexitet. För ett genomsnittligt villatak landar priset oftast mellan 90 000 och 220 000 kr. Vi lämnar alltid en kostnadsfri och fast offert efter besök på plats.",
  },
  {
    q: "Kan jag använda ROT-avdrag?",
    a: "Ja, för arbeten på din privatbostad drar vi 30 % ROT-avdrag direkt på fakturan. Vi sköter all kontakt med Skatteverket åt dig.",
  },
  {
    q: "Hur lång är garantin på arbetet?",
    a: "Vi lämnar 10 års garanti på utfört arbete och följer materialtillverkarnas garantier på upp till 50 år för plåten.",
  },
  {
    q: "Hur snabbt kan ni komma ut?",
    a: "Akuta läckor prioriterar vi inom 24–48 timmar i Örebro. För planerade arbeten är väntetiden normalt 2–4 veckor.",
  },
  {
    q: "Arbetar ni även för företag och BRF:er?",
    a: "Absolut. Vi har lång erfarenhet av entreprenader åt fastighetsbolag, BRF:er och industri – med projektledning från start till slutbesiktning.",
  },
];

const FAQ = () => (
  <section id="faq" className="section">
    <div className="container-tight grid lg:grid-cols-[1fr_2fr] gap-12">
      <div>
        <span className="eyebrow"><span className="w-8 h-px bg-accent" aria-hidden="true" /> Vanliga frågor</span>
        <h2 className="mt-4 text-3xl md:text-4xl">Frågor & svar</h2>
        <p className="mt-4 text-muted-foreground">
          Hittar du inte svar? Ring oss på{" "}
          <a href="tel:+4619123456" className="text-accent font-semibold hover:underline">019-123 45 67</a>.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-base md:text-lg font-semibold">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
