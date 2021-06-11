var API_KEY = 'd7c19e822e436a0ee056a6a73f71b04d';
var requestSpotify = new XMLHttpRequest();
var requestMonthly = new XMLHttpRequest();
var requestGroupe = new XMLHttpRequest();

function displayStream(groupeParam) {
    console.log(groupeParam, 'test');
    if (groupeParam != null) {
        let groupURL = 'assets/js/api/getGroupAPI.php?groupe=' + groupeParam;
        requestGroupe.open('GET', groupURL);
        requestGroupe.onload = function () {
            let spotifyID = '';

            let data = JSON.parse(requestGroupe.responseText);
            spotifyID = data[0].spotify_ID;

            let spotifyReqURL = 'https://api.t4ils.dev/artistInfo?artistid=' + spotifyID;

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

}

function ColorMap(json){
    var max=0
    
    
    json.forEach(function(currentValue,index) {
        try{
            if(parseInt(currentValue["Nombre_Concert"])>max){
                max=parseInt(currentValue["Nombre_Concert"]);
            }    
        }
        catch{
            
        }
    });
    
    json.forEach(function(currentValue,index) {
        try{
            if( parseInt(currentValue["Nombre_Concert"])< (max*0.25) &&  parseInt(currentValue["Nombre_Concert"])>1){
                document.getElementById(currentValue["ISO"]).style.fill="#f0bb00";

            }
            else if(parseInt(currentValue["Nombre_Concert"])<(max*0.5)){
                document.getElementById(currentValue["ISO"]).style.fill="#F16E00";

            }
            else if(parseInt(currentValue["Nombre_Concert"])<(max*0.75)){
                document.getElementById(currentValue["ISO"]).style.fill="#FB0101";
                console.log("oui");

            }
            else if(parseInt(currentValue["Nombre_Concert"])<(max*0.99)){
                document.getElementById(currentValue["ISO"]).style.fill="#FB0101";

            }
            else{
                document.getElementById(currentValue["ISO"]).style.fill="#940404";
            }
            
        }
              
            
            // document.getElementById(currentValue["ISO"]).style.fill="#00FF00";
            
            // console.log(a);
            // document.getElementById(currentValue["ISO"]).style.fill="rgba(0,255,0,"+a+")";
            
            
        
        catch{
            console.log("Color Map Finish")
        }
    });
    

}

function MapReset(){
    allPath=document.getElementsByClassName("st0");
    
    for (var i = 0; i < allPath.length; i++) {
        document.getElementById(allPath[i].id).style.fill=""
      }
}


function WicheMapColor(groupe){
    var requestURL = 'assets/js/api/getConcert.php?var1='+groupe;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {

        ColorMap(request.response);
    
    };
}
if (document.getElementById("groupe1")!="undefined")
{
    WicheMapColor(1);
    displayStream(1);
}
else if(document.getElementById("groupe2")!="undefined"){
    WicheMapColor(2);
    displayStream(2);
}

document.getElementById("logobeatles").addEventListener('click', function(){
  if (document.getElementById("groupe2")!="undefined")
  {
    document.getElementById("groupe2").id="groupe1";
    MapReset();
    WicheMapColor(1);
    displayStream(1);

  }
  });


document.getElementById("logors").addEventListener('click', function(){
  if (document.getElementById("groupe1")!="undefined")
  {
    document.getElementById("groupe1").id="groupe2";
    MapReset();
    WicheMapColor(2);
    displayStream(2);
  }
  });