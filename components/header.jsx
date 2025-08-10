import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0.5rem 1rem",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: "inline-flex", alignItems: "center" }}>
        <Image
          src="/cinematech-logo.png" // ✅ exact working path
          alt="CinemaTech"
          width={240}                 // adjust as needed
          height={48}                  // matches logo height
          priority
        />
      </Link>

      {/* Example nav links - adjust or remove as needed */}
      <nav style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
