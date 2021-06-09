//import {apiKey} from 'credentials/lastfm.js'

var API_KEY = 'd7c19e822e436a0ee056a6a73f71b04d';
var requestSpotify = new XMLHttpRequest();
var requestMonthly = new XMLHttpRequest();
var requestGroupe = new XMLHttpRequest();

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var groupeParam = urlParams.get('groupe');

if (groupeParam != null) {

    let groupURL = 'api/getGroupAPI.php?groupe=' + groupeParam;
    requestGroupe.open('GET', groupURL);
    requestGroupe.onload = function () {
        let spotifyID = '';

        let data = JSON.parse(requestGroupe.responseText);
        spotifyID = data[0].spotify_ID;

        let spotifyReqURL = 'https://api.t4ils.dev/artistInfo?artistid=' + spotifyID;

        requestSpotify.open('GET', spotifyReqURL, true);
        requestSpotify.onload = function () {
            for (let i = 0; i < 5; i++) {
                let data = JSON.parse(requestSpotify.responseText);

                var coverURL = '';

                let artistName = data.data.info.name;
                artistName = artistName.replace(/\s/g, '+');

                let coverRequest = new XMLHttpRequest;
                let requestCoverURL = 'http://ws.audioscrobbler.com' + '/2.0/?method=album.getinfo&api_key=' + API_KEY + '&artist=' + artistName + '&album=' + data.data.top_tracks.tracks[i].release.name + '&format=json';

                coverRequest.open('GET', requestCoverURL);
                coverRequest.onload = function () {
                    let dataCover = JSON.parse(coverRequest.responseText);
                    coverURL = dataCover.album.image[3]['#text'];

                    let div = document.createElement('div');
                    div.classList.toggle('titre');

                    let img = document.createElement('img');

                    img.src = coverURL;

                    let titre = document.createElement('p');
                    titre.innerHTML = data.data.top_tracks.tracks[i].name;

                    let ecoutes = document.createElement('p');
                    ecoutes.innerHTML = data.data.top_tracks.tracks[i].playcount + ' écoutes';

                    div.appendChild(img)
                    div.appendChild(titre)
                    div.appendChild(ecoutes)

                    document.querySelector('.titres').appendChild(div);
                }
                coverRequest.send()

            }
        }
        requestSpotify.send();
    }
    requestGroupe.send();

    monthlyURL = 'api/monthlySpotifyAPI.php?groupe=' + groupeParam;
    requestMonthly.open('GET', monthlyURL);
    requestMonthly.onload = function () {
        var dataMonthly = JSON.parse(requestMonthly.responseText);
        if (dataMonthly == 'ERREUR') {

        } else {
            for (let i = 0; i < 5; i++) {
                let div = document.createElement('div');

                let img = document.createElement('img');
                let tmp = dataMonthly[i].Ville_Pays_Ecoutes.slice(-2);
                img.src = "https://www.countryflags.io/" + tmp.toLowerCase() + "/flat/64.png";

                let ville = document.createElement('p');
                ville.innerHTML = dataMonthly[i].Ville_Pays_Ecoutes;

                let nombres = document.createElement('p');
                nombres.innerHTML = dataMonthly[i].Nombres_Ecoutes;

                div.appendChild(img)
                div.appendChild(ville)
                div.appendChild(nombres)

                document.querySelector('.pays').appendChild(div);
            }
        }
    }
    requestMonthly.send();

} else {
    document.querySelector('.stream').innerHTML = "ERREUR - Le groupe spécifié n'existe pas";
}