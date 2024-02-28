import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li>Products</li>
        <li>About</li>
        <li>Contact Us</li>
        <li><Link href="/about/branches">Branches</Link></li>

        <li><Link href="/products/meat">Meat Page</Link></li>
      </ul>
    </>
  );
}
