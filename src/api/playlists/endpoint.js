import { get } from '../API';

const parserItems = simpleObject => {
  return simpleObject.items.map(playlist => ({
    id: playlist.id,
    name: playlist.name,
    tracks: playlist.tracks,
    images: playlist.images,
    icons: playlist.icons
  }));
};

const parserNewReleases = raw => parserItems(raw.albums);
const parserFeaturedPlaylists = raw => parserItems(raw.playlists);
const parserCategories = raw => parserItems(raw.categories);

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
  return await get(endpoint);
}
