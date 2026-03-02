const stats = [
  { value: "90%", label: "Ποσοστό επιτυχίας\nδιαχρονικά" },
  { value: "15+", label: "Έμπειροι\nκαθηγητές" },
  { value: "5–7", label: "Μαθητές\nανά τμήμα" },
  { value: "60+", label: "Εκπαιδευτικά\nσυγγράμματα" },
];

export const StatsSection = () => (
  <section className="bg-white border-y border-border">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
        {stats.map(({ value, label }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center py-12 px-6 text-center"
          >
            <span className="text-5xl lg:text-6xl font-extrabold text-primary leading-none tabular-nums">
              {value}
            </span>
            <span className="mt-3 text-xs font-semibold text-muted-foreground uppercase tracking-widest whitespace-pre-line leading-snug">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
