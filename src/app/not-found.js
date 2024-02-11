import Link from "next/link";
import styles from "./system.module.css";
const NotFound = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.text1}>Error found</h2>
      <h1 className={styles.notFound}>404</h1>
      <h2 className={styles.text}>Sorry, there is nothing here</h2>
      <p className={styles.back}>
        <Link href="/">
          <span className={styles.backIcon}> &larr;</span>
          <span className={styles.text2}>Go back to the homepage</span>
        </Link>
      </p>
    </div>
  );
};
export default NotFound;
