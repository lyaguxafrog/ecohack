export type SiteConfig = typeof siteConfig;

export const routes = {
  main: '/',
  events: '/events',
  favorites: '/favorites',
};

export const siteConfig = {
  name: 'ECO Moscow',
  description: 'Make beautiful websites regardless of your design experience.',
  navItems: [
    {
      label: 'Главная',
      href: routes.main,
    },
    {
      label: 'События',
      href: routes.events,
    },
    {
      label: 'Мои события',
      href: routes.favorites,
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    twitter: 'https://twitter.com/getnextui',
    docs: 'https://nextui.org',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
