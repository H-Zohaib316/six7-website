import styles from "./SixSevenMark.module.css";

type Props = { spinning?: boolean; className?: string };

/** Six7:s runda märke i CSS/SVG. Byt mot bild genom att rendera <Image> i stället. */
export default function SixSevenMark({ spinning = false, className = "" }: Props) {
  return (
    <div className={`${styles.mark} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" className={`${styles.ring} ${spinning ? styles.spin : ""}`}>
        <defs>
          <path id="circ" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
        </defs>
        <text className={styles.ringText}>
          <textPath href="#circ">Six7 • Sandwiches • Café • Helsingborg • Six7 • Sandwiches • Café • </textPath>
        </text>
      </svg>
      <span className={styles.num}>67</span>
    </div>
  );
}
