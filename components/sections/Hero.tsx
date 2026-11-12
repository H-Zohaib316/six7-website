import { links } from "@/data/menu";
import SixSevenMark from "@/components/ui/SixSevenMark";
import AnimatedWordmark from "@/components/ui/AnimatedWordmark";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.hero} id="start">
        <div className={styles.visual}>
          <SixSevenMark spinning />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Din nästa favorit&shy;sandwich.</h1>
          <p className={styles.lead}>Nyöppnat på Carl Krooks gata i Helsingborg.</p>
          <div className={styles.actions}>
            <a href="#meny" className="btn btnPrimary">Se menyn</a>
            <a href={links.foodora} className="btn btnGhost" target="_blank" rel="noopener noreferrer">
              Beställ på Foodora
            </a>
          </div>
        </div>
      </section>
      <AnimatedWordmark />
    </>
  );
}
