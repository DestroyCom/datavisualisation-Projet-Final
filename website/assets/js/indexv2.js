let i=1;
var tableau=[];
while(i<=12){
    tableau[i]=document.getElementById("g"+i);
    i=i+1;
}
// console.log(tableau);

tableau.forEach(function(item,index){
    item.addEventListener("click",function(){
        item.style.backgroundColor="red";
    })
});