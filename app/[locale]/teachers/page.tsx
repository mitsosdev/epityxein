import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";

import { BasePageProps } from "@/types/page-props";

export const metadata: Metadata = {
  title: "Καθηγητές – ΕΠΙΤΥΧΕΙΝ",
  description:
    "Γνωρίστε τους εξειδικευμένους καθηγητές του ΕΠΙΤΥΧΕΙΝ. 15+ επιστήμονες με 20-35 χρόνια εμπειρία στην εκπαίδευση.",
};

const teachers = [
  {
    name: "Χρήστος Βλασταράκος",
    specialty: "Ιστορία – Αρχαιολογία",
    image: "/images/teacher-vlastarakos.png",
    bio: "Αποφοίτησε από τη Φιλοσοφική Σχολή Πανεπιστημίου Κρήτης. Διδάσκει από το 1998 σε φροντιστήρια ιδιωτικής εκπαίδευσης. Συγγραφέας σχολικού υλικού για εκδόσεις Λιβάνη.",
  },
  {
    name: "Ανδρέας Αντωνιάδης",
    specialty: "Μαθηματικά",
    image: "/images/teacher-antoniadis.jpg",
    bio: "Πτυχιούχος Μαθηματικών Πανεπιστημίου Ιωαννίνων. Διδάσκει από το 1987 σε όλες τις τάξεις λυκείου. Συμμετείχε στην ανάπτυξη θεμάτων ΟΕΦΕ.",
  },
  {
    name: "Νικόλαος Μεταξιώτης",
    specialty: "Μαθηματικά",
    image: "/images/teacher-metaxiotis.png",
    bio: "Μαθηματικός με 35+ χρόνια εμπειρίας στην ιδιωτική εκπαίδευση. Διδάσκει από το 1985 σε γυμνάσια και λύκεια. Συγγραφέας εκπαιδευτικού υλικού.",
  },
  {
    name: "Παναγιώτης Βορλόκας",
    specialty: "Φυσική",
    image: "/images/teacher-vorlokas.jpg",
    bio: "Φυσικός από Πανεπιστήμιο Πατρών. Μέλος Ένωσης Ελλήνων Φυσικών. Διδάσκει από το 1998, συγγραφέας βιβλίων Φυσικής για όλα τα επίπεδα λυκείου.",
  },
  {
    name: "Νάσια Λούκα",
    specialty: "Νέα Ελληνική Γλώσσα & Λογοτεχνία",
    image: "/images/teacher-louka.webp",
    bio: "Φιλόλογος από ΕΚΠΑ με MA Εκπαιδευτικής Ηγεσίας από Πανεπιστήμιο Λονδίνου. Διδάσκει από το 2014, εξειδίκευση στη μεσαιωνική και νεότερη γραμματεία.",
  },
  {
    name: "Έφη Κορκολή",
    specialty: "Αρχαία Ελληνικά",
    image: "/images/teacher-korkoli.jpg",
    bio: "Πτυχιούχος Ιστορίας-Αρχαιολογίας ΕΚΠΑ. Συμμετείχε σε ανασκαφές στην Κέα και Κρήτη. Διδάσκει Αρχαία Ελληνικά από το 1995.",
  },
  {
    name: "Χρήστος Αξής",
    specialty: "Αρχαία Ελληνικά & Ιστορία",
    image: "/images/teacher-aksis.jpg",
    bio: "Ιστορικός-Αρχαιολόγος από Πανεπιστήμιο Κρήτης. Εκδότης «Συντακτικού Αρχαίων Ελληνικών» (2006) και «Γραμματικής» (2009) από εκδόσεις Λιβάνη.",
  },
  {
    name: "Γεωργία Τσιπιανίτη",
    specialty: "Αρχαία & Νέα Ελληνική Γλώσσα",
    image: "/images/teacher-tsipianiti.jpg",
    bio: "Φιλόλογος με άριστα από ΕΚΠΑ (1985-1989). Εργάζεται από το 1989 σε φροντιστήρια. Συγγραφέας πλήρων διδακτικών βιβλίων με σχολιασμό και κριτήρια αξιολόγησης.",
  },
  {
    name: "Κωνσταντίνος Τουλικάρογλου",
    specialty: "Μαθηματικά",
    image: "/images/teacher-toulikaroglou.jpg",
    bio: "Μαθηματικός από Πανεπιστήμιο Ιωαννίνων (1987-1991). Διδάσκει αδιάλειπτα από το 1995 σε γυμνάσια και λύκεια. Συγγραφέας διδακτικών σημειώσεων.",
  },
  {
    name: "Μαρία Παπανικολάου",
    specialty: "Αρχαία & Νέα Ελληνική Γλώσσα",
    image: "/images/teacher-papanikolaou.webp",
    bio: "Φιλόλογος ΕΚΠΑ, μεταπτυχιακό σε Επιστήμες Εκπαίδευσης στο ΕΑΠ. Διδάσκει από το 2011 σε γυμνάσια και λύκεια. Εξειδίκευση σε ειδική αγωγή.",
  },
  {
    name: "Αναστάσης Βουτσινάς",
    specialty: "Ιστορία",
    image: "/images/teacher-voutsinas.jpg",
    bio: "Ιστορικός με άριστα από Πανεπιστήμιο Ιωαννίνων. Εργάστηκε για τους Ολυμπιακούς Αγώνες 2004. Διδάσκει Ιστορία από το 2000 σε φροντιστήρια.",
  },
  {
    name: "Βασίλειος Γκόγκος",
    specialty: "Οικονομικές Επιστήμες",
    image: "/images/teacher-gogos.jpg",
    bio: "Πολλαπλά πτυχία σε Οικονομικές & Κοινωνικές Επιστήμες. Κάτοχος MBA. Διδάσκει αδιάλειπτα σε φροντιστήρια λυκείου, εισηγητής σε εκπαιδευτικά συνέδρια.",
  },
];

const TeachersPage = async ({ params }: BasePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      {/* Header */}
      <div className="bg-foreground text-white py-14">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">
            Οι Καθηγητές μας
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Εξειδικευμένοι επιστήμονες με δεκαετίες εμπειρίας που
            εμπνέουν και καθοδηγούν κάθε μαθητή.
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {teachers.map(({ name, specialty, image, bio }) => (
            <div
              key={name}
              className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative size-16 rounded-full overflow-hidden ring-2 ring-border shrink-0">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-foreground text-base leading-tight">
                    {name}
                  </h2>
                  <p className="text-xs text-primary font-medium mt-0.5">
                    {specialty}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeachersPage;
