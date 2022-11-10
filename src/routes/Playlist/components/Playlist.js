import { useLoaderData } from 'react-router-dom';

const Playlist = () => {
  const playlistInfo = useLoaderData();

  if(!playlistInfo) {
    return <div>Loading...</div>
  }

  return <div>{JSON.stringify(playlistInfo)}</div>;
};

export default Playlist;
