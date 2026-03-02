import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getMessages,setRequestLocale } from "next-intl/server";

import { Providers } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { routing } from "@/lib/i18n/routing";
import { BaseLayoutProps } from "@/types/page-props";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "greek"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "ΕΠΙΤΥΧΕΙΝ – Φροντιστήριο Ηλιούπολης",
  description:
    "Φροντιστήριο υψηλού επιπέδου στην Ηλιούπολη. Έμπειροι καθηγητές, μικρά τμήματα, 90% ποσοστό επιτυχίας στις πανελλαδικές εξετάσεις.",
};

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

const LocaleLayout = async ({ children, params }: BaseLayoutProps) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${roboto.variable} font-sans antialiased`}>
        <Providers messages={messages} locale={locale}>
          <SiteNavbar />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
};

export default LocaleLayout;
