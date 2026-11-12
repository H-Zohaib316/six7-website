import styles from "./AnimatedWordmark.module.css";

const words = ["Six7", "Sandwiches", "Café", "Helsingborg"];

export default function AnimatedWordmark() {
  const row = [...words, ...words, ...words, ...words];
  return (
    <div className={styles.strip} aria-hidden="true">
      <div className={styles.track}>
        {[0, 1].map((k) => (
          <div className={styles.group} key={k}>
            {row.map((w, i) => (
              <span key={i}>{w}<i className={styles.dot} /></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
