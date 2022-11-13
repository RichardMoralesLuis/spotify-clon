import '../styles.scss';
import { useLoaderData } from 'react-router-dom';
import PlaylistTrackList from './PlaylistTrackList';

const Playlist = () => {
	const playlistInfo = useLoaderData();

	return (
		<div className='container'>
			<section className='header'>
				<img src={playlistInfo.images[0].url} alt='Playlist logo' className='playlist-image' />
				<span>
					<p>{playlistInfo.description}</p>
				</span>
			</section>
			<section className='tracks-container'>
				<PlaylistTrackList id={playlistInfo.id} />
			</section>
		</div>
	);
};

export default Playlist;
