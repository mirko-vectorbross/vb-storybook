import React from 'react';
import './Heading.css';

/**
 * Heading — Atom
 *
 * Corresponds to Drupal SDC: heading
 * Source: VB Bolt Basic Theme — Figma Design System
 */
export const Heading = ({
  text = 'Heading text',
  level = 2,
  color = 'default',
  htmlTagOverride,
}) => {
  const Tag = htmlTagOverride || `h${level}`;

  const classes = [
    'heading',
    `heading--level-${level}`,
    color !== 'default' ? `heading--${color}` : '',
  ].filter(Boolean).join(' ');

  return <Tag className={classes}>{text}</Tag>;
};

export default Heading;
