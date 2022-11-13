import React from 'react';
import '../styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default function Track({ track }) {
	const handlePlaySong = () => {
		console.log('play song', track.id);
	};

	return (
		<div className='track-container'>
			<button className='image-container' onClick={handlePlaySong}>
				<FontAwesomeIcon icon={faPlayCircle} className='play-icon' />
				<img className='track-image' src={track.images[0].url} alt='song logo' />
			</button>
			<span>{track.name}</span> / <span>{track.artist.name}</span>
		</div>
	);
}