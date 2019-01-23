import {
    setSpotifyAccessToken,
    getArtists,
    getTracks,
    getTopGenre,
} from '~/mixins/spotify-api';

async function setAndStoreAccessToken(store) {
    const accessToken = await setSpotifyAccessToken(store.state.accessToken);
    if (!store.state.accessToken) {
        store.commit('setData', {
            key: 'accessToken',
            value: accessToken,
        });
    }
}

async function getAndStoreDate(store) {
    // data since last 6 months
    const {
        artists,
        topArtistImage,
    } = await getArtists('medium_term');
    const {
        tracks,
    } = await getTracks('medium_term');
    // data since last years
    const {
        artists: artistsYears,
        topArtistImage: topArtistImageYears,
    } = await getArtists('long_term');
    const {
        tracks: tracksYears,
    } = await getTracks('long_term');
    const topGenreYears = getTopGenre(artistsYears);


    // save all data 6 months
    store.commit('setData', {
        key: 'artists',
        value: artists,
    });
    store.commit('setData', {
        key: 'topArtistImage',
        value: topArtistImage,
    });
    store.commit('setData', {
        key: 'tracks',
        value: tracks,
    });

    // save all data last years
    store.commit('setData', {
        key: 'artistsYears',
        value: artistsYears,
    });
    store.commit('setData', {
        key: 'topArtistImageYears',
        value: topArtistImageYears,
    });
    store.commit('setData', {
        key: 'tracksYears',
        value: tracksYears,
    });
    store.commit('setData', {
        key: 'topGenreYears',
        value: topGenreYears,
    });
}
export default async function (context) {
    const { store } = context;
    setAndStoreAccessToken(store);
    getAndStoreDate(store);
}
