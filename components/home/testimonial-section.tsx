const testimonials = [
  {
    quote:
      "Χάρη στο ΕΠΙΤΥΧΕΙΝ πέτυχα στη Νομική με 18.700 μόρια. Οι καθηγητές ήταν πάντα εκεί για κάθε απορία μου, ακόμα και εκτός ωραρίου.",
    name: "Χατζηγούλα",
    school: "Νομική Σχολή ΕΚΠΑ, 2024",
  },
  {
    quote:
      "Τα μικρά τμήματα είναι η μεγαλύτερη διαφορά. Ο καθηγητής ξέρει ακριβώς πού δυσκολεύεσαι και στοχεύει εκεί.",
    name: "Πολύζος",
    school: "Μηχανολόγων Μηχανικών ΕΜΠ, 2024",
  },
  {
    quote:
      "Μπήκα στην Ιατρική του ΑΠΘ. Δεν το πίστευα. Το εβδομαδιαίο διαγώνισμα με έμαθε να δουλεύω σε πίεση.",
    name: "Αντωνίου",
    school: "Ιατρική Σχολή ΑΠΘ, 2023",
  },
];

export const TestimonialSection = () => (
  <section className="bg-muted/40 py-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
          Οι μαθητές μιλούν
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
          Λόγια που μετράνε
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(({ quote, name, school }, i) => (
          <div key={i} className="relative bg-white rounded-2xl p-8 border border-border shadow-sm">
            {/* Large decorative quote mark */}
            <span
              className="absolute top-4 right-6 text-7xl font-serif leading-none text-primary/10 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="text-foreground text-base leading-relaxed mb-6 relative">
              &ldquo;{quote}&rdquo;
            </p>
            <div className="border-t border-border pt-4">
              <p className="font-bold text-foreground text-sm">{name}</p>
              <p className="text-xs text-primary font-medium mt-0.5">{school}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
