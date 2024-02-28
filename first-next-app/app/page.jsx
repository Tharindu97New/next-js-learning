import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li><Link href="/" className={styles.link} >Home</Link></li>
        <li><Link href="/services" className={styles.link}>Services</Link></li>
        <li>Products</li>
        <li>About</li>
        <li>Contact Us</li>
        <li><Link href="/about/branches" className={styles.link}>Branches</Link></li>

        <li><Link href="/products/meat" className={styles.link}>Meat Page</Link></li>
        <li><Link href="/products/vegis" id={styles.specalLink}>Vegis Page</Link></li>
        
      </ul>
    </>
  );
}
