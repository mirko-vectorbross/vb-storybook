import React from 'react';
import { colors, typography } from '../../tokens';

/**
 * 🔘 Composant Button
 *
 * Le bouton de base du design system.
 * Modifier les styles ici pour correspondre à ton design Figma.
 */
export const Button = ({
  label = 'Bouton',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
}) => {

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: typography.fontFamily.sans,
    fontWeight: typography.fontWeight.semibold,
    borderRadius: '8px',
    border: '2px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 0.15s ease',
    letterSpacing: '-0.01em',
  };

  // Tailles
  const sizeStyles = {
    small:  { fontSize: '13px', padding: '6px 14px', height: '32px' },
    medium: { fontSize: '15px', padding: '10px 20px', height: '44px' },
    large:  { fontSize: '16px', padding: '14px 28px', height: '54px' },
  };

  // Variantes
  const variantStyles = {
    primary: {
      backgroundColor: colors.primary[500],
      color: '#FFFFFF',
      borderColor: colors.primary[500],
    },
    secondary: {
      backgroundColor: colors.secondary[500],
      color: '#FFFFFF',
      borderColor: colors.secondary[500],
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.primary[600],
      borderColor: colors.primary[500],
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.primary[600],
      borderColor: 'transparent',
    },
    danger: {
      backgroundColor: colors.error.main,
      color: '#FFFFFF',
      borderColor: colors.error.main,
    },
  };

  return (
    <button
      style={{ ...baseStyle, ...sizeStyles[size], ...variantStyles[variant] }}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
