
export const authEndpoint = "https://accounts.spotify.com/authorize";
// const redirectUri = "http://192.168.187.125:3000/"; -> spotify marked it as an invalid uri
const redirectUri = "http://localhost:3000/";
const clientId = "da7f2d33a063466ab1e2790b1785fd0f"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromUrl = () => {
    // pull the access token from the spotify redirected (logged) uri.
    // i think this can be achived in a cleaner way
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;