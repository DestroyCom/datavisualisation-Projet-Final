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

            switch (parseInt(currentValue["Nombre_Concert"])) {
                case max:
                    
                    document.getElementById(currentValue["ISO"]).style.fill="#921616";
                    console.log("NON")
                    break;
                case 'Mangoes':
                    console.log('Oranges are $0.59 a pound.');
                    break;

                case 'Papayas':
                    console.log('Mangoes and papayas are $2.79 a pound.');
                  // expected output: "Mangoes and papayas are $2.79 a pound."
                    break;
                default:
                    console.log(max);
                    document.getElementById(currentValue["ISO"]).style.fill="#00FF00";
                    
                    break;
            }
              
            
            // document.getElementById(currentValue["ISO"]).style.fill="#00FF00";
            
            // console.log(a);
            // document.getElementById(currentValue["ISO"]).style.fill="rgba(0,255,0,"+a+")";
            
            
        }
        catch{
            console.log("Color Map Finish")
        }
    });
    

}


var requestURL = 'getConcert.php?var1=2';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {

    ColorMap(request.response);
    
};