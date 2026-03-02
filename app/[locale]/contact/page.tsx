import { Clock,Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { BasePageProps } from "@/types/page-props";

export const metadata: Metadata = {
  title: "Επικοινωνία – ΕΠΙΤΥΧΕΙΝ",
  description:
    "Επικοινωνήστε με το φροντιστήριο ΕΠΙΤΥΧΕΙΝ. Τηλ: 210 9734736. ΣΚΡΑ 7, Ηλιούπολη.",
};

const ContactPage = async ({ params }: BasePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      {/* Header */}
      <div className="bg-foreground text-white py-14">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">
            Επικοινωνία
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Επικοινωνήστε μαζί μας για πληροφορίες σχετικά με τα τμήματα,
            τα δίδακτρα και τις εγγραφές.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-foreground mb-6">
                Στοιχεία Επικοινωνίας
              </h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Διεύθυνση</div>
                    <div className="text-muted-foreground mt-0.5">
                      ΣΚΡΑ 7, ΗΛΙΟΥΠΟΛΗ
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Τηλέφωνο</div>
                    <a
                      href="tel:2109734736"
                      className="text-muted-foreground hover:text-primary transition-colors mt-0.5 block"
                    >
                      210 9734736
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a
                      href="mailto:info@epityxein.gr"
                      className="text-muted-foreground hover:text-primary transition-colors mt-0.5 block"
                    >
                      info@epityxein.gr
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="size-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Ωράριο</div>
                    <div className="text-muted-foreground mt-0.5 space-y-0.5">
                      <div>Δευτ – Παρ: 09:00 – 21:00</div>
                      <div>Σάββατο: 09:00 – 15:00</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=Skra+7+Ilioupoli+Athens+Greece&output=embed&hl=el&z=16"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ΕΠΙΤΥΧΕΙΝ - Σκρά 7, Ηλιούπολη"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
