const getBurgerVariants = ({ noble = 120, real = 150 } = {}) => ([
  { label: 'Noble', price: noble },
  { label: 'Real', price: real }
]);
const getHotDogVariants = ({ alfa, beta}) => ([
  { label: 'Beta', price: beta },
  { label: 'Alfa', price: alfa }
]);
const getSidesVariants = ({ dragon = 100, troll = 65 } = {}) => ([
  { label: 'Troll', price: troll },
  { label: 'Dragón', price: dragon }
]);

const beveragesPrice = 20;

const getWhatsappMessage = customMessage => `Buen día, magos 🧙‍♂️ Quiero pedir ${customMessage}`;

export const menuData = {
  burgers: {
    id: 1,
    label: 'Hamburguesas',
    variantsInfo: [
      { name: 'Real', detail: 'Doble carne, doble queso y doble porción de receta.' },
      { name: 'Noble', detail: 'Una carne, un queso y una porción de la receta.' }
    ],
    options: [
      {
        name: 'La Única',
        image: '/images/menu/unica.webp',
        variants: getBurgerVariants(),
        description: 'Medallón de res, <b class="text-brand-text">mermelada de tocino</b> ⚔️ queso américano. Pan untado con aderezo especial ⚔️',
        get whatsappMessage() {
          return getWhatsappMessage(`"*${this.name}*" 🍔`)
        }
      },
      {
        name: 'Montaraz',
        image: '/images/menu/montaraz.webp',
        variants: getBurgerVariants({ noble: 140, real: 200 }),
        description: 'Medallón de res, <b class="text-brand-text">medallón de queso crema con jalapeño</b> ⚔️, tocino y queso manchego, empanizado en panko. Queso américano y pan untado con aderezo ranch ⚔️',
        get whatsappMessage() {
          return getWhatsappMessage(`una "*${this.name}*" 🍔`)
        }
      },
      {
        name: 'Bombadil',
        image: '/images/menu/bombadil.webp',
        variants: getBurgerVariants(),
        description: 'Medallón de res, <b class="text-brand-text">mermelada de piña</b> ⚔️ queso américano y lechuga. Pan untado con mayonesa.',
        get whatsappMessage() {
          return getWhatsappMessage(`una "*${this.name}*" 🍔`)
        }
      },
      {
        name: 'Bolsón',
        image: '/images/menu/bolson.webp',
        variants: getBurgerVariants({ noble: 95, real: 125 }),
        description: '<b class="text-brand-text">La estándar</b>, lechuga, cebolla, jitomate, pepinillos ⚔️ ketchup y mostaza. Pan untado con mayonesa.',
        get whatsappMessage() {
          return getWhatsappMessage(`una "*${this.name}*" 🍔`)
        }
      },
      {
        name: 'Manwë',
        badge: 'Nueva',
        image: '/images/menu/manwe.webp',
        price: 140,
        description: '<b class="text-brand-text">Pechuga de pollo</b> marinada, empanizada y frita ⚔️ <b class="text-brand-text">Bañada en miel picante</b> ⚔️ Queso blanco fundido, lechuga, jitomate, pepinillos ⚔️ Pan untado con aderezo ranch ⚔️',
        get whatsappMessage() {
          return getWhatsappMessage(`una "*${this.name}*" 🍔`)
        }
      },
      {
        name: 'Varda',
        badge: 'Nueva',
        image: '/images/menu/varda.webp',
        price: 150,
        description: '<b class="text-brand-text">Pechuga de pollo</b> marinada, empanizada y frita ⚔️ <b class="text-brand-text">Tocino</b> y queso blanco fundido ⚔️ Ketchup, lechuga y jitomate. Pan untado con mayonesa.',
        get whatsappMessage() {
          return getWhatsappMessage(`una "*${this.name}*" 🍔`)
        }
      },
    ]
  },
  miniBurgers: {
    id: 2,
    label: 'Mini Hamburguesas',
    options: [
      {
        name: 'Mini Única',
        image: '/images/menu/mini-unica.webp',
        price: 40,
        description: 'Mini Hamburguesa con <b class="text-brand-text">mermelada de tocino</b> ⚔️',
        featuredFull: true,
        get whatsappMessage() {
          return getWhatsappMessage(`una "*${this.name}*" 🍔`)
        }
      },
      {
        name: 'Mini Bombadil',
        image: '/images/menu/mini-bombadil.webp',
        price: 40,
        description: 'Mini Hamburguesa con <b class="text-brand-text">mermelada de piña</b> ⚔️',
        get whatsappMessage() {
          return getWhatsappMessage(`una "*${this.name}*" 🍔`)
        }
      },
      {
        name: 'Mini Bolsón',
        image: '/images/menu/mini-bolson.webp',
        price: 40,
        description: 'Mini Hamburguesa <b class="text-brand-text">clásica</b>.',
        get whatsappMessage() {
          return getWhatsappMessage(`una "*${this.name}*" 🍔`)
        }
      },
      {
        name: 'Comarca',
        image: '/images/menu/comarca.webp',
        price: 150,
        description: '<b class="text-brand-text">4</b> Mini Hamburguesas + <b class="text-brand-text">1</b> aderezo para acompañar.',
        get whatsappMessage() {
          return getWhatsappMessage(`una "*${this.name}*" 🍔🍔🍔 con aderezo: (selecciona 1 aderezo)`)
        }
      },
      {
        name: 'Comunidad',
        image: '/images/menu/comunidad.webp',
        price: 300,
        description: '<b class="text-brand-text">9</b> Mini Hamburguesas + <b class="text-brand-text">2</b> aderezos para acompañar.',
        get whatsappMessage() {
          return getWhatsappMessage(`una "*${this.name}*" 🍔🍔🍔 con aderezos: (selecciona 2 aderezos)`)
        }
      }
    ]
  },
  hotdogs: {
    id: 3,
    label: 'Hot Dogs',
    variantsInfo: [
      { name: 'Alfa', detail: 'Cubierto con una capa de queso blanco' },
      { name: 'Beta', detail: 'Receta normal, sin ingredientes extra' },
    ],
    options: [
      {
        name: 'Huargo',
        image: '/images/menu/huargo.webp',
        variants: getHotDogVariants({ alfa: 110, beta: 80 }),
        description: 'Con 2 rebanadas de tocino, cebolla crujiente, pan suave, mayonesa, ketchup y mostaza.',
        featuredFull: true,
        get whatsappMessage() {
          return getWhatsappMessage(`un "*${this.name}*" 🌭`)
        }
      },
      {
        name: 'Grond',
        image: '/images/menu/grond.webp',
        variants: getHotDogVariants({ alfa: 100, beta: 70 }),
        description: 'Pimiento confitado, cebolla crujiente, pan suave, mayonesa, ketchup y mostaza.',
        get whatsappMessage() {
          return getWhatsappMessage(`un "*${this.name}*" 🌭`)
        }
      },
      {
        name: 'Pony Bill',
        image: '/images/menu/pony-bill.webp',
        variants: getHotDogVariants({ alfa: 90, beta: 60 }),
        description: 'El clásico, cebolla fresca, jitomate, jalapeño, mayonesa, ketchup y mostaza.',
        get whatsappMessage() {
          return getWhatsappMessage(`un "*${this.name}*" 🌭`)
        }
      }
    ]
  },
  forbidden: {
    id: 4,
    label: 'Recetas Prohibidas',
    options: [
      {
        name: 'Mano de Hierro',
        image: '/images/menu/mano-de-hierro.webp',
        price: 150,
        description: 'Burrito gigante con medallón de res (150 gr), papas de la forja (100 gr) ⚔️ 2 rebanadas de queso américano, aderezo especial ⚔️ ketchup, mostaza, lechuga, jitomate y cebolla. Envuelto en tortilla de harina de 30 cm de diámetro untada con mayonesa.',
        featuredFull: true,
        get whatsappMessage() {
          return getWhatsappMessage(`un "*${this.name}*" 🌯`)
        }
      }
    ]
  },
  sides: {
    id: 5,
    label: 'Complementos',
    variantsInfo: [
      { name: 'Dragón', detail: 'Porción para compartir' },
      { name: 'Troll', detail: 'Porción individual' },
    ],
    options: [
      {
        name: 'Papas de la Forja',
        image: '/images/menu/papas-forja.webp',
        variants: getSidesVariants(),
        description: 'Bastones de <b class="text-brand-text">papas fritas</b> hechos a base de puré de papa, fritos hasta alcanzar ese crujiente perfecto y a la vez suaves por dentro.',
        get whatsappMessage() {
          return getWhatsappMessage(`unas "*${this.name}*" 🍟 con sazonador: (sal y pimienta/limón pimienta/serrano/ajo parmesano/sin sazonador) y aderezo: (chimichurri/chipotle mayo/ranch/bbq/sin aderezo)`)
        }
      },
      {
        name: 'Joyas de la Montaña',
        image: '/images/menu/joyas.webp',
        variants: getSidesVariants({ dragon: 125, troll: 75 }),
        description: '<b class="text-brand-text">Esferas de queso manchego</b> enharinadas con nuestra receta especial y fritas hasta conseguir derretir el queso.',
        get whatsappMessage() {
          return getWhatsappMessage(`unas "*${this.name}*" 🧀 con sazonador: (sal y pimienta/limón pimienta/serrano/ajo parmesano/sin sazonador) y aderezo: (chimichurri/chipotle mayo/ranch/bbq/sin aderezo)`)
        }
      },
      {
        name: 'Oro de Durin',
        image: '/images/menu/oro-de-durin.webp',
        variants: getSidesVariants(),
        description: '<b class="text-brand-text">Tiras de elote amarillo</b>, cocido, frito y finalmente sazonado. Crujientes por fuera y jugosas por dentro, para chuparse los dedos.',
        get whatsappMessage() {
          return getWhatsappMessage(`un "*${this.name}*" 🌽 con sazonador: (sal y pimienta/limón pimienta/serrano/ajo parmesano/sin sazonador) y aderezo: (chimichurri/chipotle mayo/ranch/bbq/sin aderezo)`)
        }
      },
      {
        name: 'Dedo de Orco',
        image: '/images/menu/dedo-de-orco.webp',
        variants: getSidesVariants(),
        description: 'Bastón de <b class="text-brand-text">queso manchego</b> (50 gr) <b class="text-brand-text">envuelto</b> con una capa de <b class="text-brand-text">puré de papa</b>. Frito hasta derretir el queso y dorar la papa del exterior.',
        get whatsappMessage() {
          return getWhatsappMessage(`un "*${this.name}*" 🧀 con sazonador: (sal y pimienta/limón pimienta/serrano/ajo parmesano/sin sazonador) y aderezo: (chimichurri/chipotle mayo/ranch/bbq/sin aderezo)`)
        }
      },
      {
        name: 'Escamas de Dragón',
        image: '/images/menu/escamas-de-dragon.webp',
        variants: getSidesVariants({ dragon: 75, troll: 125 }),
        description: 'Tiras de carne sazonadas con nuestro marinado secreto y deshidratadas para conseguir <b class="text-brand-text">carne seca</b> de excelente calidad.',
        get whatsappMessage() {
          return getWhatsappMessage(`unas "*${this.name}*" 🐲 sabor: (original/limón/serrano)`)
        }
      },
    ]
  },
  beverages: {
    id: 6,
    label: 'Bebidas',
    options: [
      {
        name: 'Pepsi',
        image: '/images/menu/pepsi.webp',
        price: beveragesPrice
      },
      {
        name: 'Pepsi Black',
        image: '/images/menu/pepsi-black.webp',
        price: beveragesPrice
      },
      {
        name: 'Manzanita Sol',
        image: '/images/menu/manzana.webp',
        price: beveragesPrice
      },
      {
        name: '7 Up',
        image: '/images/menu/seven-up.webp',
        price: beveragesPrice
      },
      {
        name: 'Mirinda',
        image: '/images/menu/mirinda.webp',
        price: beveragesPrice
      },
      {
        name: 'Agua Mineral',
        image: '/images/menu/mineral.webp',
        price: beveragesPrice
      },
      {
        name: 'Agua Natural',
        image: '/images/menu/agua.webp',
        price: beveragesPrice
      }
    ]
  }
};