// ============================================================================
// Novory Studio — Sistema Reutilizable de WhatsApp
// ============================================================================
// Archivo centralizado de mensajes predefinidos y generador de enlaces
// para el sitio principal, landing pages y demos interactivas de Novory Studio.
// ============================================================================

/** Número oficial de WhatsApp de Novory Studio (con código de país sin signo +) */
export const WHATSAPP_PHONE_NUMBER = "523121992198";

/**
 * Mensajes predefinidos animados y enfocados en conversión para WhatsApp
 */
export const WHATSAPP_MESSAGES = {
  /** Experiencia Interactiva / Demo Nebula Glitch Social Club */
  nebula:
    "¡Hola Novory Studio! \u{1F44B} Me encantó el diseño y la experiencia de Nebula Glitch Social Club \u{2615} y me gustaría un proyecto así para mi marca. \u{2728}",

  /** Experiencia Interactiva / Demo Mapache Fashion */
  mapache:
    "¡Hola Novory Studio! \u{1F44B} Me encantó el diseño y la experiencia de Mapache Fashion \u{1F929} y me gustaría solicitar un proyecto así para mi marca. \u{2728}",

  /** Experiencia Interactiva / Demo Wander & Wonder */
  wander:
    "¡Hola Novory Studio! \u{1F44B} Me encantó la experiencia interactiva de Wander & Wonder \u{1F680} y me gustaría solicitar un proyecto así de impresionante para mi marca. \u{2728}",

  /** Solicitud General de Proyecto */
  project:
    "¡Hola Novory Studio! \u{1F44B} Me gustaría solicitar información para iniciar un proyecto con ustedes. \u{1F680} ¿Podríamos coordinar una propuesta?",

  /** Desarrollo Web Premium */
  web:
    "¡Hola Novory Studio! \u{1F4BB} Quisiera cotizar el desarrollo de un sitio web premium, moderno e interactivo para mi negocio. \u{2728}",

  /** SEO Local y Crecimiento */
  seo:
    "¡Hola Novory Studio! \u{1F4C8} Me interesa impulsar la presencia digital y el SEO local de mi negocio para captar más clientes. \u{1F50D}",

  /** Automatizaciones y Procesos */
  automation:
    "¡Hola Novory Studio! \u{2699}\u{FE0F} Quisiera automatizar procesos en mi negocio y conocer más sobre sus soluciones inteligentes. \u{1F916}\u{2728}",

  /** Demo Personalizada */
  demo:
    "¡Hola Novory Studio! \u{1F4A1} Vi sus demos y me gustaría explorar una experiencia visual personalizada para mi empresa. \u{1F680}",

  /** Contacto / Consulta General */
  contact:
    "¡Hola Novory Studio! \u{1F44B} Me gustaría hacerles una consulta rápida sobre sus servicios digitales. \u{1F4AC}",
} as const;

export type WhatsAppMessageType = keyof typeof WHATSAPP_MESSAGES;

/**
 * Genera la URL directa de WhatsApp con un mensaje codificado.
 * @param message Texto del mensaje o clave de WHATSAPP_MESSAGES
 * @param phone Número telefónico (opcional, por defecto el oficial)
 */
export function getWhatsAppUrl(
  message: string,
  phone: string = WHATSAPP_PHONE_NUMBER
): string {
  const text =
    message in WHATSAPP_MESSAGES
      ? WHATSAPP_MESSAGES[message as WhatsAppMessageType]
      : message;
  const encodedText = encodeURIComponent(text);
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`;
}

/**
 * URLs directas de WhatsApp listas para usar según cada caso de uso.
 */
export const WHATSAPP_URLS = {
  nebula: getWhatsAppUrl(WHATSAPP_MESSAGES.nebula),
  mapache: getWhatsAppUrl(WHATSAPP_MESSAGES.mapache),
  project: getWhatsAppUrl(WHATSAPP_MESSAGES.project),
  web: getWhatsAppUrl(WHATSAPP_MESSAGES.web),
  seo: getWhatsAppUrl(WHATSAPP_MESSAGES.seo),
  automation: getWhatsAppUrl(WHATSAPP_MESSAGES.automation),
  demo: getWhatsAppUrl(WHATSAPP_MESSAGES.demo),
  contact: getWhatsAppUrl(WHATSAPP_MESSAGES.contact),
} as const;
