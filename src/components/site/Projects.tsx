import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  { src: p1, title: "Bandtäckt plåttak, villa i Almby", category: "Takarbete" },
  { src: p2, title: "Nya hängrännor i mörk antracit", category: "Hängrännor" },
  { src: p3, title: "Modern fasadplåt, kontor i Aspholmen", category: "Fasad" },
  { src: p4, title: "Ventilationsinstallation, BRF Centrum", category: "Ventilation" },
];

const Projects = () => (
  <section id="projekt" className="section bg-secondary/40">
    <div className="container-tight">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-3xl">
        <div>
          <span className="eyebrow"><span className="w-8 h-px bg-accent" aria-hidden="true" /> Referensprojekt</span>
          <h2 className="mt-4 text-3xl md:text-4xl">Utvalda jobb från Örebro</h2>
        </div>
        <p className="text-muted-foreground md:max-w-sm">
          Ett urval av projekt vi nyligen levererat – från villa-tak till industriventilation.
        </p>
      </div>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <li key={p.title} className="group relative overflow-hidden rounded-xl border border-border bg-card">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.src}
                alt={p.title}
                width={1024}
                height={768}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.category}</span>
              <h3 className="mt-1 text-base font-semibold leading-snug">{p.title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Projects;
