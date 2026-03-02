import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Link } from "@/lib/i18n/navigation";

export const HeroSection = () => (
  <section className="bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
            Φροντιστήριο Ηλιούπολης
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Καλώς ήρθατε στο{" "}
            <span className="relative inline-block text-primary">
              ΕΠΙΤΥΧΕΙΝ
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-primary/40" />
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Φροντιστήριο υψηλού επιπέδου στην Ηλιούπολη. Έμπειροι καθηγητές,
            μικρά τμήματα 5-7 μαθητών και αποδεδειγμένη επιτυχία στις
            πανελλαδικές εξετάσεις.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <Link href="/courses">
                Τα Μαθήματά μας
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:2109734736">
                <Phone className="size-4" />
                210 9734736
              </a>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-[4/3]">
          <Image
            src="/images/hero-banner.webp"
            alt="Αίθουσα διδασκαλίας φροντιστηρίου ΕΠΙΤΥΧΕΙΝ"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  </section>
);
