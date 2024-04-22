import "./globals.css";

export const metadata = {
  title: "Raghav Sharma Portfolio",
  description: "Raghav Sharma's Portfolio, Full stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
