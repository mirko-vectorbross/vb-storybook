import React from 'react';
import { typography, textStyles } from '../tokens/typography';

export default {
  title: '📝 Design Tokens/Typography',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'All typographic styles from the design system. Edit `src/tokens/typography.js` to match your Figma type styles.',
      },
    },
  },
};

// --- STORIES ---

export const TextStyles = () => (
  <div style={{ padding: '48px', backgroundColor: '#FAFAFA', minHeight: '100vh' }}>

    <div style={{ marginBottom: '48px' }}>
      <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '32px', fontWeight: 700, color: '#111', margin: 0 }}>
        📝 Text styles
      </h1>
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', color: '#666', marginTop: '8px' }}>
        All predefined text styles. Edit <code style={{ backgroundColor: '#E8E8E8', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>src/tokens/typography.js</code> to customise.
      </p>
    </div>

    {Object.entries(textStyles).map(([styleName, style]) => (
      <div
        key={styleName}
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '24px',
          padding: '24px 0',
          borderBottom: '1px solid #E5E5E5',
        }}
      >
        {/* Sample text */}
        <div
          style={{
            ...style,
            color: '#111',
            flex: 1,
          }}
        >
          The design system unifies the experience.
        </div>

        {/* Metadata */}
        <div style={{ minWidth: '220px', textAlign: 'right', fontFamily: 'monospace', fontSize: '12px', color: '#888', lineHeight: 1.6 }}>
          <div style={{ fontWeight: 700, color: '#555', fontSize: '13px', marginBottom: '4px' }}>{styleName}</div>
          <div>{style.fontSize} / {style.fontWeight}</div>
          {style.lineHeight && <div>line-height: {style.lineHeight}</div>}
          {style.letterSpacing && style.letterSpacing !== '0em' && <div>tracking: {style.letterSpacing}</div>}
          {style.textTransform && <div>{style.textTransform}</div>}
        </div>
      </div>
    ))}
  </div>
);

TextStyles.storyName = 'Text styles';

export const FontFamilies = () => (
  <div style={{ padding: '48px', backgroundColor: '#FAFAFA', minHeight: '100vh' }}>

    <div style={{ marginBottom: '48px' }}>
      <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '32px', fontWeight: 700, color: '#111', margin: 0 }}>
        🔤 Font families
      </h1>
    </div>

    {/* Clash Grotesk */}
    <div style={{ marginBottom: '64px' }}>
      <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '24px' }}>
        Poppins — Headings
      </h2>
      {[300, 400, 500, 600, 700].map((weight) => (
        <div key={weight} style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '12px 0', borderBottom: '1px solid #F0F0F0' }}>
          <div style={{ minWidth: '80px', fontFamily: 'monospace', fontSize: '11px', color: '#aaa' }}>{weight}</div>
          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '32px', fontWeight: weight, color: '#111', lineHeight: 1.1 }}>
            The quick brown fox
          </div>
        </div>
      ))}
    </div>

    {/* Poppins */}
    <div>
      <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '24px' }}>
        Poppins — Body text
      </h2>
      {[300, 400, 500, 600, 700, 800].map((weight) => (
        <div key={weight} style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '12px 0', borderBottom: '1px solid #F0F0F0' }}>
          <div style={{ minWidth: '80px', fontFamily: 'monospace', fontSize: '11px', color: '#aaa' }}>{weight}</div>
          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '20px', fontWeight: weight, color: '#111', lineHeight: 1.4 }}>
            The quick brown fox jumps over the lazy dog
          </div>
        </div>
      ))}
    </div>
  </div>
);

FontFamilies.storyName = 'Font families';
