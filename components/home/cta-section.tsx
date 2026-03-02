import { Mail, Phone } from "lucide-react";

export const CtaSection = () => (
  <section className="bg-secondary py-16">
    <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center text-white">
      <h2 className="text-3xl font-extrabold tracking-tight mb-3">
        Ελάτε να φτιάξουμε τους αυριανούς επιστήμονες
      </h2>
      <p className="text-white/80 max-w-xl mx-auto mb-8 text-base">
        Επικοινωνήστε μαζί μας για ενημέρωση σχετικά με τα τμήματα, τα
        δίδακτρα και τις υποτροφίες μας.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="tel:2109734736"
          className="inline-flex items-center gap-2 h-10 rounded-md px-6 text-sm font-semibold bg-white text-secondary hover:bg-white/90 transition-colors"
        >
          <Phone className="size-4" />
          210 9734736
        </a>
        <a
          href="mailto:info@epityxein.gr"
          className="inline-flex items-center gap-2 h-10 rounded-md px-6 text-sm font-semibold border border-white text-white hover:bg-white/10 transition-colors"
        >
          <Mail className="size-4" />
          info@epityxein.gr
        </a>
      </div>
    </div>
  </section>
);
