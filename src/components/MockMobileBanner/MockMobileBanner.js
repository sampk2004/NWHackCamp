import styles from "./MockMobileBanner.module.css";

export default function MockMobileBanner({ children }) {
  return (
    <>
      <img src="/header.png" className={styles.header} alt="image" />
      {children}
    </>
  );
}
