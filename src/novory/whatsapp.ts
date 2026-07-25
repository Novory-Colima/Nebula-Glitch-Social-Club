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
    "¡Hola Novory Studio! 👋 Me encantó el diseño y la experiencia de Nebula Glitch Social Club ☕ y me gustaría un proyecto así para mi marca. ✨",

  /** Experiencia Interactiva / Demo Mapache Fashion */
  mapache:
    "¡Hola Novory Studio! 👋 Me encantó el diseño y la experiencia de Mapache Fashion 🤩 y me gustaría solicitar un proyecto así para mi marca. ✨",

  /** Experiencia Interactiva / Demo Wander & Wonder */
  wander:
    "¡Hola Novory Studio! 👋 Me encantó la experiencia interactiva de Wander & Wonder 🚀 y me gustaría solicitar un proyecto así de impresionante para mi marca. ✨",

  /** Solicitud General de Proyecto */
  project:
    "¡Hola Novory Studio! 👋 Me gustaría solicitar información para iniciar un proyecto con ustedes. 🚀 ¿Podríamos coordinar una propuesta?",

  /** Desarrollo Web Premium */
  web:
    "¡Hola Novory Studio! 💻 Quisiera cotizar el desarrollo de un sitio web premium, moderno e interactivo para mi negocio. ✨",

  /** SEO Local y Crecimiento */
  seo:
    "¡Hola Novory Studio! 📈 Me interesa impulsar la presencia digital y el SEO local de mi negocio para captar más clientes. 🔍",

  /** Automatizaciones y Procesos */
  automation:
    "¡Hola Novory Studio! ⚙️ Quisiera automatizar procesos en mi negocio y conocer más sobre sus soluciones inteligentes. 🤖✨",

  /** Demo Personalizada */
  demo:
    "¡Hola Novory Studio! 💡 Vi sus demos y me gustaría explorar una experiencia visual personalizada para mi empresa. 🚀",

  /** Contacto / Consulta General */
  contact:
    "¡Hola Novory Studio! 👋 Me gustaría hacerles una consulta rápida sobre sus servicios digitales. 💬",
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
  return `https://wa.me/${phone}?text=${encodedText}`;
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
