import "./globals.css";
import "swiper/css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Menu } from "@/components/Menu";
import { Cursor } from "@/components/Cursor";
import { AnimationProvider } from "@/providers/animationProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mateusranzani.dev"),
  title: "Mateus Ranzani — Desenvolvedor Full-Stack",
  description:
    "Desenvolvedor Full Stack com experiência em Next.js, React, Node.js e Java. Criando experiências digitais intuitivas.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Java",
    "Full Stack",
    "UI/UX",
    "desenvolvedor",
    "portfolio",
  ],
  authors: [{ name: "Mateus Ranzani", url: "https://mateusranzani.dev" }],
  openGraph: {
    title: "Mateus Ranzani — Desenvolvedor Full-Stack",
    description:
      "Desenvolvedor Full Stack com experiência em Next.js, React, Node.js e Java. Criando experiências digitais intuitivas.",
    type: "website",
    url: "https://mateusranzani.dev",
    siteName: "Mateus Ranzani",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Ranzani — Desenvolvedor Full-Stack",
    description:
      "Desenvolvedor Full Stack com experiência em Next.js, React, Node.js e Java. Criando experiências digitais intuitivas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased bg-[var(--secondary-bg)]`}
      >
        {/* Prevent flash of wrong theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';if(t==='light')document.documentElement.classList.add('light');}catch(e){}})()`,
          }}
        />
        <ThemeProvider>
          <Cursor />
          <Menu />
          <AnimationProvider>{children}</AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
