const SpotifyWebApi = require('spotify-web-api-js');

const spotifyApi = new SpotifyWebApi();

export async function setSpotifyAccessToken(token) {
    let accessToken = '';
    if (token) {
        await spotifyApi.setAccessToken(token);
        return token;
    }
    if (process.client) {
        const callbackUrl = window.location.href;
        const clientId = '9ce0744ff4a04334966cbcf3fb7e312d';
        const apiUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${callbackUrl}`;
        let hash;
        if (!window.location.hash) {
            window.location.replace(apiUrl);
        } else {
            const url = window.location.href;
            [, hash] = url.split('#');
            [hash] = hash.split('&');
            [, hash] = hash.split('=');
        }
        accessToken = hash;
        if (accessToken) {
            await spotifyApi.setAccessToken(accessToken);
        }
    }
    return accessToken;
}

function getArtistImage(artists) {
    const {
        items,
    } = artists;
    let topArtistImage = '';
    if (items && items.length > 0) {
        const firstItem = items[0];
        const {
            images,
        } = firstItem;
        if (images && images.length > 1) {
            // second image 320x320
            const firstImageUrl = images[1].url;
            topArtistImage = firstImageUrl;
        }
    }
    return topArtistImage;
}

export async function getArtists(timeRange) {
    let artists = [];
    let topArtistImage = '';
    if (process.client) {
        artists = await spotifyApi.getMyTopArtists({
            limit: 5,
            time_range: timeRange,
        });
        artists = Object.freeze(artists);
        topArtistImage = getArtistImage(artists);
    }
    return { artists, topArtistImage };
}

export async function getTracks(timeRange) {
    let tracks = [];
    if (process.client) {
        tracks = await spotifyApi.getMyTopTracks({
            limit: 5,
            time_range: timeRange,
        });
        tracks = Object.freeze(tracks);
    }
    return { tracks };
}

function mostFrequent(arr) {
    const pairsObj = arr.reduce((obj, value) => {
        const objCloned = Object.assign({}, obj);
        if (!obj[value]) {
            objCloned[value] = 1;
        } else {
            objCloned[value] += objCloned[value];
        }
        return objCloned;
    }, {});
    const values = Object.values(pairsObj);

    const i = values.findIndex(el => el === Math.max(...values));
    const mostFrequentPairWord = Object.entries(pairsObj)[i];
    const mostFrequentWord = mostFrequentPairWord.length > 1 ? mostFrequentPairWord[0] : '';
    return mostFrequentWord;
}

function getCapitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function getTopGenre(artists) {
    let topGenre = '';
    if (artists && artists.items && artists.items.length > 0) {
        const genreList = artists.items.reduce(
            (acc, item) => acc.concat(item.genres), [],
        );
        const genreWordsList = genreList.reduce(
            (acc, item) => acc.concat(item.split(/\s+/)), [],
        );
        topGenre = mostFrequent(genreWordsList);
        if (topGenre) {
            topGenre = getCapitalizeWord(topGenre);
        }
    }
    return topGenre;
}
