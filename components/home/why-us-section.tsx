import { Award, BookOpen, FileText, GraduationCap,Users } from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Έμπειροι Καθηγητές",
    description:
      "Καθηγητές με 20-35 χρόνια εμπειρία, συγγραφείς εκπαιδευτικών βιβλίων και συντάκτες θεμάτων ΟΕΦΕ.",
  },
  {
    icon: BookOpen,
    title: "Μεθοδική Διδασκαλία",
    description:
      "Εβδομαδιαία επαναληπτικά διαγωνίσματα για στερέωση της ύλης και έγκαιρο εντοπισμό αδυναμιών.",
  },
  {
    icon: FileText,
    title: "Πλούσιο Υλικό",
    description:
      "Πάνω από 60 συγγράμματα και σημειώσεις δημιουργημένα αποκλειστικά από τους καθηγητές μας.",
  },
  {
    icon: Users,
    title: "Μικρά Τμήματα",
    description:
      "Τμήματα 5-7 μαθητών εξασφαλίζουν εξατομικευμένη προσοχή και αποτελεσματική εκμάθηση.",
  },
  {
    icon: Award,
    title: "Υποτροφίες",
    description:
      "Παρέχουμε υποτροφίες και διευκολύνσεις πληρωμής για να είναι η εκπαίδευση προσβάσιμη σε όλους.",
  },
];

export const WhyUsSection = () => (
  <section className="bg-muted/40 py-20">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
          Γιατί να επιλέξετε εμάς
        </h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Πέντε λόγοι που μας διακρίνουν και μας έχουν καθιερώσει ως το
          φροντιστήριο εμπιστοσύνης της Ηλιούπολης.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="size-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
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
);
