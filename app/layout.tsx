import Footer from "./Comps/footer/footer";
import "./globals.css";
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-[1440px] mx-auto">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
