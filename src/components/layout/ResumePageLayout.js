import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../theme/ThemeProvider';
import { BottomNavigation } from '../navigation/BottomNavigation';
import DisplacementSphere from '../background/DisplacementSphere';
import '../../Portfolio.css';

export const ResumePageLayout = ({ eyebrow, title, children, showBackground = false, showProjectsLink = false }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`home-sections home-sections-${theme} resume-page`}>
      {showBackground && <DisplacementSphere />}
      <main className="resume-page-content">
        <nav className="resume-page-nav" aria-label="Page navigation">
          <Link className="resume-home-link" to="/">Back to home</Link>
          {showProjectsLink && (
            <Link className="resume-home-link" to="/projects">Back to projects</Link>
          )}
        </nav>
        <header className="resume-page-header">
          <p className="scroll-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </header>
        {children}
      </main>
      <footer className="scroll-footer resume-page-footer">
        <span>Agri Azzukhruf (艾睿)</span>
        <Link to="/">Home</Link>
      </footer>
      <BottomNavigation />
    </div>
  );
};
