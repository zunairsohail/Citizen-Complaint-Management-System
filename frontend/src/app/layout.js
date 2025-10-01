import Link from "next/link";
import "./globals.css"; // keep your global styles here

export const metadata = {
  title: "Citizen Complaint Management System",
  description: "A civic platform for filing and tracking complaints",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <nav style={{ padding: "1rem", background: "#0f172a", color: "white" }}>
          <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none" }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
            <li><Link href="/auth/login">Login</Link></li>
            <li><Link href="/auth/register">Register</Link></li>
          </ul>
        </nav>

        {/* Page Content */}
        <main style={{ padding: "2rem" }}>
          {children}
        </main>

        {/* Footer */}
        <footer style={{ padding: "1rem", background: "#f1f5f9", marginTop: "2rem", textAlign: "center" }}>
          <p>© {new Date().getFullYear()} Citizen Complaint Management System</p>
        </footer>
      </body>
    </html>
  );
}
