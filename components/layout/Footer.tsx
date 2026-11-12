import { links } from "@/data/menu";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.brand}>Six7</p>
      <p>Carl Krooks gata 33, Helsingborg</p>
      <ul className={styles.list}>
        <li><a href={links.foodora} target="_blank" rel="noopener noreferrer">Foodora</a></li>
        <li><a href={links.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href={links.maps} target="_blank" rel="noopener noreferrer">Karta</a></li>
      </ul>
    </footer>
  );
}
