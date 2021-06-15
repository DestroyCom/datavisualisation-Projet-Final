var API_KEY = 'd7c19e822e436a0ee056a6a73f71b04d';
var countryMap = document.querySelectorAll('.st0');
var requestSpotify = new XMLHttpRequest();
var requestMonthly = new XMLHttpRequest();
var requestGroupe = new XMLHttpRequest();
var zoom = 1;

var isoAndNmbConcert = {};

if (localStorage["Section"] == "Stream") {
    document.getElementById("stream").style.backgroundColor = "#353131";
    document.getElementById("concert").style.backgroundColor = "#8F8F8F";
    document.getElementById("PageStream").classList.remove("hidden");
    document.getElementById("PageMap").classList.add("hidden");
    document.getElementById("Calque_1").classList.add("hidden");

    localStorage.removeItem("Section")

}

function displayStream(groupeParam) {

    if (groupeParam != null) {
        let groupURL = 'assets/js/api/getGroupAPI.php?groupe=' + groupeParam;
        requestGroupe.open('GET', groupURL);
        requestGroupe.onload = function () {
            let spotifyID = '';

            let data = JSON.parse(requestGroupe.responseText);
            spotifyID = data[0].spotify_ID;

            let spotifyReqURL = 'assets/js/api/getAlbum.php?artistid=' + spotifyID;

            requestSpotify.open('GET', spotifyReqURL, true);
            requestSpotify.onload = function () {
                document.querySelector('.titres').innerHTML = '';
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
                        let tmpDataEcoute = data.data.top_tracks.tracks[i].playcount;
                        ecoutes.innerHTML = tmpDataEcoute.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + ' écoutes';

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

        monthlyURL = 'assets/js/api/monthlySpotifyAPI.php?groupe=' + groupeParam;
        requestMonthly.open('GET', monthlyURL);
        requestMonthly.onload = function () {
            var dataMonthly = JSON.parse(requestMonthly.responseText);
            if (dataMonthly == 'ERREUR') {

            } else {
                document.querySelector('.pays').innerHTML = '';
                for (let i = 0; i < 5; i++) {
                    let div = document.createElement('div');

                    let img = document.createElement('img');
                    let tmp = dataMonthly[i].Ville_Pays_Ecoutes.slice(-2);
                    img.src = "https://www.countryflags.io/" + tmp.toLowerCase() + "/flat/64.png";

                    let ville = document.createElement('p');
                    ville.innerHTML = dataMonthly[i].Ville_Pays_Ecoutes;

                    let nombres = document.createElement('p');
                    let tmpNombre = dataMonthly[i].Nombres_Ecoutes;
                    nombres.innerHTML = tmpNombre.replace('listeners', 'auditeurs');

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

}

function ColorMap(json) {
    var max = 0

    console.log(json)

    json.forEach((item, index) => {
        isoAndNmbConcert[item['ISO']] = item.Nombre_Concert;
    })

    json.forEach(function (currentValue, index) {
        try {
            if (parseInt(currentValue["Nombre_Concert"]) > max) {
                max = parseInt(currentValue["Nombre_Concert"]);
            }
        } catch {

        }
    });

    json.forEach(function (currentValue, index) {
        try {
            if (parseInt(currentValue["Nombre_Concert"]) < (max * 0.25) && parseInt(currentValue["Nombre_Concert"]) > 1) {
                document.getElementById(currentValue["ISO"]).style.fill = "#f0bb00";

            } else if (parseInt(currentValue["Nombre_Concert"]) < (max * 0.5)) {
                document.getElementById(currentValue["ISO"]).style.fill = "#F16E00";

            } else if (parseInt(currentValue["Nombre_Concert"]) < (max * 0.75)) {
                document.getElementById(currentValue["ISO"]).style.fill = "#FB0101";


            } else if (parseInt(currentValue["Nombre_Concert"]) < (max * 0.99)) {
                document.getElementById(currentValue["ISO"]).style.fill = "red";

            } else {
                document.getElementById(currentValue["ISO"]).style.fill = "#940404";
            }

        } catch {
            console.log("Color Map Finish")
        }
    });


}

function MapReset() {
    allPath = document.getElementsByClassName("st0");

    for (var i = 0; i < allPath.length; i++) {
        document.getElementById(allPath[i].id).style.fill = ""
    }
}



function WicheMapColor(groupe) {
    var requestURL = 'assets/js/api/getConcert.php?var1=' + groupe;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {

        ColorMap(request.response);

    };
}



var values = window.location.search;
var urlvalues = new URLSearchParams(values);
var groupe1 = parseInt(urlvalues.get("groupe1"));
var groupe2 = parseInt(urlvalues.get("groupe2"));

if (document.getElementById("groupe1") != "undefined") {
    WicheMapColor(groupe1);
    displayStream(groupe1);
} else if (document.getElementById("groupe2") != "undefined") {
    WicheMapColor(groupe2);
    displayStream(groupe2);
}

document.getElementById("logobeatles").addEventListener('click', function () {
    if (document.getElementById("groupe2") != "undefined") {
        document.getElementById("groupe2").id = "groupe1";
        document.querySelector("#logobeatles").classList.add('select');
        document.querySelector("#logors").classList.remove('select');
        MapReset();
        WicheMapColor(groupe1);
        displayStream(groupe1);

    }
});


document.getElementById("logors").addEventListener('click', function () {
    if (document.getElementById("groupe1") != "undefined") {
        document.getElementById("groupe1").id = "groupe2";
        document.querySelector("#logors").classList.add('select');
        document.querySelector("#logobeatles").classList.remove('select');
        MapReset();
        WicheMapColor(groupe2);
        displayStream(groupe2);
    }
});


document.getElementById("+").addEventListener('click', function () {
    if (zoom < 2) {
        zoom = zoom + 0.5
        document.getElementById("Calque_1").style.transform = "scale(" + zoom + ")";
    }

});

document.getElementById("-").addEventListener('click', function () {
    if (zoom > 1) {
        zoom = zoom - 0.5
        document.getElementById("Calque_1").style.transform = "scale(" + zoom + ")";
    }

});

document.getElementById("logovs").addEventListener('click', function () {
    window.location = "indexv2.html"

});

let createDiv = document.createElement('div');
createDiv.classList.toggle('indicateNumber');
document.querySelector('#PageMap').appendChild(createDiv);
countryMap.forEach((item, index) => {
    countryMap[index].addEventListener('mouseover', function (e) {
        console.log('yes');
        console.log(item)
        let actualCountry = item.id;
        if (actualCountry in isoAndNmbConcert) {
            console.log(actualCountry, isoAndNmbConcert[actualCountry]);
            createDiv.innerHTML =item.id + ' = ' + isoAndNmbConcert[actualCountry];
        }
    })
})

document.querySelector('svg').addEventListener('mouseout', function(e){
    createDiv.innerHTML = '';
})