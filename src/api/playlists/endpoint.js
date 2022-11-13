import { get } from '../API';
const parserItems = (simpleObject) => {
	if (!simpleObject) {
		return [];
	}

	return simpleObject.items.map((playlist) => ({
		id: playlist.id,
		name: playlist.name,
		tracks: playlist.tracks,
		images: playlist.images,
		icons: playlist.icons,
	}));
};

const parserSimplePlaylist = ({ description, href, id, name, images }) => ({
	description,
	href,
	id,
	name,
	images,
});

const parserTracks = (rawTracks) => {
	console.log('rawTracks', rawTracks.items[0]);
	return rawTracks.items.map((item) => ({
		name: item.track.name,
		id: item.track.id,
		images: item.track.album.images,
		artist: item.track.artists[0]
	}));
};

const parserNewReleases = (raw) => parserItems(raw.albums);
const parserFeaturedPlaylists = (raw) => parserItems(raw.playlists);
const parserCategories = (raw) => parserItems(raw.categories);

export const requestNewReleases = async () => {
	const endpoint = 'browse/new-releases?country=ES';
	return await get(endpoint, parserNewReleases);
};

export const requestFeaturedPlaylists = async () => {
	const endpoint = 'browse/featured-playlists?country=ES';
	return await get(endpoint, parserFeaturedPlaylists);
};

export const requestCategories = async () => {
	const endpoint = 'browse/categories?country=ES';
	return await get(endpoint, parserCategories);
};

export const requestPlaylistOverview = async (id) => {
	const endpoint = `playlists/${id}?country=ES`;
	return await get(endpoint, parserSimplePlaylist);
};

export const requestPlaylistTracks = async (id) => {
	const endpoint = `playlists/${id}/tracks?country=ES`;
	return await get(endpoint, parserTracks);
};

export const requestDevices = async () => {
	const endpoint = `me/player/devices`;
	return await get(endpoint);
};
