import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#tjanster", label: "Tjänster" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#projekt", label: "Projekt" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="container-tight flex h-16 md:h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold text-lg" aria-label="Örebro Plåt AB – startsida">
          <span className="grid place-items-center w-9 h-9 rounded-md bg-[var(--gradient-steel)] text-white text-sm">ÖP</span>
          <span className="hidden sm:inline">Örebro Plåt</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Huvudmeny">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="tel:+4619123456"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            aria-label="Ring oss på 019-123 45 67"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            019-123 45 67
          </a>
          <Button asChild variant="cta" size="default" className="hidden md:inline-flex">
            <a href="#kontakt">Begär offert</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-md hover:bg-secondary"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Stäng meny" : "Öppna meny"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-border bg-background">
          <nav className="container-tight py-4 flex flex-col gap-1" aria-label="Mobilmeny">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-base font-medium hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+4619123456"
              className="px-3 py-3 rounded-md text-base font-medium flex items-center gap-2 hover:bg-secondary"
            >
              <Phone className="w-4 h-4" /> 019-123 45 67
            </a>
            <Button asChild variant="cta" size="lg" className="mt-2">
              <a href="#kontakt" onClick={() => setOpen(false)}>Begär offert</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
