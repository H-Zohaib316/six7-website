export type MenuItem = {
  id: string;
  name: string;
  /** Kort, verifierad beskrivning. Lämna tom tills den är kontrollerad mot Foodora. */
  description?: string;
  /** Sökväg i public/, t.ex. "/images/six7-sujuk-sandwich.webp". Utan bild visas Six7-märket. */
  image?: string;
  imageAlt?: string;
};
