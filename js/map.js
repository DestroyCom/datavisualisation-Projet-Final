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


var requestURL = 'api/getConcert.php?var1=2';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {

    ColorMap(request.response);
    
};