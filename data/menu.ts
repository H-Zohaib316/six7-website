import type { MenuItem } from "@/types/menu";

// Namnen kommer från arbetsmanualen och ska kontrolleras mot Six7:s aktuella Foodora-meny.
// Inga priser visas. Lägg in bild med image: "/images/<filnamn>.webp" när den är godkänd.
export const menu: MenuItem[] = [
  { id: "sujuk", name: "Six7 sujuk" },
  { id: "labneh-makdous", name: "Labneh och makdous" },
  { id: "labneh-zaatar", name: "Labneh och za’atar" },
  { id: "ost-mortadella", name: "Ost och mortadella" },
  { id: "mozzarella-pesto", name: "Mozzarella och pesto" },
];

export const links = {
  foodora: "https://www.foodora.se/restaurant/t2n2/six7-t2n2",
  instagram: "https://www.instagram.com/six7hbg/",
  maps: "https://www.google.com/maps/search/?api=1&query=Six7+Carl+Krooks+gata+33+Helsingborg",
};
