import { useState } from "react";
import { z } from "zod";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Ange ditt namn").max(100),
  phone: z.string().trim().min(6, "Ange ett giltigt telefonnummer").max(30),
  email: z.string().trim().email("Ogiltig e-postadress").max(255),
  message: z.string().trim().min(5, "Beskriv ditt ärende kort").max(1000),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const Contact = () => {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const next: FieldErrors = {};
      result.error.issues.forEach((i) => {
        const k = i.path[0] as keyof FieldErrors;
        if (!next[k]) next[k] = i.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Tack för din förfrågan!",
        description: "Vi återkommer med en offert inom 24 timmar.",
      });
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="kontakt" className="section bg-primary text-primary-foreground">
      <div className="container-tight grid lg:grid-cols-2 gap-12">
        <div>
          <span className="eyebrow text-accent"><span className="w-8 h-px bg-accent" aria-hidden="true" /> Kontakt</span>
          <h2 className="mt-4 text-3xl md:text-4xl text-white">Begär en kostnadsfri offert</h2>
          <p className="mt-4 text-white/80 text-lg max-w-md">
            Berätta kort om ditt projekt så återkommer vi med ett tydligt och fast pris inom 24 timmar.
          </p>

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

          <div className="mt-10 rounded-xl overflow-hidden border border-white/10">
            <iframe
              title="Karta över Örebro Plåt AB i Örebro"
              src="https://www.google.com/maps?q=%C3%96rebro&output=embed"
              loading="lazy"
              className="w-full h-64 border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="bg-white text-foreground rounded-2xl p-6 md:p-8 shadow-[var(--shadow-lg)]"
          aria-label="Offertförfrågan"
        >
          <h3 className="text-xl font-bold">Skicka din förfrågan</h3>
          <p className="text-sm text-muted-foreground mt-1">Vi svarar normalt inom 24 timmar.</p>

          <div className="mt-6 space-y-4">
            <div>
              <Label htmlFor="name">Namn *</Label>
              <Input id="name" name="name" autoComplete="name" required aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "err-name" : undefined} className="mt-1.5" />
              {errors.name && <p id="err-name" className="text-sm text-destructive mt-1">{errors.name}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Telefon *</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" required aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "err-phone" : undefined} className="mt-1.5" />
                {errors.phone && <p id="err-phone" className="text-sm text-destructive mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="email">E-post *</Label>
                <Input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "err-email" : undefined} className="mt-1.5" />
                {errors.email && <p id="err-email" className="text-sm text-destructive mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="message">Beskriv ditt projekt *</Label>
              <Textarea id="message" name="message" rows={5} required aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "err-message" : undefined} className="mt-1.5"
                placeholder="T.ex. nytt plåttak på villa, ca 120 m²..." />
              {errors.message && <p id="err-message" className="text-sm text-destructive mt-1">{errors.message}</p>}
            </div>
          </div>

          <Button type="submit" variant="cta" size="lg" className="mt-6 w-full" disabled={submitting}>
            {submitting ? "Skickar…" : (<>Skicka förfrågan <Send className="w-4 h-4" /></>)}
          </Button>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Genom att skicka godkänner du att vi kontaktar dig angående din förfrågan.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
