import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Link } from "@/lib/i18n/navigation";

const teachers = [
  {
    name: "Χρήστος Βλασταράκος",
    specialty: "Ιστορία – Αρχαιολογία",
    image: "/images/teacher-vlastarakos.png",
  },
  {
    name: "Ανδρέας Αντωνιάδης",
    specialty: "Μαθηματικά",
    image: "/images/teacher-antoniadis.jpg",
  },
  {
    name: "Νικόλαος Μεταξιώτης",
    specialty: "Μαθηματικά",
    image: "/images/teacher-metaxiotis.png",
  },
  {
    name: "Παναγιώτης Βορλόκας",
    specialty: "Φυσική",
    image: "/images/teacher-vorlokas.jpg",
  },
  {
    name: "Νάσια Λούκα",
    specialty: "Νέα Ελληνική Γλώσσα & Λογοτεχνία",
    image: "/images/teacher-louka.webp",
  },
  {
    name: "Έφη Κορκολή",
    specialty: "Αρχαία Ελληνικά",
    image: "/images/teacher-korkoli.jpg",
  },
];

export const TeachersSection = () => (
  <section className="bg-white py-20">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="flex items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
            Οι Καθηγητές μας
          </h2>
          <p className="mt-2 text-muted-foreground">
            Εξειδικευμένοι επιστήμονες με δεκαετίες εμπειρίας.
          </p>
        </div>
        <Link
          href="/teachers"
          className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline shrink-0"
        >
          Όλοι οι Καθηγητές <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
        {teachers.map(({ name, specialty, image }) => (
          <div key={name} className="text-center group">
            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary/50 transition-all mb-3">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <p className="text-sm font-semibold text-foreground leading-tight">
              {name}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">{specialty}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center sm:hidden">
        <Link
          href="/teachers"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          Όλοι οι Καθηγητές <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  </section>
);
