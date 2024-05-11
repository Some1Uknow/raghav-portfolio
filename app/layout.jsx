import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Raghav Sharma Portfolio",
  description: "Full stack Developer - MERN Stack, Next.js",
};

export default function Layout({ children }) {
  return (
    <>
      <html>
        <body className="bg-black h-screen">
          <NavBar />
          <main className="h-4/5">{children}</main>
        </body>
      </html>
    </>
  );
}
