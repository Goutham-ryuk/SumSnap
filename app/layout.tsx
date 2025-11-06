import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ThemeProvider } from "@/components/themeProvider";
import { ClerkProvider } from "@clerk/nextjs";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SumSnap",
  description: "AI that turns PDFs into beautiful summaries — instantly.",
  metadataBase: new URL("https://sumsnap.com"),
  openGraph: {
    title: "SumSnap",
    description: "From PDF chaos to clarity in seconds.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/mrjackyliang/cursor.css@1.0.0/cursor.css"
          />
        </head>
        <body
          className={`${fontSans.variable} font-sans antialiased min-h-screen bg-black text-white overflow-x-hidden`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="fixed inset-0 -z-10 pointer-events-none">
              <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float-slow" />
              <div className="absolute bottom-32 right-20 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-float-reverse" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="scroll-smooth">
              <div className="relative flex min-h-screen flex-col">
                <Header />
                <main className="flex-1 pt-24">{children}</main>
                <Footer />
              </div>
            </div>
          </ThemeProvider>

          <script
            dangerouslySetInnerHTML={{
              __html: `
              document.addEventListener('mousemove', function(e) {
                const trail = document.createElement('div');
                trail.className = 'pointer-events-none fixed w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full blur-sm animate-pulse';
                trail.style.left = e.clientX - 4 + 'px';
                trail.style.top = e.clientY - 4 + 'px';
                document.body.appendChild(trail);
                setTimeout(() => trail.remove(), 800);
              });
            `,
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
