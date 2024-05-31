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
        <body className="bg-black min-h-screen max-sm:h-max">
          <NavBar />
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
