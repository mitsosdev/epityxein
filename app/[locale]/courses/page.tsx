import { Clock,Users } from "lucide-react";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { BasePageProps } from "@/types/page-props";

export const metadata: Metadata = {
  title: "Μαθήματα – ΕΠΙΤΥΧΕΙΝ",
  description:
    "Προγράμματα σπουδών για όλες τις εκπαιδευτικές βαθμίδες. Α΄ Γυμνασίου έως Γ΄ Λυκείου, θεωρητική και θετική κατεύθυνση.",
};

const courses = [
  {
    level: "Α΄ Γυμνασίου",
    tag: "Γυμνάσιο",
    duration: "9 μήνες",
    students: "4–6 μαθητές",
    description:
      "Ομαλή μετάβαση από το δημοτικό στο γυμνάσιο. Εστίαση στην οργάνωση, στη μεθοδολογία μελέτης και στη δόμηση σωστών εκπαιδευτικών συνηθειών.",
    subjects: ["Νέα Ελληνικά", "Μαθηματικά", "Ιστορία", "Αγγλικά"],
  },
  {
    level: "Γ΄ Γυμνασίου",
    tag: "Γυμνάσιο",
    duration: "9,5 μήνες",
    students: "5–7 μαθητές",
    description:
      "Στερεή προετοιμασία για τη μετάβαση στο Λύκειο. Ενίσχυση της βάσης σε όλα τα μαθήματα και προετοιμασία για τις εξετάσεις.",
    subjects: ["Νέα Ελληνικά", "Μαθηματικά", "Φυσική", "Χημεία", "Ιστορία"],
  },
  {
    level: "Α΄ Λυκείου",
    tag: "Λύκειο",
    duration: "9 μήνες",
    students: "5–7 μαθητές",
    description:
      "14 ώρες εβδομαδιαίως κατανεμημένες σε όλα τα μαθήματα. Θεμελίωση γνώσεων για τα επόμενα χρόνια.",
    subjects: [
      "Νέα Ελληνικά",
      "Μαθηματικά",
      "Φυσική",
      "Χημεία",
      "Αρχαία Ελληνικά",
    ],
  },
  {
    level: "Β΄ Λυκείου",
    tag: "Λύκειο",
    duration: "9,5 μήνες + θερινό",
    students: "5–7 μαθητές",
    description:
      "Εμβάθυνση στην ύλη πριν από τη Γ΄ Λυκείου. Διατίθεται χειμερινό και θερινό πρόγραμμα για βέλτιστη προετοιμασία.",
    subjects: [
      "Νέα Ελληνικά",
      "Μαθηματικά",
      "Φυσική",
      "Χημεία",
      "Αρχαία Ελληνικά",
      "Ιστορία",
    ],
  },
  {
    level: "Γ΄ Λυκείου – Θεωρητική",
    tag: "Πανελλαδικές",
    duration: "9,5 μήνες + θερινό",
    students: "5–7 μαθητές",
    description:
      "Πλήρης προετοιμασία για τις πανελλαδικές εξετάσεις θεωρητικής κατεύθυνσης. Εβδομαδιαία διαγωνίσματα και εντατική εξάσκηση.",
    subjects: [
      "Νέα Ελληνικά",
      "Αρχαία Ελληνικά",
      "Ιστορία",
      "Λατινικά",
      "Πλήρης κατεύθυνση",
    ],
  },
  {
    level: "Γ΄ Λυκείου – Θετική",
    tag: "Πανελλαδικές",
    duration: "9,5 μήνες + θερινό",
    students: "5–7 μαθητές",
    description:
      "Εντατική προετοιμασία για θετική κατεύθυνση. Έμφαση στα Μαθηματικά και τις Θετικές Επιστήμες.",
    subjects: [
      "Μαθηματικά",
      "Φυσική",
      "Χημεία",
      "Βιολογία",
      "Νέα Ελληνικά",
    ],
  },
];

const tagColors: Record<string, string> = {
  Γυμνάσιο: "bg-secondary/10 text-secondary",
  Λύκειο: "bg-primary/10 text-primary",
  Πανελλαδικές: "bg-amber-100 text-amber-700",
};

const CoursesPage = async ({ params }: BasePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      {/* Header */}
      <div className="bg-foreground text-white py-14">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">
            Τα Μαθήματά μας
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Δομημένα προγράμματα σπουδών για κάθε εκπαιδευτική βαθμίδα, από το
            γυμνάσιο έως τις πανελλαδικές εξετάσεις.
          </p>
        </div>
      </div>

      {/* Course cards */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {courses.map(({ level, tag, duration, students, description, subjects }) => (
            <div
              key={level}
              className="rounded-xl border border-border p-7 hover:border-primary/40 hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <h2 className="text-xl font-bold text-foreground">{level}</h2>
                <span
                  className={`shrink-0 text-xs font-semibold px-2.5 py-0.5 rounded-full ${tagColors[tag]}`}
                >
                  {tag}
                </span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {description}
              </p>

              <div className="flex items-center gap-5 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  {duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="size-3.5" />
                  {students}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {subjects.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
