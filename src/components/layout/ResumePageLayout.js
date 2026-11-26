import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../theme/ThemeProvider';
import { BottomNavigation } from '../navigation/BottomNavigation';
import '../../Portfolio.css';

export const ResumePageLayout = ({ eyebrow, title, children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`home-sections home-sections-${theme} resume-page`}>
      <main className="resume-page-content">
        <Link className="resume-home-link" to="/">Back to home</Link>
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
