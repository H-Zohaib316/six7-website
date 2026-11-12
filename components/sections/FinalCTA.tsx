import { links } from "@/data/menu";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section} aria-labelledby="cta-rubrik">
      <h2 id="cta-rubrik" className={styles.title}>Sugen?</h2>
      <a href={links.foodora} className="btn btnDark" target="_blank" rel="noopener noreferrer">
        Beställ på Foodora
      </a>
    </section>
  );
}
