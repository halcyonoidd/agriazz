import React from 'react';
import Resume from '../settings/resume.json';
import { ResumeEntry } from '../components/content/ResumeEntry';
import { ResumePageLayout } from '../components/layout/ResumePageLayout';

const Projects = () => {
  const projects = Resume.projects || [];

  return (
    <ResumePageLayout eyebrow="Selected work" title="Projects">
      {projects.length > 0 ? (
        <div className="resume-entry-grid">
          {projects.map((project, index) => (
            <ResumeEntry
              key={project.name || project.title || index}
              eyebrow={project.startDate || project.date}
              title={project.name || project.title || 'Project'}
              subtitle={project.organization}
              description={project.description}
              highlights={project.highlights || []}
              tags={project.keywords || project.tags || []}
              url={project.url}
              urlLabel="View project"
              image={project.image}
              imageAlt={project.imageAlt}
            />
          ))}
        </div>
      ) : (
        <p className="section-muted">
          No projects are listed yet. Add a <code>projects</code> array to src/settings/resume.json.
        </p>
      )}
    </ResumePageLayout>
  );
};

export default Projects;
