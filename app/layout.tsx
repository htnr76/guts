import NavBar from "./Comps/NavBar/navbar";
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
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
