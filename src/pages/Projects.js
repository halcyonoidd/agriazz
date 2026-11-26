import React from 'react';
import { Link } from 'react-router-dom';
import Resume from '../settings/resume.json';
import { ResumeEntry } from '../components/content/ResumeEntry';
import { ResumePageLayout } from '../components/layout/ResumePageLayout';
import { getProjectImages } from '../utils/projectMedia';
import { getProjectSlug } from '../utils/projectSlug';

const Projects = () => {
  const projects = Resume.projects || [];

  return (
    <ResumePageLayout eyebrow="Selected work" title="Projects" showBackground>
      {projects.length > 0 ? (
        <div className="resume-entry-grid">
          {projects.map((project, index) => {
            const projectImages = getProjectImages(project);
            const title = project.name || project.title || 'Project';

            return (
              <Link
                key={getProjectSlug(project, index)}
                className="project-card-link"
                to={`/projects/${getProjectSlug(project, index)}`}
                aria-label={`View details for ${title}`}
              >
                <ResumeEntry
                  eyebrow={[project.startDate || project.date, project.endDate].filter(Boolean).join(' — ')}
                  title={title}
                  subtitle={project.organization}
                  description={project.description}
                  highlights={project.highlights || []}
                  tags={project.keywords || project.tags || []}
                  image={projectImages[0] || project.videoPoster}
                  imageAlt={project.imageAlt || `${title} preview`}
                />
                <span className="project-card-cta">View project details</span>
              </Link>
            );
          })}
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
