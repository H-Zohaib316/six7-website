import { links } from "@/data/menu";
import styles from "./VisitUs.module.css";

export default function VisitUs() {
  return (
    <section className={styles.section} id="hitta-hit" aria-labelledby="hitta-rubrik">
      <h2 id="hitta-rubrik" className={styles.title}>Kom förbi.</h2>
      <address className={styles.address}>
        Six7<br />Carl Krooks gata 33<br />Helsingborg
      </address>
      <p className={styles.note}>Aktuella öppettider hittar du på Instagram och Foodora.</p>
      <div className={styles.actions}>
        <a href={links.maps} className="btn btnPrimary" target="_blank" rel="noopener noreferrer">Hitta hit</a>
        <a href={links.instagram} className="btn btnGhost" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </section>
  );
}
