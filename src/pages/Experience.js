import React from 'react';
import Resume from '../settings/resume.json';
import { ResumeEntry } from '../components/content/ResumeEntry';
import { ResumePageLayout } from '../components/layout/ResumePageLayout';

const Experience = () => {
  const work = Resume.work || [];
  const organizations = Resume.organizations || [];
  const volunteer = Resume.volunteer || [];

  return (
    <ResumePageLayout eyebrow="Work & Organization" title="Experience">
      <section className="resume-page-section">
        <h2 className="resume-subheading">Work</h2>
        {work.length > 0 ? (
          <div className="resume-entry-grid">
            {work.map((item, index) => (
              <ResumeEntry
                key={`${item.company}-${index}`}
                eyebrow={[item.startDate, item.endDate].filter(Boolean).join(' — ')}
                title={item.position || item.role || 'Position'}
                subtitle={item.company || item.organization}
                description={item.summary}
                highlights={item.highlights || []}
                url={item.website}
                image={item.image}
                imageAlt={item.imageAlt}
              />
            ))}
          </div>
        ) : (
          <p className="section-muted">No work experience is listed.</p>
        )}
      </section>

      <section className="resume-page-section">
        <h2 className="resume-subheading">Organizations</h2>
        {organizations.length > 0 ? (
          <div className="resume-entry-grid">
            {organizations.map((item, index) => (
              <ResumeEntry
                key={`${item.name}-${index}`}
                eyebrow={[item.startDate, item.endDate].filter(Boolean).join(' — ')}
                title={item.position || 'Member'}
                subtitle={item.name}
                description={item.summary}
                highlights={item.highlights || []}
                url={item.website}
                image={item.image}
                imageAlt={item.imageAlt}
              />
            ))}
          </div>
        ) : (
          <p className="section-muted">No organizations are listed.</p>
        )}
      </section>

      <section className="resume-page-section">
        <h2 className="resume-subheading">Volunteer</h2>
        {volunteer.length > 0 ? (
          <div className="resume-entry-grid">
            {volunteer.map((item, index) => (
              <ResumeEntry
                key={`${item.organization}-${index}`}
                eyebrow={[item.startDate, item.endDate].filter(Boolean).join(' — ')}
                title={item.position || 'Volunteer'}
                subtitle={item.organization}
                description={item.summary}
                highlights={item.highlights || []}
                url={item.website}
                image={item.image}
                imageAlt={item.imageAlt}
              />
            ))}
          </div>
        ) : (
          <p className="section-muted">No volunteer experience is listed.</p>
        )}
      </section>
    </ResumePageLayout>
  );
};

export default Experience;
