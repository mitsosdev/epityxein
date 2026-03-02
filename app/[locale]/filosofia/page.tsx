import { Award, BookOpen, FileText, GraduationCap,Users } from "lucide-react";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { BasePageProps } from "@/types/page-props";

export const metadata: Metadata = {
  title: "Η Φιλοσοφία μας – ΕΠΙΤΥΧΕΙΝ",
  description:
    "Η εκπαιδευτική φιλοσοφία του φροντιστηρίου ΕΠΙΤΥΧΕΙΝ. Μεθοδική διδασκαλία, μικρά τμήματα και αδιάλειπτη υποστήριξη.",
};

const reasons = [
  {
    icon: GraduationCap,
    title: "Έμπειροι Καθηγητές",
    description:
      "Όλοι οι καθηγητές μας έχουν 20-35 χρόνια εμπειρίας στην ιδιωτική εκπαίδευση. Πολλοί είναι συγγραφείς εκπαιδευτικών βιβλίων και συντάκτες θεμάτων ΟΕΦΕ.",
  },
  {
    icon: BookOpen,
    title: "Μεθοδική Διδασκαλία",
    description:
      "Εβδομαδιαία επαναληπτικά διαγωνίσματα για στερεωτική εκμάθηση της ύλης. Έγκαιρος εντοπισμός και αντιμετώπιση των αδυναμιών κάθε μαθητή.",
  },
  {
    icon: FileText,
    title: "Πλούσιο Υποστηρικτικό Υλικό",
    description:
      "Πάνω από 60 συγγράμματα και σημειώσεις δημιουργημένα αποκλειστικά από τους καθηγητές μας, καλύπτοντας όλα τα μαθήματα και τις βαθμίδες.",
  },
  {
    icon: Users,
    title: "Μικρά Τμήματα",
    description:
      "Τμήματα 5-7 μαθητών εξασφαλίζουν εξατομικευμένη προσοχή. Κάθε μαθητής λαμβάνει την υποστήριξη που χρειάζεται για να αναπτυχθεί.",
  },
  {
    icon: Award,
    title: "Υποτροφίες & Διευκολύνσεις",
    description:
      "Παρέχουμε υποτροφίες και ευέλικτα σχέδια πληρωμής για να είναι η ποιοτική εκπαίδευση προσβάσιμη σε κάθε οικογένεια.",
  },
];

const FilosofiaPage = async ({ params }: BasePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      {/* Page header */}
      <div className="bg-foreground text-white py-14">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">
            Η Φιλοσοφία μας
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Ο προσανατολισμός του εκπαιδευτικού μας συστήματος στοχεύει στην
            ολιστική ανάπτυξη του μαθητή.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p className="text-foreground text-lg font-medium">
              Στο ΕΠΙΤΥΧΕΙΝ πιστεύουμε ότι κάθε μαθητής έχει τη δυνατότητα να
              επιτύχει τους στόχους του, αρκεί να έχει τη σωστή καθοδήγηση.
            </p>
            <p>
              Το εκπαιδευτικό μας σύστημα βασίζεται στην ουσιαστική κατανόηση
              της ύλης και όχι στην παπαγαλία. Χρησιμοποιούμε εβδομαδιαία
              επαναληπτικά διαγωνίσματα για να εντοπίζουμε έγκαιρα τις
              αδυναμίες και να τις αντιμετωπίζουμε άμεσα.
            </p>
            <p>
              Παρέχουμε πλούσιο υποστηρικτικό υλικό — πάνω από 60 συγγράμματα
              και σημειώσεις δημιουργημένα αποκλειστικά από τους καθηγητές μας —
              καθώς και δωρεάν συμπληρωματικές ώρες διδασκαλίας πέραν του
              κανονικού προγράμματος.
            </p>
            <p>
              Τα μικρά τμήματα (5-7 μαθητές) εξασφαλίζουν ότι κάθε μαθητής
              λαμβάνει την προσοχή που αξίζει, ενώ η μακρόχρονη εμπειρία των
              καθηγητών μας εγγυάται υψηλό επίπεδο διδασκαλίας.
            </p>
          </div>

          {/* Stat highlight */}
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <div className="text-6xl font-extrabold text-primary mb-2">90%</div>
            <div className="text-xl font-semibold text-foreground mb-3">
              Διαχρονικό ποσοστό επιτυχίας
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Το 2024, από τους 20+ μαθητές που συμμετείχαν στις πανελλαδικές
              εξετάσεις, πάνω από το 90% εισήχθη σε σχολές τριτοβάθμιας
              εκπαίδευσης, με πολλούς να ξεπερνούν τις 17.000 μονάδες.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Reasons */}
      <section className="bg-muted/40 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-extrabold text-foreground mb-8">
            Γιατί να επιλέξετε εμάς
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 border border-border shadow-sm"
              >
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilosofiaPage;
