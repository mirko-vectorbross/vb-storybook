/**
 * 📝 TOKENS DE TYPOGRAPHIE — VB Bolt Basic Theme
 * Source: Figma variables (node 4179-8581)
 * Extrait automatiquement depuis le design system Figma
 */

export const typography = {

  // --- FAMILLES ---
  fontFamily: {
    heading: "'Poppins', sans-serif",  // Tous les headings
    body:    "'Poppins', sans-serif",  // Tous les textes courants
    caps:    "'Poppins', sans-serif",  // Labels en majuscules
  },

  // --- HEADINGS (Poppins SemiBold 600) ---
  heading: {
    h1Home: { fontFamily: "'Poppins'", fontSize: '72px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.04em' },
    h1:     { fontFamily: "'Poppins'", fontSize: '64px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.04em' },
    h2Home: { fontFamily: "'Poppins'", fontSize: '56px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.04em' },
    h2:     { fontFamily: "'Poppins'", fontSize: '48px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.04em' },
    h3:     { fontFamily: "'Poppins'", fontSize: '40px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.04em' },
    h4:     { fontFamily: "'Poppins'", fontSize: '32px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.04em' },
    h5:     { fontFamily: "'Poppins'", fontSize: '24px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em' },
    h6:     { fontFamily: "'Poppins'", fontSize: '20px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em' },
  },

  // --- INTRO / LEAD TEXT (Poppins Light) ---
  intro: {
    big:   { fontFamily: "'Poppins'", fontSize: '32px', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em' },
    small: { fontFamily: "'Poppins'", fontSize: '20px', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em' },
  },

  // --- BODY LARGE (Poppins, 20px) ---
  bodyLarge: {
    extraBold: { fontFamily: "'Poppins'", fontSize: '20px', fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.02em' },
    bold:      { fontFamily: "'Poppins'", fontSize: '20px', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.02em' },
    semiBold:  { fontFamily: "'Poppins'", fontSize: '20px', fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.02em' },
    medium:    { fontFamily: "'Poppins'", fontSize: '20px', fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.02em' },
    normal:    { fontFamily: "'Poppins'", fontSize: '20px', fontWeight: 400, lineHeight: 1.3, letterSpacing: '-0.02em' },
    light:     { fontFamily: "'Poppins'", fontSize: '20px', fontWeight: 300, lineHeight: 1.3, letterSpacing: '-0.02em' },
  },

  // --- BODY MEDIUM (Poppins, 18px) ---
  bodyMedium: {
    extraBold: { fontFamily: "'Poppins'", fontSize: '18px', fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.02em' },
    bold:      { fontFamily: "'Poppins'", fontSize: '18px', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.02em' },
    semiBold:  { fontFamily: "'Poppins'", fontSize: '18px', fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.02em' },
    medium:    { fontFamily: "'Poppins'", fontSize: '18px', fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.02em' },
    normal:    { fontFamily: "'Poppins'", fontSize: '18px', fontWeight: 400, lineHeight: 1.3, letterSpacing: '-0.02em' },
    light:     { fontFamily: "'Poppins'", fontSize: '18px', fontWeight: 300, lineHeight: 1.3, letterSpacing: '-0.02em' },
  },

  // --- BODY REGULAR (Poppins, 16px) ---
  bodyRegular: {
    extraBold: { fontFamily: "'Poppins'", fontSize: '16px', fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.02em' },
    bold:      { fontFamily: "'Poppins'", fontSize: '16px', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.02em' },
    semiBold:  { fontFamily: "'Poppins'", fontSize: '16px', fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.02em' },
    medium:    { fontFamily: "'Poppins'", fontSize: '16px', fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.02em' },
    normal:    { fontFamily: "'Poppins'", fontSize: '16px', fontWeight: 400, lineHeight: 1.3, letterSpacing: '-0.02em' },
    light:     { fontFamily: "'Poppins'", fontSize: '16px', fontWeight: 300, lineHeight: 1.3, letterSpacing: '-0.02em' },
  },

  // --- BODY SMALL (Poppins, 14px) ---
  bodySmall: {
    extraBold: { fontFamily: "'Poppins'", fontSize: '14px', fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.02em' },
    bold:      { fontFamily: "'Poppins'", fontSize: '14px', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.02em' },
    semiBold:  { fontFamily: "'Poppins'", fontSize: '14px', fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.02em' },
    medium:    { fontFamily: "'Poppins'", fontSize: '14px', fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.02em' },
    normal:    { fontFamily: "'Poppins'", fontSize: '14px', fontWeight: 400, lineHeight: 1.3, letterSpacing: '-0.02em' },
    light:     { fontFamily: "'Poppins'", fontSize: '14px', fontWeight: 300, lineHeight: 1.3, letterSpacing: '-0.02em' },
  },

  // --- BODY TINY (Poppins, 12px) ---
  bodyTiny: {
    extraBold: { fontFamily: "'Poppins'", fontSize: '12px', fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.02em' },
    bold:      { fontFamily: "'Poppins'", fontSize: '12px', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.02em' },
    semiBold:  { fontFamily: "'Poppins'", fontSize: '12px', fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.02em' },
    medium:    { fontFamily: "'Poppins'", fontSize: '12px', fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.02em' },
    normal:    { fontFamily: "'Poppins'", fontSize: '12px', fontWeight: 400, lineHeight: 1.3, letterSpacing: '-0.02em' },
    light:     { fontFamily: "'Poppins'", fontSize: '12px', fontWeight: 300, lineHeight: 1.3, letterSpacing: '-0.02em' },
  },

  // --- CAPS (Poppins, 12px) ---
  caps: {
    extraBold: { fontFamily: "'Poppins'", fontSize: '12px', fontWeight: 800, lineHeight: 1.15 },
    bold:      { fontFamily: "'Poppins'", fontSize: '12px', fontWeight: 700, lineHeight: 1.15 },
    semiBold:  { fontFamily: "'Poppins'", fontSize: '12px', fontWeight: 600, lineHeight: 1.15 },
    medium:    { fontFamily: "'Poppins'", fontSize: '12px', fontWeight: 500, lineHeight: 1.15 },
    normal:    { fontFamily: "'Poppins'", fontSize: '12px', fontWeight: 400, lineHeight: 1.15 },
    light:     { fontFamily: "'Poppins'", fontSize: '12px', fontWeight: 300, lineHeight: 1.15 },
  },

  // --- BUTTONS ---
  button: {
    large:     { fontFamily: "'Poppins'", fontSize: '16px', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em' },
    largeLink: { fontFamily: "'Poppins'", fontSize: '16px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' },
    small:     { fontFamily: "'Poppins'", fontSize: '14px', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em' },
    smallLink: { fontFamily: "'Poppins'", fontSize: '14px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em' },
  },
};

// Styles prédéfinis pour la story Typographie
export const textStyles = {
  'H1 Home (72px)': { ...typography.heading.h1Home, fontFamily: "'Poppins', sans-serif" },
  'H1 (64px)':      { ...typography.heading.h1,     fontFamily: "'Poppins', sans-serif" },
  'H2 Home (56px)': { ...typography.heading.h2Home, fontFamily: "'Poppins', sans-serif" },
  'H2 (48px)':      { ...typography.heading.h2,     fontFamily: "'Poppins', sans-serif" },
  'H3 (40px)':      { ...typography.heading.h3,     fontFamily: "'Poppins', sans-serif" },
  'H4 (32px)':      { ...typography.heading.h4,     fontFamily: "'Poppins', sans-serif" },
  'H5 (24px)':      { ...typography.heading.h5,     fontFamily: "'Poppins', sans-serif" },
  'H6 (20px)':      { ...typography.heading.h6,     fontFamily: "'Poppins', sans-serif" },
  'Intro Big (32px)':    { ...typography.intro.big,          fontFamily: "'Poppins', sans-serif" },
  'Intro Small (20px)':  { ...typography.intro.small,        fontFamily: "'Poppins', sans-serif" },
  'Body Large (20px)':   { ...typography.bodyLarge.normal,   fontFamily: "'Poppins', sans-serif" },
  'Body Regular (16px)': { ...typography.bodyRegular.normal, fontFamily: "'Poppins', sans-serif" },
  'Body Small (14px)':   { ...typography.bodySmall.normal,   fontFamily: "'Poppins', sans-serif" },
  'Body Tiny (12px)':    { ...typography.bodyTiny.normal,    fontFamily: "'Poppins', sans-serif" },
  'Button Large (16px)': { ...typography.button.large,       fontFamily: "'Poppins', sans-serif" },
  'Button Small (14px)': { ...typography.button.small,       fontFamily: "'Poppins', sans-serif" },
};
