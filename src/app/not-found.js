import Link from "next/link";
import styles from "./system.module.css";
import error from "../assets/image/error.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Image src={error} className={styles.Imageerror} alt="404" />
      <h1 className={styles.notFound}>404</h1>
      <h2 className={styles.text1}>ERROR</h2>
      <h2 className={styles.text}>Sorry, there is nothing here</h2>
      <p className={styles.back}>
        <Link href="/">
          <span className={styles.backIcon}> &larr;</span>
          <span className={styles.text2}>Go back </span>
        </Link>
      </p>
    </div>
  );
}
