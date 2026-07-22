// ============================================================================
// Novory Studio — Branding System Configuration
// ============================================================================
// Fuente de verdad centralizada para todo el sistema de branding.
// Cada demo solo necesita modificar este archivo.
// ============================================================================

// ---------------------------------------------------------------------------
// Enlaces
// ---------------------------------------------------------------------------
export const NOVORY_LINKS = {
  /** Página principal de Novory Studio */
  site: "https://novorystudio.com",
  /** Página de contacto / solicitar proyecto */
  contact: "https://novorystudio.com/contacto",
  /** Formulario de solicitud de proyecto */
  requestProject: "https://novorystudio.com/contacto",
} as const;

// ---------------------------------------------------------------------------
// Textos
// ---------------------------------------------------------------------------
export const NOVORY_TEXTS = {
  topBar: {
    label: "Experiencia interactiva",
    cta: "Solicitar proyecto",
  },
  floatingBadge: {
    brandName: "Novory Studio",
    message: "¿Te gustaría una experiencia así?",
    cta: "Solicitar proyecto",
  },
  finalCta: {
    heading: "¿Y si la próxima experiencia fuera la de tu marca?",
    body: "Creamos experiencias web diseñadas para captar atención, transmitir confianza y convertir visitantes en clientes.",
    primaryCta: "Quiero un proyecto así",
    secondaryCta: "Conocer Novory Studio",
  },
} as const;

// ---------------------------------------------------------------------------
// Design Tokens — Paleta Dark Mode (identidad rectora)
// ---------------------------------------------------------------------------
export const NOVORY_TOKENS = {
  colors: {
    dark: {
      bgBase: "#050816",
      bgSurface: "#0B1020",
      blueCta: "#425DF6",
      blueGlow: "#7ECEFF",
      gradientStart: "#7ECEFF",
      gradientMid: "#425DF6",
      gradientEnd: "#4E37AD",
      textPrimary: "#FFFFFF",
      textSecondary: "#B8C0D9",
      borderGlass: "rgba(255, 255, 255, 0.08)",
      borderGlassSubtle: "rgba(255, 255, 255, 0.04)",
      glassBackground: "rgba(5, 8, 22, 0.85)",
    },
    light: {
      bgBase: "#FFFFFF",
      bgSurface: "#EEEEFF",
      blueCta: "#425DF6",
      blueGlow: "#3355DD",
      gradientStart: "#7ECEFF",
      gradientMid: "#425DF6",
      gradientEnd: "#4E37AD",
      textPrimary: "#222222",
      textSecondary: "#444444",
      borderGlass: "rgba(0, 0, 0, 0.08)",
      borderGlassSubtle: "rgba(0, 0, 0, 0.04)",
      glassBackground: "rgba(255, 255, 255, 0.85)",
    },
  },

  typography: {
    /** Familia para headings (Space Grotesk) */
    fontHeading: "'Space Grotesk', sans-serif",
    /** Familia para body (Inter) */
    fontBody: "'Inter', sans-serif",
    /** Peso para headings */
    weightHeading: "700",
    /** Peso para body */
    weightBody: "400",
    /** Peso para botones y badges */
    weightMedium: "500",
  },

  spacing: {
    /** Escala estricta del Brand Guidelines */
    scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128] as const,
  },

  radius: {
    md: "12px",
    lg: "16px",
    xl: "24px",
    full: "9999px",
  },

  shadows: {
    glow: "0 0 20px rgba(79, 125, 255, 0.15)",
    glowIntense: "0 0 30px rgba(79, 125, 255, 0.25)",
    glowSubtle: "0 0 12px rgba(79, 125, 255, 0.10)",
  },

  glass: {
    blur: "12px",
    bgOpacity: "0.04",
  },

  animation: {
    /** Duración estándar para transiciones */
    duration: "500ms",
    /** Duración para expansiones */
    durationExpand: "600ms",
    /** Easing premium — ease-out exponencial */
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    /** Easing para hover */
    easingHover: "cubic-bezier(0.33, 1, 0.68, 1)",
  },
} as const;

// ---------------------------------------------------------------------------
// Función helper para generar CSS custom properties
// ---------------------------------------------------------------------------
type ThemeMode = "dark" | "light";

export function getNovoryCustomProperties(mode: ThemeMode = "dark"): string {
  const c = NOVORY_TOKENS.colors[mode];
  const t = NOVORY_TOKENS.typography;
  const r = NOVORY_TOKENS.radius;
  const s = NOVORY_TOKENS.shadows;
  const g = NOVORY_TOKENS.glass;
  const a = NOVORY_TOKENS.animation;

  return `
    --novory-bg-base: ${c.bgBase};
    --novory-bg-surface: ${c.bgSurface};
    --novory-blue-cta: ${c.blueCta};
    --novory-blue-glow: ${c.blueGlow};
    --novory-gradient-start: ${c.gradientStart};
    --novory-gradient-mid: ${c.gradientMid};
    --novory-gradient-end: ${c.gradientEnd};
    --novory-text-primary: ${c.textPrimary};
    --novory-text-secondary: ${c.textSecondary};
    --novory-border-glass: ${c.borderGlass};
    --novory-border-glass-subtle: ${c.borderGlassSubtle};
    --novory-glass-bg: ${c.glassBackground};
    --novory-font-heading: ${t.fontHeading};
    --novory-font-body: ${t.fontBody};
    --novory-weight-heading: ${t.weightHeading};
    --novory-weight-body: ${t.weightBody};
    --novory-weight-medium: ${t.weightMedium};
    --novory-radius-md: ${r.md};
    --novory-radius-lg: ${r.lg};
    --novory-radius-xl: ${r.xl};
    --novory-radius-full: ${r.full};
    --novory-shadow-glow: ${s.glow};
    --novory-shadow-glow-intense: ${s.glowIntense};
    --novory-shadow-glow-subtle: ${s.glowSubtle};
    --novory-glass-blur: ${g.blur};
    --novory-glass-bg-opacity: ${g.bgOpacity};
    --novory-duration: ${a.duration};
    --novory-duration-expand: ${a.durationExpand};
    --novory-easing: ${a.easing};
    --novory-easing-hover: ${a.easingHover};
  `.trim();
}
