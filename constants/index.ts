export const GRAPHY_DESIGN_TYPE = {
  poster: 'poster',
  editorial: 'editorial',
  branding: 'branding',
  dm: 'dm',
  banner: 'banner',
  edm: 'edm',
  illustration: 'illustration',
  misc: 'misc',
};

export const navItems = [
  {
    text: 'Home',
    key: '/',
    note: 'Back to Hope Shelter index page',
  },
  {
    text: 'About Me',
    key: '/aboutme',
    note: 'My brief indroduction',
  },
  {
    text: 'Portfolio',
    key: '/portfolio/',
    subItems: [
      {
        text: 'Frontend App',
        key: '/portfolio/f2e',
      },
      {
        text: 'Graphic Design',
        key: '/portfolio/graphic',
      },
      {
        text: 'Editorial',
        key: '/portfolio/editoral',
      },
    ],
  },
];
