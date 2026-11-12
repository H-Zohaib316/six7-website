import styles from "./Signature.module.css";

export default function Signature() {
  return (
    <section className={styles.section} aria-labelledby="signatur-rubrik">
      <h2 id="signatur-rubrik" className={styles.title}>Six7 sujuk</h2>
      <p className={styles.text}>Vår egen sandwich. Smaken säger resten.</p>
    </section>
  );
}
