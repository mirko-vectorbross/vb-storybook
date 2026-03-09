/** @type { import('@storybook/react').Preview } */
// Fonts are loaded via .storybook/preview-head.html
// – Clash Grotesk (headings) via Fontshare
// – Poppins (body) via Google Fonts

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'gray', value: '#F5F5F5' },
        { name: 'dark', value: '#1A1A1A' },
      ],
    },
  },
};

export default preview;
