/**
 * 🎨 TOKENS DE COULEURS
 *
 * Ce fichier contient toutes les couleurs de ton design system.
 * Modifie les valeurs hexadécimales pour correspondre à tes couleurs Figma.
 *
 * Comment trouver tes couleurs dans Figma :
 * 1. Clique sur un élément coloré dans Figma
 * 2. Dans le panneau de droite, tu vois la valeur hexadécimale (ex: #FF5733)
 * 3. Copie-la ici !
 */

export const colors = {

  // --- COULEURS PRIMAIRES ---
  // La couleur principale de ta marque
  primary: {
    50:  '#EFF6FF',  // Très clair (pour les fonds)
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',  // La couleur principale
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',  // Très foncé
  },

  // --- COULEURS SECONDAIRES ---
  // La couleur d'accentuation / complémentaire
  secondary: {
    50:  '#F5F3FF',
    100: '#EDE9FE',
    200: '#DDD6FE',
    300: '#C4B5FD',
    400: '#A78BFA',
    500: '#8B5CF6',  // La couleur secondaire principale
    600: '#7C3AED',
    700: '#6D28D9',
    800: '#5B21B6',
    900: '#4C1D95',
  },

  // --- COULEURS NEUTRES ---
  // Pour les textes, fonds, bordures
  neutral: {
    0:   '#FFFFFF',  // Blanc pur
    50:  '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    1000: '#000000', // Noir pur
  },

  // --- COULEURS SÉMANTIQUES ---
  // Pour les états (succès, erreur, avertissement, info)
  success: {
    light: '#D1FAE5',
    main:  '#10B981',
    dark:  '#065F46',
  },
  warning: {
    light: '#FEF3C7',
    main:  '#F59E0B',
    dark:  '#92400E',
  },
  error: {
    light: '#FEE2E2',
    main:  '#EF4444',
    dark:  '#991B1B',
  },
  info: {
    light: '#DBEAFE',
    main:  '#3B82F6',
    dark:  '#1E3A8A',
  },
};
