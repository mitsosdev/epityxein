"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/general/utils";
import { Link } from "@/lib/i18n/navigation";

const navLinks = [
  { label: "Αρχική", href: "/" },
  { label: "Φιλοσοφία", href: "/filosofia" },
  { label: "Μαθήματα", href: "/courses" },
  { label: "Επιτυχίες", href: "/epityxies" },
  { label: "Καθηγητές", href: "/teachers" },
  { label: "Επικοινωνία", href: "/contact" },
];

export const SiteNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="ΕΠΙΤΥΧΕΙΝ Φροντιστήριο"
            width={115}
            height={34}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:2109734736"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="size-3.5" />
            210 9734736
          </a>
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-4 pb-4 gap-1 bg-white border-t border-border">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:2109734736"
            className="flex items-center gap-1.5 py-2.5 text-sm font-semibold text-primary"
          >
            <Phone className="size-3.5" />
            210 9734736
          </a>
        </nav>
      </div>
    </header>
  );
};
