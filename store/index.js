export const mutations = {
    // TODO
    setData(state, data) {
        // eslint-disable-next-line
        state[data.key] = data.value;
    },
};

export const state = () => ({
    // my music 1
    artists: [],
    topArtistImage: '',
    tracks: [],

    // my music 2
    artistsYears: [],
    topArtistImageYears: '',
    tracksYears: [],
    topGenreYears: '',

    // token connect spotify
    accessToken: '',
});
