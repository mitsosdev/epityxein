import { ArrowRight, Trophy } from "lucide-react";

import { Link } from "@/lib/i18n/navigation";

const topSuccesses = [
  { name: "Κασωτάκη", school: "Νομική Σχολή ΑΠΘ", score: "18.850" },
  { name: "Χατζηγούλα", school: "Νομική Σχολή ΕΚΠΑ", score: "18.700" },
  { name: "Πολύζος", school: "Μηχανολόγων Μηχανικών ΕΜΠ", score: "18.330" },
  { name: "Κατσαδήμας", school: "Ιατρική Σχολή", score: "17.900" },
  { name: "Παπαδοπούλου", school: "Ψυχολογία ΕΚΠΑ", score: "17.650" },
  { name: "Μανιάτης", school: "Ηλεκτρολόγων Μηχανικών ΕΜΠ", score: "17.500" },
];

export const SuccessesSection = () => (
  <section className="bg-muted/40 py-20">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="flex items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="size-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Επιτυχίες 2024
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
            Οι Επιτυχίες μας
          </h2>
          <p className="mt-2 text-muted-foreground">
            92% ποσοστό εισαγωγής στην τριτοβάθμια εκπαίδευση το 2024.
          </p>
        </div>
        <Link
          href="/epityxies"
          className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline shrink-0"
        >
          Όλες οι Επιτυχίες <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Μαθητής
              </th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Σχολή
              </th>
              <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Μόρια
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {topSuccesses.map(({ name, school, score }) => (
              <tr key={name} className="hover:bg-muted/20 transition-colors">
                <td className="px-5 py-3.5 font-medium text-foreground">
                  {name}
                </td>
                <td className="px-5 py-3.5 text-muted-foreground">{school}</td>
                <td className="px-5 py-3.5 text-right font-semibold text-primary">
                  {score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 sm:hidden text-center">
        <Link
          href="/epityxies"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          Όλες οι Επιτυχίες <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  </section>
);
