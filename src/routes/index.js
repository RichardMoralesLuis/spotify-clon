import { createBrowserRouter } from 'react-router-dom';
import Discover from './Discover';
import Playlist from './Playlist/components/Playlist';
import { requestPlaylistOverview } from '../api/playlists/endpoint';

const routes = [
  {
    path: '/',
    element: <Discover/>
  },
  {
    path: '/playlist/:id',
    element: <Playlist/>,
    loader: async ({ params }) => {
      return requestPlaylistOverview(params.id);
    }
  }
];

const router = createBrowserRouter(routes);
export default router;
