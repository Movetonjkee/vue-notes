export const process = {
  dev: true,
};
export const site = {
  home: process.dev ? 'http://localhost:8080/' : 'http://movetonjkee.ru/',
};

export const app = {
  title: 'Templates',
};
export const links = [
  {
    title: 'Home',
    alias: 'home',
    url: '/',
  },
  {
    title: 'About',
    alias: 'about',
    url: '/about',
  },
  {
    title: 'Vacancy',
    alias: 'vacancy',
    url: '/vacancy',
  },
];
