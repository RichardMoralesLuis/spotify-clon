import React, { useEffect, useState } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import {
	requestCategories,
	requestFeaturedPlaylists,
	requestNewReleases,
	requestDevices,
} from '../../../api/playlists/endpoint';

const Discover = () => {
	const [newReleases, setNewReleases] = useState([]);
	const [playlists, setPlaylists] = useState([]);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		requestNewReleases().then((newReleases) => setNewReleases(newReleases));
		requestFeaturedPlaylists().then((playlists) => setPlaylists(playlists));
		requestCategories().then((categories) => {
			setCategories(categories);
			setLoading(false);
		});
		requestDevices().catch(console.error).then(console.log);
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	// TODO USE DIFFERENT ORGANISM FOR EACH SECTION TO REDUCE THE LOADING OF THE MAIN PAGE.
	return (
		<div className='discover'>
			<DiscoverBlock text='RELEASED THIS WEEK' id='released' data={newReleases} />
			<DiscoverBlock text='FEATURED PLAYLISTS' id='featured' data={playlists} />
			<DiscoverBlock text='BROWSE' id='browse' data={categories} imagesKey='icons' />
		</div>
	);
};

export default Discover;
