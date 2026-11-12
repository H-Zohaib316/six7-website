import { menu, links } from "@/data/menu";
import MenuCard from "@/components/ui/MenuCard";
import styles from "./FeaturedMenu.module.css";

export default function FeaturedMenu() {
  return (
    <section className={styles.section} id="meny" aria-labelledby="meny-rubrik">
      <h2 id="meny-rubrik" className={styles.title}>Det här tar du med dig.</h2>
      <ul className={styles.list}>
        {menu.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </ul>
      <a href={links.foodora} className="btn btnDark" target="_blank" rel="noopener noreferrer">
        Hela menyn på Foodora
      </a>
    </section>
  );
}
