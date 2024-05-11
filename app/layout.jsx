import NavBar from "@/components/HomePageComponents/NavBar";
import "./globals.css";

export const metadata = {
  title: "Raghav Sharma Portfolio",
  description: "Raghav Sharma's Portfolio, Full stack Developer",
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
