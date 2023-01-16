import { Rajdhani, Ubuntu } from '@next/font/google';

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

const fontClasses = { ubuntu, rajdhani };

export default fontClasses;
