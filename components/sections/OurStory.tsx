import styles from "./OurStory.module.css";

export default function OurStory() {
  return (
    <section className={styles.section} id="om-oss" aria-labelledby="om-oss-rubrik">
      <h2 id="om-oss-rubrik" className={styles.title}>Två bröder. En sandwichbutik.</h2>
      <div className={styles.body}>
        <p>
          Six7 drivs av Mohammad och Ahmad Manon. Här blir det sandwiches, moderna drycker och smaker med
          mellanösterninfluenser, mitt i Helsingborg.
        </p>
        <p>Namnet kommer från en viral trend. Maten är på riktigt.</p>
      </div>
    </section>
  );
}
