import Image from "next/image";
import type { MenuItem } from "@/types/menu";
import SixSevenMark from "./SixSevenMark";
import styles from "./MenuCard.module.css";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <li className={styles.card}>
      <div className={styles.visual}>
        {item.image ? (
          <Image
            src={item.image}
            alt={item.imageAlt ?? `${item.name} från Six7`}
            width={600}
            height={600}
            sizes="(min-width: 900px) 30vw, 80vw"
            className={styles.photo}
          />
        ) : (
          <SixSevenMark className={styles.mark} />
        )}
      </div>
      <h3 className={styles.name}>{item.name}</h3>
      {item.description && <p className={styles.desc}>{item.description}</p>}
    </li>
  );
}
