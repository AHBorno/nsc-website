import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Navians' Science Club | NSC",
  description: "Official website of Navians' Science Club, Noubahini College Dhaka. Promoting science and innovation since 2017.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#05070A] text-slate-200 border-8 border-[#1e293b] min-h-screen relative" suppressHydrationWarning>
        <div className="fixed inset-0 bg-dots opacity-10 pointer-events-none -z-10" />
        {children}
      </body>
    </html>
  );
}
