import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      {/* Hero Section */}
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#0f172a" }}>
        Welcome to Citizen Complaint Management System
      </h1>
      <p style={{ marginTop: "1rem", fontSize: "1.2rem", color: "#475569" }}>
        A platform to report, track, and resolve civic issues efficiently.
      </p>

      {/* Call to Action */}
      <div style={{ marginTop: "2rem" }}>
        <Link
          href="/auth/register"
          style={{
            padding: "0.8rem 1.5rem",
            backgroundColor: "#2563eb",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
            marginRight: "1rem",
          }}
        >
          Get Started
        </Link>
        <Link
          href="/about"
          style={{
            padding: "0.8rem 1.5rem",
            backgroundColor: "#f1f5f9",
            color: "#0f172a",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Learn More
        </Link>
      </div>

      {/* Features Section */}
      <div style={{ marginTop: "4rem", display: "flex", justifyContent: "center", gap: "2rem" }}>
        <div style={{ maxWidth: "250px", padding: "1rem", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "600" }}>📝 Easy Complaint Filing</h3>
          <p style={{ marginTop: "0.5rem", color: "#475569" }}>
            Submit your complaints quickly with simple forms and photo uploads.
          </p>
        </div>
        <div style={{ maxWidth: "250px", padding: "1rem", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "600" }}>📊 Real-Time Tracking</h3>
          <p style={{ marginTop: "0.5rem", color: "#475569" }}>
            Track complaint progress and stay updated with notifications.
          </p>
        </div>
        <div style={{ maxWidth: "250px", padding: "1rem", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "600" }}>✅ Faster Resolutions</h3>
          <p style={{ marginTop: "0.5rem", color: "#475569" }}>
            Complaints are directed to the right department for quicker solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
