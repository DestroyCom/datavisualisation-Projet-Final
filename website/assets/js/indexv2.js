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
            item.style.backgroundColor="red";
            tabSelect.push(item);
            

        }
        else if(tabSelect.length=2){
            tabSelect[0].style.backgroundColor="#000000";
            tabSelect[0]=tabSelect[1];
            tabSelect[1]=item;
            item.style.backgroundColor="red";
            
            
        }
    })
});

document.getElementById("go").addEventListener("click",function(){
    window.location="data.php?groupe1="+tabSelect[0].id.replace("g","")+"&groupe2="+tabSelect[1].id.replace("g","");
})