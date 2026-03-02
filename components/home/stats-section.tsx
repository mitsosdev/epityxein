const stats = [
  { value: "90%", label: "Ποσοστό επιτυχίας διαχρονικά" },
  { value: "15+", label: "Έμπειροι καθηγητές" },
  { value: "5–7", label: "Μαθητές ανά τμήμα" },
  { value: "60+", label: "Εκπαιδευτικά συγγράμματα" },
];

export const StatsSection = () => (
  <section className="bg-primary">
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center text-white">
            <div className="text-4xl font-extrabold">{value}</div>
            <div className="mt-1 text-sm font-medium text-white/80">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
