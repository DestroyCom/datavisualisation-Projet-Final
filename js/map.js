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




function WicheMapColor(groupe){
    var requestURL = 'api/getConcert.php?var1='+groupe;
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
}
else if(document.getElementById("groupe2")!="undefined"){
    WicheMapColor(2);
}

document.getElementById("logobeatles").addEventListener('click', function(){
  if (document.getElementById("groupe2")!="undefined")
  {
    document.getElementById("groupe2").id="groupe1";
    WicheMapColor(1);
  }
  });


document.getElementById("logors").addEventListener('click', function(){
  if (document.getElementById("groupe1")!="undefined")
  {
    document.getElementById("groupe1").id="groupe2";
    WicheMapColor(2);
  }
  });