import { Facebook, Instagram, Linkedin,Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

import { Link } from "@/lib/i18n/navigation";

const navLinks = [
  { label: "Αρχική", href: "/" },
  { label: "Φιλοσοφία", href: "/filosofia" },
  { label: "Μαθήματα", href: "/courses" },
  { label: "Επιτυχίες", href: "/epityxies" },
  { label: "Καθηγητές", href: "/teachers" },
  { label: "Επικοινωνία", href: "/contact" },
];

export const SiteFooter = () => (
  <footer className="bg-foreground text-white">
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Brand */}
      <div className="space-y-4">
        <div className="inline-block bg-white rounded-md px-2 py-1">
          <Image
            src="/images/logo.jpg"
            alt="ΕΠΙΤΥΧΕΙΝ"
            width={115}
            height={34}
            className="h-8 w-auto"
          />
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          Φροντιστήριο υψηλού επιπέδου στην Ηλιούπολη. Επιτυχία στις
          πανελλαδικές εξετάσεις από το 1999.
        </p>
        <div className="flex gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="size-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="size-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="size-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="size-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="size-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-4" />
          </a>
        </div>
      </div>

      {/* Nav */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
          Σελίδες
        </h3>
        <ul className="space-y-2">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
          Επικοινωνία
        </h3>
        <ul className="space-y-3 text-sm text-white/70">
          <li className="flex items-start gap-2.5">
            <MapPin className="size-4 mt-0.5 shrink-0 text-primary" />
            ΣΚΡΑ 7, ΗΛΙΟΥΠΟΛΗ
          </li>
          <li className="flex items-center gap-2.5">
            <Phone className="size-4 shrink-0 text-primary" />
            <a href="tel:2109734736" className="hover:text-white transition-colors">
              210 9734736
            </a>
          </li>
          <li className="flex items-center gap-2.5">
            <Mail className="size-4 shrink-0 text-primary" />
            <a
              href="mailto:info@epityxein.gr"
              className="hover:text-white transition-colors"
            >
              info@epityxein.gr
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
        <span>© {new Date().getFullYear()} Φροντιστήριο ΕΠΙΤΥΧΕΙΝ. Με επιφύλαξη παντός δικαιώματος.</span>
        <span>Σχεδίαση: Πέτρος Βλασταράκος</span>
      </div>
    </div>
  </footer>
);
