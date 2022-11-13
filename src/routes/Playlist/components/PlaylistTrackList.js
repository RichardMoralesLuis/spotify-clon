import { useEffect, useState } from 'react';
import { requestPlaylistTracks } from '../../../api/playlists/endpoint';
import Track from './Track';

const PlaylistTrackList = ({ id }) => {
  const [isLoadingTracks, setIsLoadingTracks] = useState(true);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    requestPlaylistTracks(id).then(tracks => {
      setTracks(tracks);
      setIsLoadingTracks(false);
    });
  }, [id]);

  if (isLoadingTracks) {
    return <div>Loading tracks...</div>;
  }

  return <ul className="tracks-list">
    {tracks.map(track => <Track id={track.id} track={track}/>)}
  </ul>;
};

export default PlaylistTrackList;