import React from 'react';
import { Heading } from './Heading';

export default {
  title: '⚛️ Atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Heading component — **Atom** in Atomic Design.

**Drupal SDC:** \`mytheme:heading\`

**SDC files:**
- \`heading.component.yml\` — schema and props
- \`heading.twig\` — template
- \`heading.css\` — styles

**Drupal usage:**
\`\`\`twig
{% include 'mytheme:heading' with {
  props: {
    text: 'Section title',
    level: 2,
    color: 'default',
  }
} %}
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    text: {
      description: 'Heading text content',
      control: 'text',
    },
    level: {
      description: 'HTML level (h1 → h6) — defines the visual size',
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    color: {
      description: 'Color variant',
      control: { type: 'radio' },
      options: ['default', 'brand'],
    },
    htmlTagOverride: {
      description: 'HTML tag override (for SEO/accessibility)',
      control: { type: 'select' },
      options: ['', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
};

// --- Individual stories ---

export const H1 = {
  args: {
    text: 'Medium length hero headline goes here',
    level: 1,
    color: 'default',
  },
};

export const H2 = {
  args: {
    text: 'Section title heading',
    level: 2,
    color: 'default',
  },
};

export const H3 = {
  args: {
    text: 'Sub-section title',
    level: 3,
    color: 'default',
  },
};

export const H4 = {
  args: {
    text: 'Card or block title',
    level: 4,
    color: 'default',
  },
};

export const H5 = {
  args: {
    text: 'Small section title',
    level: 5,
    color: 'default',
  },
};

export const H6 = {
  args: {
    text: 'Label heading',
    level: 6,
    color: 'default',
  },
};

export const H6Brand = {
  args: {
    text: 'Questions or comments?',
    level: 6,
    color: 'brand',
  },
  storyName: 'H6 — Brand color',
};

// --- All levels overview ---

export const AllLevels = {
  render: () => (
    <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

      <div style={{ paddingBottom: '24px', borderBottom: '1px solid #E5E5E5' }}>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 600, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Default color (black)
        </p>
        {[1, 2, 3, 4, 5, 6].map((level) => (
          <div key={level} style={{ display: 'flex', alignItems: 'baseline', gap: '24px', marginBottom: '16px' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#aaa', minWidth: '24px' }}>H{level}</span>
            <Heading text={`Heading ${level} — Section title`} level={level} color="default" />
          </div>
        ))}
      </div>

      <div>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 600, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Brand color (#004cff)
        </p>
        {[1, 2, 3, 4, 5, 6].map((level) => (
          <div key={level} style={{ display: 'flex', alignItems: 'baseline', gap: '24px', marginBottom: '16px' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#aaa', minWidth: '24px' }}>H{level}</span>
            <Heading text={`Heading ${level} — Section title`} level={level} color="brand" />
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
  storyName: '✦ All levels',
};

// --- SDC Code reference ---

export const DrupalSDCCode = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'monospace', fontSize: '13px', backgroundColor: '#1E1E1E', color: '#D4D4D4', borderRadius: '8px', lineHeight: 1.6 }}>
      <p style={{ color: '#6A9955', marginBottom: '16px' }}>{`{# heading.twig #}`}</p>
      <p><span style={{ color: '#C586C0' }}>{`{%- set tag = props.html_tag_override ?: ('h' ~ props.level) -%}`}</span></p>
      <p style={{ marginTop: '8px' }}><span style={{ color: '#569CD6' }}>&lt;</span><span style={{ color: '#4EC9B0' }}>{'{{ tag }}'}</span><span style={{ color: '#9CDCFE' }}>{` class="heading heading--level-{{ props.level }}{% if props.color != 'default' %} heading--{{ props.color }}{% endif %}"`}</span><span style={{ color: '#569CD6' }}>&gt;</span></p>
      <p style={{ paddingLeft: '24px' }}>{'{{ props.text }}'}</p>
      <p><span style={{ color: '#569CD6' }}>&lt;/</span><span style={{ color: '#4EC9B0' }}>{'{{ tag }}'}</span><span style={{ color: '#569CD6' }}>&gt;</span></p>

      <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '24px 0' }} />

      <p style={{ color: '#6A9955', marginBottom: '8px' }}>{`{# Usage in another template #}`}</p>
      <p><span style={{ color: '#C586C0' }}>{'{% include'}</span> <span style={{ color: '#CE9178' }}>{`'mytheme:heading'`}</span> <span style={{ color: '#C586C0' }}>{'with {'}</span></p>
      <p style={{ paddingLeft: '24px' }}><span style={{ color: '#9CDCFE' }}>props</span><span>: {'{'}</span></p>
      <p style={{ paddingLeft: '48px' }}><span style={{ color: '#9CDCFE' }}>text</span>: <span style={{ color: '#CE9178' }}>'Section title'</span>,</p>
      <p style={{ paddingLeft: '48px' }}><span style={{ color: '#9CDCFE' }}>level</span>: <span style={{ color: '#B5CEA8' }}>2</span>,</p>
      <p style={{ paddingLeft: '48px' }}><span style={{ color: '#9CDCFE' }}>color</span>: <span style={{ color: '#CE9178' }}>'default'</span>,</p>
      <p style={{ paddingLeft: '24px' }}>{'}'}</p>
      <p><span style={{ color: '#C586C0' }}>{'%}'}</span></p>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    backgrounds: { default: 'dark' },
  },
  storyName: '📋 Drupal SDC Code',
};
