import React, { useContext } from 'react';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Launch, ArrowUpward } from '@material-ui/icons';
import Resume from '../settings/resume.json';
import { ThemeContext } from '../components/theme/ThemeProvider';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { ResumeEntry } from '../components/content/ResumeEntry';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { BottomNavigation } from '../components/navigation/BottomNavigation';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import '../Portfolio.css';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const Section = ({ id, number, title, children }) => (
  <section className="scroll-section" id={id}>
    <div className="scroll-section-inner">
      <p className="scroll-eyebrow">{number} / {title}</p>
      {children}
    </div>
  </section>
);

const HomeSections = () => {
  const { theme } = useContext(ThemeContext);
  const basics = Resume.basics || {};
  const skills = Resume.skills || [];
  const awards = Resume.awards || [];
  const publications = Resume.publications || [];
  const languages = Resume.languages || [];
  const interests = Resume.interests || [];
  const references = Resume.references || [];
  const hasRecognition = awards.length > 0 || publications.length > 0;
  const hasMore = languages.length > 0 || interests.length > 0 || references.length > 0;
  const keywords = typeof basics.keywords === 'string'
    ? basics.keywords.split(',').map((keyword) => keyword.trim()).filter(Boolean)
    : basics.keywords || [];
  const moreNumber = 3 + Number(hasRecognition);
  const contactNumber = moreNumber + Number(hasMore);

  return (
    <div className={`home-sections home-sections-${theme}`}>
      <Section id="about" number="01" title="ABOUT ME">
        <h2>A little more<br /><span>about me.</span></h2>
        <p className="section-lead">
          {basics.description || basics.summary || 'I am interested in technology, software development, and continuous learning.'}
        </p>
        <div className="about-details">
          <div><span>BASED IN</span><strong>{basics.location?.city || '—'}{basics.location?.country ? `, ${basics.location.country}` : ''}</strong></div>
          <div><span>FIELD</span><strong>{basics.label || basics.job || 'Computer Science'}</strong></div>
          {basics.email && <div><span>EMAIL</span><strong>{basics.email}</strong></div>}
          {basics.phone && <div><span>PHONE</span><strong>{basics.phone}</strong></div>}
        </div>
        {keywords.length > 0 && (
          <div className="scroll-tags">
            {keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
          </div>
        )}
      </Section>

      <Section id="skills" number="02" title="SKILLS">
        <h2>Things I work<br /><span>and learn with.</span></h2>
        {skills.length > 0 ? (
          <div className="resume-entry-grid">
            {skills.map((skill, index) => (
              <ResumeEntry
                key={`${skill.name}-${index}`}
                title={skill.name}
                subtitle={skill.level}
                tags={skill.keywords || []}
                image={skill.image}
                imageAlt={skill.imageAlt}
              />
            ))}
          </div>
        ) : (
          <p className="section-muted">Add skills to src/settings/resume.json to show them here.</p>
        )}
      </Section>

      {hasRecognition && (
        <Section id="recognition" number="03" title="AWARDS & PUBLICATIONS">
          <h2>Recognition &<br /><span>Awards.</span></h2>
          <div className="resume-entry-grid">
            {awards.map((award, index) => (
              <ResumeEntry
                key={`${award.title}-${index}`}
                eyebrow={award.date}
                title={award.title}
                subtitle={award.awarder}
                description={award.summary}
                image={award.image}
                imageAlt={award.imageAlt}
              />
            ))}
            {publications.map((publication, index) => (
              <ResumeEntry
                key={`${publication.name}-${index}`}
                eyebrow={publication.releaseDate}
                title={publication.name}
                subtitle={publication.publisher}
                description={publication.summary}
                url={publication.website}
                urlLabel="Read publication"
                image={publication.image}
                imageAlt={publication.imageAlt}
              />
            ))}
          </div>
        </Section>
      )}

      {hasMore && (
        <Section id="more" number={`0${moreNumber}`} title="MORE ABOUT ME">
          <h2>A few more<br /><span>things to know.</span></h2>
          <div className="resume-entry-grid">
            {languages.length > 0 && (
              languages.map((item, index) => (
                <ResumeEntry
                  key={`${item.language}-${index}`}
                  title={item.language}
                  subtitle={item.fluency}
                  image={item.image}
                  imageAlt={item.imageAlt}
                />
              ))
            )}
            {interests.map((interest, index) => (
              <ResumeEntry
                key={`${interest.name}-${index}`}
                title={interest.name}
                tags={interest.keywords || []}
                image={interest.image}
                imageAlt={interest.imageAlt}
              />
            ))}
            {references.map((reference, index) => (
              <ResumeEntry
                key={`${reference.name}-${index}`}
                title={reference.name}
                description={reference.reference}
                image={reference.image}
                imageAlt={reference.imageAlt}
              />
            ))}
          </div>
        </Section>
      )}

      <section className="scroll-contact" id="contact">
        <p className="scroll-eyebrow">0{contactNumber} / GET IN TOUCH</p>
        <h2>Let's connect<br /><span>and create.</span></h2>
        <p className="section-lead">Have an idea, an opportunity, or simply want to exchange thoughts? Feel free to reach out.</p>
        {basics.email && <a className="scroll-contact-link" href={`mailto:${basics.email}`}>{basics.email} <Launch /></a>}
        <div className="scroll-socials">
          {(basics.profiles || []).map((profile, index) => (
            <a
              key={`${profile.network}-${index}`}
              href={profile.url}
              target={profile.url?.startsWith('http') ? '_blank' : undefined}
              rel={profile.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {profile.network}{profile.username ? ` — ${profile.username}` : ''} <Launch />
            </a>
          ))}
        </div>
        <a className="back-to-top" href="#top">Back to top <ArrowUpward /></a>
      </section>
      <footer className="scroll-footer">
        <span>© {new Date().getFullYear()} {basics.name || 'Portfolio'}</span>
        <span>Built with React</span>
      </footer>
    </div>
  );
};

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className="home-hero" id="top">
        <DisplacementSphere />
        <LogoLink />
        <div className="hero-primary">
          {Resume.basics.picture && (
            <a className="hero-portrait" href="#about" aria-label={`Learn more about ${Resume.basics.name}`}>
              <span className="hero-portrait-inner">
                <img
                  src={`${process.env.PUBLIC_URL}/${Resume.basics.picture}`}
                  alt={`${Resume.basics.name} in ${Resume.basics.location?.city || 'Beijing'}`}
                />
                <span className="hero-portrait-caption">
                  <strong>{Resume.basics.name}</strong>
                  <small>{Resume.basics.location?.city || 'Beijing'} / {Resume.basics.location?.country || 'China'}</small>
                </span>
              </span>
            </a>
          )}
          <Content />
        </div>
        <ThemeToggle />
        <Hidden smDown><SocialIcons /></Hidden>
        <Hidden mdUp><SpeedDials /></Hidden>
        <a className="scroll-cue" href="#about" aria-label="Scroll down to learn more">
          <span /> Scroll to explore
        </a>
      </section>
      <HomeSections />
      <BottomNavigation />
    </div>
  );
};
