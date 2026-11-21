export const EVENT_BASE_FEE = 1900; // Costo interno fijo (traslado, equipo, staff y operación total)
export const EXTRA_HOUR_FEE = 500; // Tarifa por hora adicional de servicio en sitio

export const eventsData = [
  {
    id: "chef-privado",
    badge: "4 a 15 Personas",
    title: "Experiencia Chef Privado",
    subtitle:
      "Banquete degustación de 3 tiempos preparado en vivo, con emplatado y menaje de temática medieval.",
    pricingType: "per-guest",
    minGuests: 4,
    maxGuests: 15,
    defaultGuests: 6,
    pricePerGuest: 650,
    serviceDuration: "2 horas de servicio continuo en sitio",
    highlights: [
      "2 horas de servicio continuo en vivo (montaje previo y limpieza final incluidos)",
      "Menú exclusivo de 3 tiempos con ingredientes de autor fuera de carta",
      "Emplatado temático: tablas de madera, tarros, cuernos vikingos y más",
      "2 bebidas por invitado incluidas (opciones con o sin alcohol a elegir)",
      "Preparación al momento frente a tus invitados con explicación del chef",
    ],
    exclusiveMenu: [
      {
        course: "1er Tiempo • Entrada y Bebidas",
        name: "Entrada Artesanal + 2 Bebidas por Persona",
        description:
          "Entrada al centro para abrir apetito mientras encendemos la plancha, acompañada de 2 bebidas a elegir por invitado (con o sin alcohol) servidas en cuerno vikingo o tarro medieval.",
      },
      {
        course: "2do Tiempo • Plato Fuerte (Fragua en Vivo)",
        name: "Hamburguesa exclusiva de Autor",
        description:
          "Hamburguesa exclusiva de res o de pollo, ingredientes y preparación fuera de carta, presentada sobre tabla de madera.",
      },
      {
        course: "3er Tiempo • Cierre Dulce",
        name: "Postre Artesanal de la Casa",
        description:
          "Cerramos la velada con uno o dos postres previamente elegidos.",
      }
    ],
    requirements:
      "Servicio disponible a partir de 4 personas. El menaje temático (cuernos, tarros, tablas, etc.) se facilita en calidad de préstamo durante el servicio.",
  },
  {
    id: "eventos",
    badge: "16 a 60 Personas",
    title: "Eventos y Banquetes",
    subtitle:
      "Estación de smash burgers con temática medieval, con flujo ágil para fiestas, cumpleaños y reuniones.",
    pricingType: "base-plus-guest",
    minGuests: 16,
    maxGuests: 60,
    defaultGuests: 30,
    serviceDuration: "2 horas de servicio continuo en sitio",
    baseOptions: [
      {
        id: "hamburguesas",
        label: "Hamburguesa",
        packages: [
          {
            id: "escudero",
            name: "Escudero",
            tag: "Esencial",
            pricePerGuest: 110,
            description: "1 Burger Noble (1 carne + queso) a elegir entre hasta 3 recetas del menú.",
          },
          {
            id: "caballero",
            name: "Caballero",
            tag: "Clásico",
            pricePerGuest: 140,
            description: "1 Burger Noble + 1 complemento individual a elegir.",
          },
          {
            id: "monarca",
            name: "Monarca",
            tag: "Festín",
            pricePerGuest: 225,
            description: "1 Burger Real (doble) + 1 complemento individual + 1 bebida por invitado.",
          },
        ],
      },
      {
        id: "hotdogs",
        label: "Hot Dogs",
        packages: [
          {
            id: "escudero",
            name: "Escudero",
            tag: "Esencial",
            pricePerGuest: 105,
            description: "2 Hot Dogs Beta (sencillos) a elegir entre hasta 3 recetas del menú.",
          },
          {
            id: "caballero",
            name: "Caballero",
            tag: "Clásico",
            pricePerGuest: 135,
            description: "2 Hot Dogs Beta + 1 complemento individual a elegir.",
          },
          {
            id: "monarca",
            name: "Monarca",
            tag: "Festín",
            pricePerGuest: 185,
            description: "2 Hot Dogs Alfa (dobles/jumbo) + 1 complemento individual + 1 bebida.",
          },
        ],
      },
      {
        id: "mini-burgers",
        label: "Mini Burgers",
        packages: [
          {
            id: "escudero",
            name: "Escudero",
            tag: "Esencial",
            pricePerGuest: 95,
            description: "Barra de 3 Mini Burgers por persona (hasta 3 recetas a elegir).",
          },
          {
            id: "caballero",
            name: "Caballero",
            tag: "Clásico",
            pricePerGuest: 130,
            description: "Barra de 3 Mini Burgers por persona + 1 complemento individual.",
          },
          {
            id: "monarca",
            name: "Monarca",
            tag: "Festín",
            pricePerGuest: 175,
            description: "Barra de 4 Mini Burgers por persona + complemento individual + 1 bebida.",
          },
        ],
      },
    ],
    highlights: [
      "2 horas de servicio continuo en estación con temática medieval",
      "Montaje previo y limpieza de la zona de trabajo posterior al servicio",
      "Selección de hasta 3 variedades de nuestro menú estándar",
      "Despacho ágil en empaque práctico",
      "Barra de aderezos de la taberna"
    ],
    exclusiveMenu: [],
    requirements:
      "Capacidad máxima de 60 personas por estación en 2 horas. Para eventos de más de 60 invitados cotizamos una segunda estación por WhatsApp.",
  }
];

export const eventsFaqs = [
  {
    q: "¿Cuál es la diferencia entre Chef Privado y Eventos?",
    a: "Chef Privado (4 a 15 personas) es una experiencia gastronómica íntima de 3 tiempos con recetas exclusivas fuera de carta, bebidas incluidas, postre y emplatado temático en tablas de madera y cuernos vikingos. En cambio, Eventos (16+ personas) está diseñado para fiestas y grupos grandes con despacho ágil de nuestro menú estándar y empaque práctico.",
  },
  {
    q: "¿Con cuánta anticipación debo apartar mi fecha?",
    a: "Recomendamos apartar con al menos 5 días de anticipación para asegurar disponibilidad y preparación de insumos frescos.",
  },
  {
    q: "¿Cómo se reserva el evento?",
    a: "Se bloquea la fecha con el 50% de anticipo y el resto se liquida el día del evento antes de iniciar el servicio.",
  },
  {
    q: "¿Puedo personalizar las hamburguesas del evento?",
    a: "Sí, puedes elegir combinaciones de nuestro menú o armar una selección especial según los gustos de tus invitados.",
  },
  {
    q: "¿Cuánto tiempo dura el servicio en mi domicilio?",
    a: "El servicio de cocina y atención en vivo dura 2 horas continuas. Nosotros llegamos 30 a 45 minutos antes para montar y nos encargamos de la limpieza al terminar sin descontarlo de tu tiempo de servicio.",
  },
  {
    q: "¿Qué pasa si queremos extender el evento más tiempo?",
    a: `Si tu reunión se alarga, puedes agregar horas extra de servicio por $${EXTRA_HOUR_FEE} MXN por hora (sujeto a disponibilidad de agenda).`,
  },
  {
    q: "¿Cómo se calcula el costo de mi evento?",
    a: `Se compone de una tarifa fija de operación de $${EVENT_BASE_FEE.toLocaleString("es-MX")} MXN (que cubre flete, gasolina, equipo, personal, 2 horas de servicio en el sitio y limpieza de zona de trabajo) más el costo de los alimentos según el número de invitados.`,
  },
  {
    q: "¿Los precios incluyen IVA? ¿Pueden facturar?",
    a: "Los precios mostrados en el cotizador no incluyen IVA. Si requieres factura fiscal para tu evento o empresa, con gusto la emitimos agregando el 16% de IVA correspondiente al total.",
  }
];