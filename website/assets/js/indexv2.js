let i=1;
var tableau=[];
var tabSelect=[]
while(i<=12){
    tableau[i]=document.getElementById("g"+i);
    i=i+1;
}
// console.log(tableau);

tableau.forEach(function(item,index){
    item.addEventListener("click",function(){
        
        if (tabSelect.length<2){

            if(tabSelect.includes(item)){
                return;
            }
            ImageVsVerification(item,tabSelect)
            item.style.backgroundColor="red";
            tabSelect.push(item);

            
            

        }
        else if(tabSelect.length==2){
            if(tabSelect.includes(item)){
                return;
            }
            tabSelect[0].style.backgroundColor="#000000";
            tabSelect[0]=tabSelect[1];
            tabSelect[1]=item;
            item.style.backgroundColor="red";
            ImageVsVerification(item,tabSelect)
            
            
        }
    })
});

document.getElementById("go").addEventListener("click",function(){
    window.location="data.php?groupe1="+tabSelect[0].id.replace("g","")+"&groupe2="+tabSelect[1].id.replace("g","");
})

function ImageVsVerification(Unitem,Untableau){
    
    
    if (Untableau.length==0){
        document.getElementById("groupe1").setAttribute("src","assets/img/"+Unitem.id.replace("g","")+"-groupe.png");
        SetGroupeName(Unitem.id.replace("g",""),"name1");
    }
    if (Untableau.length==1){

        document.getElementById("groupe2").setAttribute("src","assets/img/"+Unitem.id.replace("g","")+"-groupe.png");
        SetGroupeName(Unitem.id.replace("g",""),"name2");
        document.getElementById("go").style.opacity="1";
        document.getElementById("button").classList.remove("hidden");
        document.getElementById("vs").style.backgroundImage=' url("assets/img/fire.gif")';

        
    }
    else if(Untableau.length==2){
        console.log(Untableau)
        document.getElementById("groupe1").setAttribute("src","assets/img/"+Untableau[0].id.replace("g","")+"-groupe.png");
        SetGroupeName(Untableau[0].id.replace("g",""),"name1");

        document.getElementById("groupe2").setAttribute("src","assets/img/"+Unitem.id.replace("g","")+"-groupe.png");
        SetGroupeName(Unitem.id.replace("g",""),"name2");
    }
    
}


function SetGroupeName(id,groupe){
    var requestURL = 'assets/js/api/getGroupeName.php?var1='+id;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        
        document.getElementById(groupe).innerHTML = request.response[0]["Nom_Groupe"];
    
    };
}

document.querySelector('.creditEtSources').addEventListener('click', function(e){
    window.location = 'credits.html';
})