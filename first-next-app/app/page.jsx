'use client'
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import img1 from '../public/1.jpg';
import Button from "./(componets)/Button";
import { useState } from "react";

export default function Home() {

  const [inputText, setInputText] = useState("");

  const handleClicked = () => {

  }

  const handleChange = (e) => {
      setInputText(e.target.value);
  }

  return (
    <>
      <h3> Event Handling, Creating Functions & Managing States </h3>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClicked}>Click here</button>
      <p>Value is: {inputText}</p>
      {inputText == 'mcodes' && <div>
        <h1>Members Areas</h1>
      </div>}
    </>
  );
}







{/* <h1>Image Component</h1>
      <Image 
        src={img1}
        alt="Sample img"
        // style={{width: "100%", objectFit: "cover"}}
        className="imgStyle"
      /> */}

      {/* <div>
        <h1>Home Page</h1>
        <div>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</div>
      </div> */}
      
      {/* <ul>
        <li><Link href="/" className={styles.link} >Home</Link></li>
        <li><Link href="/services" className={styles.link}>Services</Link></li>
        <li>Products</li>
        <li>About</li>
        <li>Contact Us</li>
        <li><Link href="/about/branches" className={styles.link}>Branches</Link></li>
        <li><Link href="/products/meat" className={styles.link}>Meat Page</Link></li>
        <li><Link href="/products/vegis" id={styles.specalLink}>Vegis Page</Link></li>
      </ul> */}