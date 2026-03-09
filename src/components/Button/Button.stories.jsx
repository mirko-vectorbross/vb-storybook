import React from 'react';
import { Button } from './Button';

export default {
  title: '🧩 Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The primary button component of the design system. Available in multiple variants and sizes.',
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Visual style of the button',
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
    },
    size: {
      description: 'Button size',
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      description: 'Disables the button',
      control: 'boolean',
    },
    label: {
      description: 'Button label text',
      control: 'text',
    },
  },
};

// --- STORIES (each export = one variant) ---

export const Primary = {
  args: {
    label: 'Get started',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary = {
  args: {
    label: 'Learn more',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Outline = {
  args: {
    label: 'Cancel',
    variant: 'outline',
    size: 'medium',
  },
};

export const Ghost = {
  args: {
    label: 'Dismiss',
    variant: 'ghost',
    size: 'medium',
  },
};

export const Danger = {
  args: {
    label: 'Delete',
    variant: 'danger',
    size: 'medium',
  },
};

export const Disabled = {
  args: {
    label: 'Not available',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};

// All variants together
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '24px', alignItems: 'center' }}>
      <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Outline" variant="outline" />
      <Button label="Ghost" variant="ghost" />
      <Button label="Danger" variant="danger" />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
  storyName: '✦ All variants',
};

// All sizes together
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '24px', alignItems: 'center' }}>
      <Button label="Small" size="small" />
      <Button label="Medium" size="medium" />
      <Button label="Large" size="large" />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
  storyName: '✦ All sizes',
};
