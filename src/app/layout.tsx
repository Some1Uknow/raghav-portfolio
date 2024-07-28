import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Raghav Sharma",
  description: "Full Stack Developer",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "MERN",
    "MongoDB",
    "Express.js",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Frontend Development",
    "Full-Stack Development",
    "LangChain",
    "Shadcn UI",
    "Web Development",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Full-Stack Developer",
    "Web Developer",
    "TypeScript Developer",
    "Software Developer",
    "Internships",
    "Open Source Contributor",
    "Blogging",
    "Freelancer",
    "Responsive Design",
    "Modern Web Applications",
    "Docker", 
    "AWS",
    "Kubernetes"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const name = "raghav sharma";
  const navItems = ["Work", "About", "Contact"];

  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <Navbar name={name} navItems={navItems} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
