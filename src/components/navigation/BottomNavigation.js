import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const navigationItems = [
  { label: 'Project', path: '/projects' },
  { label: 'Education', path: '/education' },
  { label: 'Experience', path: '/experience' },
];

const useStyles = makeStyles((theme) => ({
  navigation: {
    position: 'fixed',
    bottom: theme.spacing(3),
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1300,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(1),
    border: '1px solid rgba(255, 255, 255, 0.18)',
    borderRadius: 999,
    background: 'rgba(20, 20, 20, 0.68)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: '0 8px 28px rgba(0, 0, 0, 0.2)',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      bottom: theme.spacing(2),
      gap: theme.spacing(0.5),
      padding: theme.spacing(0.75),
    },
  },
  link: {
    color: '#fff',
    fontSize: '0.8rem',
    fontWeight: 500,
    padding: theme.spacing(1, 1.5),
    borderRadius: 999,
    textDecoration: 'none',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.16)',
      textDecoration: 'none',
    },
    '&:focus-visible': {
      outline: '2px solid #fff',
      outlineOffset: 2,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.72rem',
      padding: theme.spacing(1, 1),
    },
  },
}));

export const BottomNavigation = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navigation} aria-label="Main navigation">
      {navigationItems.map((item) => (
        <Link
          key={item.path}
          component={RouterLink}
          to={item.path}
          className={classes.link}
          underline="none"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
