const reasons = [
  {
    title: "Έμπειροι Καθηγητές",
    description:
      "Καθηγητές με 20–35 χρόνια εμπειρία, συγγραφείς εκπαιδευτικών βιβλίων και συντάκτες θεμάτων ΟΕΦΕ.",
  },
  {
    title: "Μεθοδική Διδασκαλία",
    description:
      "Εβδομαδιαία επαναληπτικά διαγωνίσματα για στερέωση της ύλης και έγκαιρο εντοπισμό αδυναμιών.",
  },
  {
    title: "Πλούσιο Υλικό",
    description:
      "Πάνω από 60 συγγράμματα και σημειώσεις δημιουργημένα αποκλειστικά από τους καθηγητές μας.",
  },
  {
    title: "Μικρά Τμήματα",
    description:
      "Τμήματα 5–7 μαθητών εξασφαλίζουν εξατομικευμένη προσοχή και αποτελεσματική εκμάθηση.",
  },
  {
    title: "Υποτροφίες & Ευελιξία",
    description:
      "Παρέχουμε υποτροφίες και ευέλικτα σχέδια πληρωμής ώστε η ποιοτική εκπαίδευση να είναι προσβάσιμη σε όλους.",
  },
];

export const WhyUsSection = () => (
  <section className="bg-white py-20">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      {/* Header */}
      <div className="mb-14">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
          Γιατί εμείς
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight max-w-lg">
          Αυτό που μας κάνει διαφορετικούς
        </h2>
      </div>

      {/* Numbered list */}
      <div className="divide-y divide-border">
        {reasons.map(({ title, description }, i) => (
          <div
            key={title}
            className="grid grid-cols-[3rem_1fr_2fr] lg:grid-cols-[4rem_1fr_2fr] items-start gap-6 py-8"
          >
            {/* Number */}
            <span className="text-4xl font-extrabold text-primary/20 leading-none tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            {/* Title */}
            <h3 className="font-bold text-foreground text-base lg:text-lg leading-snug pt-1">
              {title}
            </h3>
            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed pt-1">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
