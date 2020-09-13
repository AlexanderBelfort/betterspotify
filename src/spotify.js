//https://developer.spotify.com
//Client ID ea1673f7df8a41f0aad584b33a93357a
//we will not really tackle authentication
//we will use spotify's API to do it for us


export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

//login -> spotify auth -> homepage once authorized 

const clientId = "ea1673f7df8a41f0aad584b33a93357a";

//scopes will be listed in the middle of the page thanks to the spotify api

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {

        //#accesstoken=mysupersecretkey&name=etc

        //split it at the = sign

        var parts = item.split('=');

        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;

        //parts[0] is the accesstoken
    }, {});
}

//crazy url

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;