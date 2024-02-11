import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <input
        className={styles["react-switch-checkbox"]}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className={styles["react-switch-label"]}
        htmlFor={`react-switch-new`}
      >
        <span className={styles["react-switch-button"]}></span>
      </label>
    </>
  );
}
