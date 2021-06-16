function orga() {
     var values = window.location.search;
     var urlvalues = new URLSearchParams(values);
     var group1 = urlvalues.get("groupe1");
     var group2 = urlvalues.get("groupe2");
     var query = group1 + ' ' + group2;
     switch (query) {
          case "1 2":
          case "2 1":
               return 1;
               break;
          case "1 3":
          case "3 1":
               return 2;
               break;
          case "1 4":
          case "4 1":
               return 3;
               break;
          case "1 5":
          case "5 1":
               return 4;
               break;
          case "1 6":
          case "6 1":
               return 5;
               break;
          case "1 7":
          case "7 1":
               return 6;
               break;
          case "1 8":
          case "8 1":
               return 7;
               break;
          case "1 9":
          case "9 1":
               return 8;
               break;
          case "1 10":
          case "10 1":
               return 9;
               break;
          case "1 11":
          case "11 1":
               return 10;
               break;
          case "1 12":
          case "12 1":
               return 11;
               break;
          case "2 3":
          case "3 2":
               return 12;
               break;
          case "2 4":
          case "4 2":
               return 13;
               break;
          case "2 5":
          case "5 2":
               return 14;
               break;
          case "2 6":
          case "6 2":
               return 15;
               break;
          case "2 7":
          case "7 2":
               return 16;
               break;
          case "2 8":
          case "8 2":
               return 17;
               break;
          case "2 9":
          case "9 2":
               return 18;
               break;
          case "2 10":
          case "10 2":
               return 19;
               break;
          case "2 11":
          case "11 2":
               return 20;
               break;
          case "2 12":
          case "12 2":
               return 21;
               break;
          case "3 4":
          case "4 3":
               return 22;
               break;
          case "3 5":
          case "5 3":
               return 23;
               break;
          case "3 6":
          case "6 3":
               return 24;
               break;
          case "3 7":
          case "7 3":
               return 25;
               break;
          case "3 8":
          case "8 3":
               return 26;
               break;
          case "3 9":
          case "9 3":
               return 27;
               break;
          case "3 10":
          case "10 3":
               return 28;
               break;
          case "3 11":
          case "11 3":
               return 29;
               break;
          case "3 12":
          case "12 3":
               return 30;
               break;
          case "4 5":
          case "5 4":
               return 31;
               break;
          case "4 6":
          case "6 4":
               return 32;
               break;
          case "4 7":
          case "7 4":
               return 33;
               break;
          case "4 8":
          case "8 4":
               return 34;
               break;
          case "4 9":
          case "9 4":
               return 35;
               break;
          case "4 10":
          case "10 4":
               return 36;
               break;
          case "4 11":
          case "11 4":
               return 37;
               break;
          case "4 12":
          case "12 4":
               return 38;
               break;
          case "5 6":
          case "6 5":
               return 39;
               break;
          case "5 7":
          case "7 5":
               return 40;
               break;
          case "5 8":
          case "8 5":
               return 41;
               break;
          case "5 9":
          case "9 5":
               return 42;
               break;
          case "5 10":
          case "10 5":
               return 43;
               break;
          case "5 11":
          case "11 5":
               return 44;
               break;
          case "5 12":
          case "12 5":
               return 45;
               break;
          case "6 7":
          case "7 6":
               return 46;
               break;
          case "6 8":
          case "8 6":
               return 47;
               break;
          case "6 9":
          case "9 6":
               return 48;
               break;
          case "6 10":
          case "10 6":
               return 49;
               break;
          case "6 11":
          case "11 6":
               return 50;
               break;
          case "6 12":
          case "12 6":
               return 51;
               break;
          case "7 8":
          case "8 7":
               return 52;
               break;
          case "7 9":
          case "9 7":
               return 53;
               break;
          case "7 10":
          case "10 7":
               return 54;
               break;
          case "7 11":
          case "11 7":
               return 55;
               break;
          case "7 12":
          case "12 7":
               return 56;
               break;
          case "8 9":
          case "9 8":
               return 57;
               break;
          case "8 10":
          case "10 8":
               return 58;
               break;
          case "8 11":
          case "11 8":
               return 59;
               break;
          case "8 12":
          case "12 8":
               return 60;
               break;
          case "9 10":
          case "10 9":
               return 61;
               break;
          case "9 11":
          case "11 9":
               return 62;
               break;
          case "9 12":
          case "12 9":
               return 63;
               break;
          case "10 11":
          case "11 10":
               return 64;
               break;
          case "10 12":
          case "12 10":
               return 65;
               break;
          case "11 12":
          case "12 11":
               return 66;
               break;
          default:
               return 0

     }


}

function Vote(grpValue) {
     const idValue = orga();
     const data = new FormData();
     data.append('idValue', idValue);
     data.append('grpValue', grpValue);
     fetch('versus.php', {
               method: 'POST',
               body: data,
          })
          .then(document.getElementById("veil").style.display = "block");

}

document.querySelector('.creditEtSources').addEventListener('click', function (e) {
     window.location = 'credits.html';
})