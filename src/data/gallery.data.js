export const galleryCategories = [
  { id: "all", label: "Todas" },
  { id: "burgers", label: "La Forja" },
  { id: "eventos", label: "Eventos en Vivo" },
  { id: "menaje", label: "Tablas y Cuernos" },
];

export const galleryItems = [
  {
    id: "forja-maillard",
    category: "burgers",
    title: "Costra Maillard al Momento",
    caption: "Prensado directo en plancha para sellar jugos y bordes crujientes.",
    image: "/images/gallery/forja-01.webp",
    featured: true, // Ocupa 2 columnas en el grid móvil para romper monotonía
  },
  {
    id: "tabla-medieval",
    category: "menaje",
    title: "Montaje en Tabla Curada",
    caption: "Presentación temática artesanal para servicio de Chef Privado.",
    image: "/images/gallery/menaje-01.webp",
    featured: false,
  },
  {
    id: "cuerno-vikingo",
    category: "menaje",
    title: "Cuernos Vikingos & Tarros",
    caption: "Maridaje con hidromiel, cerveza artesanal o bebidas sin alcohol.",
    image: "/images/gallery/menaje-02.webp",
    featured: false,
  },
  {
    id: "evento-estacion",
    category: "eventos",
    title: "Estación en Evento Privado",
    caption: "Despacho continuo para reuniones y fiestas en León, Gto.",
    image: "/images/gallery/evento-01.webp",
    featured: true,
  },
];