import Image from "next/image";
import { links } from "@/data/menu";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#start" className={styles.logo} aria-label="Six7, till toppen">
        <Image src="/images/six7-logo.png" alt="Six7" width={48} height={48} priority />
      </a>
      <nav aria-label="Huvudmeny" className={styles.nav}>
        <a href="#meny">Meny</a>
        <a href="#om-oss">Om oss</a>
        <a href="#hitta-hit">Hitta hit</a>
      </nav>
      <a href={links.foodora} className={`btn btnPrimary ${styles.cta}`} target="_blank" rel="noopener noreferrer">
        Beställ
      </a>
    </header>
  );
}
