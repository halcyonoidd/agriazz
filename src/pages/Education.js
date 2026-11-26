import React from 'react';
import Resume from '../settings/resume.json';
import { ResumeEntry } from '../components/content/ResumeEntry';
import { ResumePageLayout } from '../components/layout/ResumePageLayout';

const Education = () => {
  const education = Resume.education || [];

  return (
    <ResumePageLayout eyebrow="Learning journey" title="Education" showBackground>
      {education.length > 0 ? (
        <div className="resume-entry-grid">
          {education.map((item, index) => (
            <ResumeEntry
              key={`${item.institution}-${index}`}
              eyebrow={[item.startDate, item.endDate].filter(Boolean).join(' — ')}
              title={[item.studyType, item.area].filter(Boolean).join(' in ') || item.institution}
              subtitle={item.institution}
              details={item.gpa ? [`GPA: ${item.gpa}`] : []}
              tags={item.courses || []}
              image={item.image}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>
      ) : (
        <p className="section-muted">No education details are listed in src/settings/resume.json.</p>
      )}
    </ResumePageLayout>
  );
};

export default Education;
