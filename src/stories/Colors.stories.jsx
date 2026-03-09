import React from 'react';
import { colors } from '../tokens/colors';

export default {
  title: '🎨 Design Tokens/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'All colors from the design system. Edit `src/tokens/colors.js` to match your Figma color variables.',
      },
    },
  },
};

// --- Internal swatch components ---

const ColorSwatch = ({ name, value }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
    <div
      style={{
        width: '80px',
        height: '80px',
        borderRadius: '12px',
        backgroundColor: value,
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}
    />
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '12px', fontWeight: 600, color: '#111', fontFamily: "'Poppins', sans-serif" }}>{name}</div>
      <div style={{ fontSize: '11px', color: '#777', fontFamily: 'monospace', marginTop: '2px' }}>{value}</div>
    </div>
  </div>
);

const ColorScale = ({ label, scale, emoji }) => (
  <div style={{ marginBottom: '48px' }}>
    <h2 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: '18px', fontWeight: 600, color: '#111', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
      {emoji} {label}
    </h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {Object.entries(scale).map(([key, value]) => (
        <ColorSwatch key={key} name={key} value={value} />
      ))}
    </div>
  </div>
);

const SemanticColors = ({ label, scale, emoji }) => (
  <div style={{ marginBottom: '32px' }}>
    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', fontWeight: 600, color: '#555', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
      {emoji} {label}
    </h3>
    <div style={{ display: 'flex', gap: '16px' }}>
      {Object.entries(scale).map(([key, value]) => (
        <ColorSwatch key={key} name={key} value={value} />
      ))}
    </div>
  </div>
);

// --- STORIES ---

export const AllColors = () => (
  <div style={{ padding: '48px', backgroundColor: '#FAFAFA', minHeight: '100vh' }}>

    <div style={{ marginBottom: '48px' }}>
      <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: '32px', fontWeight: 700, color: '#111', margin: 0 }}>
        🎨 Color palette
      </h1>
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', color: '#666', marginTop: '8px' }}>
        Your design system colors. Edit <code style={{ backgroundColor: '#E8E8E8', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>src/tokens/colors.js</code> to customise.
      </p>
    </div>

    <ColorScale label="Primary" scale={colors.primary} emoji="🔵" />
    <ColorScale label="Secondary" scale={colors.secondary} emoji="🟣" />
    <ColorScale label="Neutrals" scale={colors.neutral} emoji="⚫" />

    <hr style={{ border: 'none', borderTop: '1px solid #E5E5E5', margin: '32px 0' }} />

    <h2 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: '18px', fontWeight: 600, color: '#111', marginBottom: '24px' }}>
      🚦 Semantic colors
    </h2>
    <SemanticColors label="Success" scale={colors.success} emoji="✅" />
    <SemanticColors label="Warning" scale={colors.warning} emoji="⚠️" />
    <SemanticColors label="Error" scale={colors.error} emoji="❌" />
    <SemanticColors label="Info" scale={colors.info} emoji="ℹ️" />
  </div>
);

AllColors.storyName = 'All colors';
