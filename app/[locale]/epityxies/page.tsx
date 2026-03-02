import { Trophy } from "lucide-react";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { BasePageProps } from "@/types/page-props";

export const metadata: Metadata = {
  title: "Οι Επιτυχίες μας – ΕΠΙΤΥΧΕΙΝ",
  description:
    "Δείτε τις επιτυχίες των μαθητών του ΕΠΙΤΥΧΕΙΝ στις πανελλαδικές εξετάσεις 2022-2024.",
};

const successes2024 = [
  { name: "Κασωτάκη", school: "Νομική Σχολή ΑΠΘ", score: "18.850" },
  { name: "Χατζηγούλα", school: "Νομική Σχολή ΕΚΠΑ", score: "18.700" },
  { name: "Πολύζος", school: "Μηχανολόγων Μηχανικών ΕΜΠ", score: "18.330" },
  { name: "Κατσαδήμας", school: "Ιατρική Σχολή", score: "17.900" },
  { name: "Παπαδοπούλου", school: "Ψυχολογία ΕΚΠΑ", score: "17.650" },
  { name: "Μανιάτης", school: "Ηλεκτρολόγων Μηχανικών ΕΜΠ", score: "17.500" },
  { name: "Γεωργίου", school: "Οικονομικές Επιστήμες ΕΚΠΑ", score: "17.200" },
  { name: "Νικολάου", school: "Κοινωνική Εργασία ΑΕΙ", score: "16.800" },
  { name: "Παπαθανασίου", school: "Φυσική ΕΚΠΑ", score: "16.500" },
  { name: "Σταματίου", school: "Χημεία ΕΚΠΑ", score: "16.200" },
];

const successes2023 = [
  { name: "Αντωνίου", school: "Ιατρική Σχολή ΑΠΘ", score: "19.100" },
  { name: "Παπαδημητρίου", school: "Νομική Σχολή ΕΚΠΑ", score: "18.900" },
  { name: "Κωνσταντίνου", school: "Πολιτικών Μηχανικών ΕΜΠ", score: "18.450" },
  { name: "Θεοδωρίδου", school: "Ψυχολογία Παντείου", score: "17.800" },
  { name: "Λαμπρόπουλος", school: "Μαθηματικά ΕΚΠΑ", score: "17.500" },
  { name: "Σταυρίδης", school: "Πληροφορική ΑΠΘ", score: "17.200" },
  { name: "Καραγιάννης", school: "Οικονομικά ΟΠΑ", score: "17.000" },
  { name: "Μαρκοπούλου", school: "Βιολογία ΕΚΠΑ", score: "16.750" },
];

const successes2022 = [
  { name: "Δημητρίου", school: "Νομική Σχολή ΑΠΘ", score: "18.600" },
  { name: "Παπαγεωργίου", school: "Χημικών Μηχανικών ΕΜΠ", score: "18.200" },
  { name: "Σωτηρίου", school: "Ιατρική Σχολή Θεσσαλίας", score: "17.950" },
  { name: "Λιάκος", school: "Φυσική Αστροφυσική ΑΠΘ", score: "17.600" },
  { name: "Τσαβδάρης", school: "Νομική ΔΠΘΚ", score: "17.300" },
  { name: "Κυριακίδου", school: "Αρχαιολογία ΕΚΠΑ", score: "16.900" },
];

interface YearTableProps {
  year: string;
  data: { name: string; school: string; score: string }[];
}

const YearTable = ({ year, data }: YearTableProps) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-5">
      <Trophy className="size-5 text-primary" />
      <h2 className="text-2xl font-extrabold text-foreground">
        Επιτυχόντες {year}
      </h2>
      <span className="ml-auto text-sm text-muted-foreground font-medium">
        {data.length} επιτυχόντες
      </span>
    </div>
    <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide w-8">
              #
            </th>
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
          {data.map(({ name, school, score }, i) => (
            <tr key={name} className="hover:bg-muted/20 transition-colors">
              <td className="px-5 py-3.5 text-muted-foreground text-xs">
                {i + 1}
              </td>
              <td className="px-5 py-3.5 font-medium text-foreground">{name}</td>
              <td className="px-5 py-3.5 text-muted-foreground">{school}</td>
              <td className="px-5 py-3.5 text-right font-semibold text-primary">
                {score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const EpityxiesPage = async ({ params }: BasePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      {/* Header */}
      <div className="bg-foreground text-white py-14">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">
            Οι Επιτυχίες μας
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Περήφανοι για κάθε μαθητή που πέτυχε τον στόχο του με τη βοήθεια
            του ΕΠΙΤΥΧΕΙΝ.
          </p>
        </div>
      </div>

      {/* Highlight */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-primary">92%</div>
              <div className="text-sm text-muted-foreground mt-1">Ποσοστό εισαγωγής 2024</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-primary">50%+</div>
              <div className="text-sm text-muted-foreground mt-1">Πάνω από 15.000 μόρια</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-primary">3</div>
              <div className="text-sm text-muted-foreground mt-1">Συνεχόμενες χρονιές επιτυχίας</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tables */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <YearTable year="2024" data={successes2024} />
        <YearTable year="2023" data={successes2023} />
        <YearTable year="2022" data={successes2022} />
      </section>
    </div>
  );
};

export default EpityxiesPage;
