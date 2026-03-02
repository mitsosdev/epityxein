import { ArrowRight } from "lucide-react";

import { Link } from "@/lib/i18n/navigation";

const courses = [
  {
    level: "Α΄ Γυμνασίου",
    tag: "Γυμνάσιο",
    description:
      "Ομαλή μετάβαση από το δημοτικό. Οργάνωση, προετοιμασία και νέα μεθοδολογία μελέτης.",
    students: "4–6 μαθητές",
  },
  {
    level: "Γ΄ Γυμνασίου",
    tag: "Γυμνάσιο",
    description:
      "Στερεή προετοιμασία για τη μετάβαση στο Λύκειο. Διάρκεια 9,5 μήνες.",
    students: "5–7 μαθητές",
  },
  {
    level: "Α΄ Λυκείου",
    tag: "Λύκειο",
    description:
      "14 ώρες εβδομαδιαίως. Νέα Ελληνικά, Μαθηματικά, Φυσική, Χημεία, Αρχαία.",
    students: "5–7 μαθητές",
  },
  {
    level: "Β΄ Λυκείου",
    tag: "Λύκειο",
    description:
      "Θεμελίωση πριν τις πανελλαδικές. Χειμερινό & θερινό πρόγραμμα διαθέσιμο.",
    students: "5–7 μαθητές",
  },
  {
    level: "Γ΄ Λυκείου",
    tag: "Λύκειο",
    description:
      "Θεωρητική & Θετική κατεύθυνση. Εντατική προετοιμασία για πανελλαδικές εξετάσεις.",
    students: "5–7 μαθητές",
  },
];

const tagColors: Record<string, string> = {
  Γυμνάσιο: "bg-secondary/10 text-secondary",
  Λύκειο: "bg-primary/10 text-primary",
};

export const CoursesSection = () => (
  <section className="bg-white py-20">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="flex items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
            Τα Μαθήματά μας
          </h2>
          <p className="mt-2 text-muted-foreground">
            Προγράμματα για κάθε εκπαιδευτική βαθμίδα.
          </p>
        </div>
        <Link
          href="/courses"
          className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline shrink-0"
        >
          Δείτε Όλα <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map(({ level, tag, description, students }) => (
          <div
            key={level}
            className="group rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-md transition-all"
          >
            <span
              className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 ${tagColors[tag]}`}
            >
              {tag}
            </span>
            <h3 className="text-lg font-bold text-foreground mb-2">{level}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {description}
            </p>
            <div className="text-xs text-muted-foreground font-medium">
              👥 {students}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:hidden text-center">
        <Link
          href="/courses"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          Δείτε Όλα <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  </section>
);
