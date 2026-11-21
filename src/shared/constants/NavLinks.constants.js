export const routes = {
  index: '/',
  events: '/eventos',
  gallery: '/galeria'
};

export const navLinks = [
  { to: routes.index, label: "Menú", end: true },
  { to: routes.events, label: "Eventos", end: false },
  { to: routes.gallery, label: "Galería", end: false },
];