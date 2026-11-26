import React, { useState } from 'react';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { Link, useParams } from 'react-router-dom';
import Resume from '../settings/resume.json';
import { ResumeEntry } from '../components/content/ResumeEntry';
import { ResumePageLayout } from '../components/layout/ResumePageLayout';
import { getMediaSrc, getProjectMedia } from '../utils/projectMedia';
import { getProjectSlug } from '../utils/projectSlug';

const ProjectDetail = () => {
  const { projectSlug } = useParams();
  const projects = Resume.projects || [];
  const project = projects.find((item, index) => getProjectSlug(item, index) === projectSlug);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  if (!project) {
    return (
      <ResumePageLayout eyebrow="Project details" title="Project not found" showBackground>
        <p className="section-muted">This project could not be found.</p>
        <Link className="project-detail-back" to="/projects">Back to projects</Link>
      </ResumePageLayout>
    );
  }

  const projectMedia = getProjectMedia(project);
  const projectTitle = project.name || project.title || 'Project';
  const starSections = [
    { label: 'Situation', content: project.star?.situation },
    { label: 'Task', content: project.star?.task },
    { label: 'Action', content: project.star?.action },
    { label: 'Result', content: project.star?.result },
  ].filter((section) => typeof section.content === 'string' && section.content.trim());
  const hasCompleteStar = starSections.length === 4;

  return (
    <ResumePageLayout eyebrow="Project details" title={projectTitle} showBackground>
      <div className="project-detail">
        {projectMedia.length > 0 && (
          <section className="project-gallery" aria-label={`${projectTitle} media`} aria-roledescription="carousel">
            <div className="project-gallery-frame">
              {projectMedia[activeMediaIndex].type === 'video' ? (
                <video
                  className="project-gallery-video"
                  src={getMediaSrc(projectMedia[activeMediaIndex].src)}
                  poster={project.videoPoster ? getMediaSrc(project.videoPoster) : undefined}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${projectTitle} video ${activeMediaIndex + 1}`}
                />
              ) : (
                <img
                  className="project-gallery-image"
                  src={getMediaSrc(projectMedia[activeMediaIndex].src)}
                  alt={project.imageAlts?.[activeMediaIndex] || (activeMediaIndex === 0 && project.imageAlt) || `${projectTitle} screenshot ${activeMediaIndex + 1}`}
                />
              )}
            </div>
            {projectMedia.length > 1 && (
              <div className="project-gallery-controls">
                <button
                  type="button"
                  className="project-gallery-arrow"
                  aria-label="Previous slide"
                  onClick={() => setActiveMediaIndex((index) => (index - 1 + projectMedia.length) % projectMedia.length)}
                >
                  <NavigateBefore />
                </button>
                <div className="project-gallery-status">
                  <span aria-live="polite">{activeMediaIndex + 1} / {projectMedia.length}</span>
                  <div className="project-gallery-dots" aria-label="Choose a slide">
                    {projectMedia.map((media, index) => (
                      <button
                        key={`${media.src}-${index}`}
                        type="button"
                        className={`project-gallery-dot${index === activeMediaIndex ? ' is-active' : ''}`}
                        aria-label={`Show slide ${index + 1}`}
                        aria-pressed={index === activeMediaIndex}
                        onClick={() => setActiveMediaIndex(index)}
                      />
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="project-gallery-arrow"
                  aria-label="Next slide"
                  onClick={() => setActiveMediaIndex((index) => (index + 1) % projectMedia.length)}
                >
                  <NavigateNext />
                </button>
              </div>
            )}
          </section>
        )}
        <ResumeEntry
          eyebrow={[project.startDate || project.date, project.endDate].filter(Boolean).join(' — ')}
          subtitle={project.organization}
          description={hasCompleteStar ? undefined : project.description}
          highlights={hasCompleteStar ? [] : project.highlights || []}
          tags={project.keywords || project.tags || []}
          url={project.url}
          urlLabel="Open project"
        />
        {starSections.length > 0 && (
          <section className="project-star" aria-labelledby="project-star-title">
            <p className="scroll-eyebrow">PROJECT BREAKDOWN</p>
            <h2 id="project-star-title" className="project-star-title">Situation, task,<br /><span>action & result.</span></h2>
            <div className="project-star-grid">
              {starSections.map((section) => (
                <article className="project-star-card" key={section.label}>
                  <h3>{section.label}</h3>
                  <p>{section.content}</p>
                </article>
              ))}
            </div>
          </section>
        )}
        <Link className="project-detail-back" to="/projects">Back to projects</Link>
      </div>
    </ResumePageLayout>
  );
};

export default ProjectDetail;
