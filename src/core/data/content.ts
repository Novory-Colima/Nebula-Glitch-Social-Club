/**
 * Site Content — Nebula Glitch Social Club
 * Premium Specialty Coffee House
 *
 * All narrative content lives here. Components consume this data
 * and remain purely presentational.
 */

export interface DrinkItem {
  name: string;
  description: string;
  tag: string;
}

export interface MenuItem {
  name: string;
  price: string;
  note: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface SpaceItem {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface GamingFeature {
  title: string;
  detail: string;
}

export interface CommunityEvent {
  name: string;
  description: string;
  day: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export const siteContent = {
  hero: {
    title: "NEBULA GLITCH",
    subtitle: "SPECIALTY COFFEE",
    tagline: "Donde cada taza cuenta una historia.",
    cta: "Explorar la experiencia",
    ctaMenu: "Ver menú",
  },

  philosophy: {
    label: "Nuestra Filosofía",
    title: "Café como arte,\ntecnología como experiencia.",
    description:
      "Nebula Glitch nació de una obsesión: que cada espresso cuente una historia. Seleccionamos granos de origen directo, los tostamos en micro-lotes y los preparamos con precisión milimétrica. No somos un café común. Somos un espacio donde la hospitalidad, el diseño contemporáneo y la tecnología se encuentran para crear algo que no existía.",
    stats: [
      { value: "92+", label: "Puntuación SCA" },
      { value: "7", label: "Países de origen" },
      { value: "3", label: "Métodos de tueste" },
    ] as StatItem[],
  },

  signature: {
    label: "Bebidas Signature",
    title: "Creaciones que desafían lo convencional.",
    drinks: [
      {
        name: "Nebula Pour-Over",
        description:
          "Etiopía Yirgacheffe lavado. Notas florales de jazmín y bergamota. Filtrado en Hario V60.",
        tag: "Filtrado",
      },
      {
        name: "Glitch Espresso",
        description:
          "Blend propio de Colombia Huila y Guatemala Antigua. Chocolate amargo, caramelo, cuerpo intenso.",
        tag: "Espresso",
      },
      {
        name: "Void Matcha Latte",
        description:
          "Matcha ceremonial de Uji batido con espuma de avena y un toque de vainilla de Madagascar.",
        tag: "Matcha",
      },
      {
        name: "Cold Brew Tonic",
        description:
          "Cold brew infusionado 18 horas con agua tónica artesanal, pomelo deshidratado y romero fresco.",
        tag: "Cold Brew",
      },
    ] as DrinkItem[],
  },

  menu: {
    label: "Menú",
    title: "Preparado con intención.",
    categories: [
      {
        name: "Espresso",
        items: [
          { name: "Espresso Doble", price: "$65", note: "Blend de la casa" },
          {
            name: "Cortado",
            price: "$75",
            note: "Espresso con espuma aterciopelada",
          },
          {
            name: "Flat White",
            price: "$85",
            note: "Doble ristretto, leche texturizada",
          },
          {
            name: "Americano",
            price: "$60",
            note: "Espresso largo con agua filtrada",
          },
        ],
      },
      {
        name: "Filtrados",
        items: [
          { name: "V60 de Temporada", price: "$95", note: "Origen rotativo" },
          {
            name: "Chemex",
            price: "$110",
            note: "Para compartir — 3 tazas",
          },
          {
            name: "AeroPress",
            price: "$85",
            note: "Preparación invertida",
          },
        ],
      },
      {
        name: "Fríos",
        items: [
          {
            name: "Cold Brew",
            price: "$90",
            note: "Infusión de 18 horas",
          },
          {
            name: "Cold Brew Tonic",
            price: "$105",
            note: "Con tónica artesanal",
          },
          {
            name: "Shakerato",
            price: "$95",
            note: "Espresso agitado con hielo",
          },
        ],
      },
      {
        name: "Repostería",
        items: [
          {
            name: "Croissant de mantequilla",
            price: "$65",
            note: "Hojaldrado artesanal",
          },
          {
            name: "Banana Bread",
            price: "$70",
            note: "Con nuez y canela",
          },
          {
            name: "Cookie de Tahini",
            price: "$55",
            note: "Con chocolate Oaxaca",
          },
        ],
      },
    ] as MenuCategory[],
  },

  spaces: {
    label: "El Espacio",
    title: "Diseñado para quedarte.",
    items: [
      {
        id: "lounge",
        title: "Lounge Principal",
        description:
          "Sillones de terciopelo, iluminación cálida indirecta y una barra de especialidad de ocho metros. El corazón de Nebula.",
        tag: "Social",
      },
      {
        id: "bar",
        title: "La Barra",
        description:
          "Observa a nuestros baristas preparar cada bebida con precisión quirúrgica. Asientos reservados para los más curiosos.",
        tag: "Café",
      },
      {
        id: "quiet",
        title: "Zona Silenciosa",
        description:
          "Diseñada para concentrarse. Escritorios amplios, outlets en cada asiento y café ilimitado por hora.",
        tag: "Work",
      },
      {
        id: "gaming",
        title: "Gaming Lounge",
        description:
          "Consolas premium y PCs de alto nivel integrados con discreción. Reserva tu sesión con tu bebida favorita.",
        tag: "Gaming",
      },
    ] as SpaceItem[],
  },

  gaming: {
    label: "Experiencia Gaming",
    title: "Donde el café\nse encuentra con el play.",
    description:
      "El gaming en Nebula no es el protagonista. Es un complemento cuidadosamente integrado. Consolas de última generación, PCs con especificaciones de competencia y una carta diseñada para sesiones largas. Todo en un ambiente que no grita 'gamer'. Susurra 'bienvenido'.",
    features: [
      {
        title: "Consolas Premium",
        detail: "PS5 · Xbox Series X · Switch",
      },
      {
        title: "PCs de Competencia",
        detail: "RTX 4080 · 240Hz · Periféricos pro",
      },
      {
        title: "Reservaciones",
        detail: "Sesiones de 1, 2 o 4 horas",
      },
      {
        title: "Torneos",
        detail: "Eventos mensuales con la comunidad",
      },
    ] as GamingFeature[],
  },

  community: {
    label: "Comunidad",
    title: "No vendemos café.\nVendemos pertenencia.",
    description:
      "Nebula Glitch es más que una cafetería. Es un punto de encuentro para creativos, gamers, developers y curiosos. Cada semana organizamos eventos que conectan personas que comparten la misma energía.",
    events: [
      {
        name: "Latte Art Thursdays",
        description:
          "Taller semanal de arte latte con baristas invitados.",
        day: "Jueves",
      },
      {
        name: "Friday Night Gaming",
        description:
          "Torneos casuales con café y snacks incluidos.",
        day: "Viernes",
      },
      {
        name: "Dev & Coffee",
        description:
          "Meetup quincenal para developers. Lightning talks y networking.",
        day: "Sábados alternos",
      },
      {
        name: "Cupping Sessions",
        description:
          "Degustación mensual de cafés de origen con nuestro tostador.",
        day: "Primer domingo",
      },
    ] as CommunityEvent[],
  },

  cta: {
    title: "Tu mesa está lista.",
    description:
      "Descubre un espacio donde el café se toma en serio, la tecnología se integra con elegancia y cada detalle está diseñado para que quieras quedarte.",
    button: "Reservar experiencia",
  },

  footer: {
    title: "Nebula Glitch",
    subtitle: "Specialty Coffee House",
    description:
      "Café de especialidad · Diseño contemporáneo · Gaming integrado",
    links: ["Menú", "Espacios", "Eventos", "Reservar"],
    social: ["Instagram", "TikTok", "Spotify"],
    hours: "Lun – Dom · 7:00 AM – 11:00 PM",
    address: "Col. Roma Norte, CDMX",
    copyright: "© 2026 Nebula Glitch Social Club. All rights reserved.",
  },
};
