import { Rajdhani, Ubuntu, Lato } from '@next/font/google';

const lato = Lato({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
  fallback: [
    '微軟正黑體',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
});

const ubuntu = Ubuntu({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  fallback: [
    '微軟正黑體',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
});

const rajdhani = Rajdhani({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  fallback: [
    '微軟正黑體',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
});

const fontClasses = { ubuntu, rajdhani, lato };

export default fontClasses;
