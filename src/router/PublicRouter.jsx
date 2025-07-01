import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home.jsx'));

const PublicRouter = [
  { path: '/', Component: Home },
]

export default PublicRouter;