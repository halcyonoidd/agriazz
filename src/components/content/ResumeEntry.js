import React from 'react';

export const ResumeEntry = ({
  eyebrow,
  title,
  subtitle,
  description,
  details,
  highlights = [],
  tags = [],
  url,
  urlLabel = 'Visit website',
}) => (
  <article className="resume-entry">
    {eyebrow && <span className="scroll-card-number">{eyebrow}</span>}
    {title && <h2>{title}</h2>}
    {subtitle && <strong>{subtitle}</strong>}
    {description && <p>{description}</p>}
    {details?.length > 0 && <p className="resume-entry-details">{details.join(' · ')}</p>}
    {highlights.length > 0 && (
      <ul>
        {highlights.map((highlight, index) => <li key={`${highlight}-${index}`}>{highlight}</li>)}
      </ul>
    )}
    {tags.length > 0 && (
      <div className="scroll-tags">
        {tags.map((tag, index) => <span key={`${tag}-${index}`}>{tag}</span>)}
      </div>
    )}
    {url && (
      <a className="resume-entry-link" href={url} target="_blank" rel="noopener noreferrer">
        {urlLabel}
      </a>
    )}
  </article>
);
