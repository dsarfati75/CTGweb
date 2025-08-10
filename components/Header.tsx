import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header style={{
      display:"flex", alignItems:"center", padding:"0.5rem 1rem",
      background:"#fff", borderBottom:"1px solid #e5e5e5"
    }}>
      <Link href="/" style={{ display:"inline-flex", alignItems:"center" }}>
        <Image src="/cinematech-logo.png" alt="CinemaTech" width={240} height={48} priority />
      </Link>
      <nav style={{ marginLeft:"auto", display:"flex", gap:"1rem" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
