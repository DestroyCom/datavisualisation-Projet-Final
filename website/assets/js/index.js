document.getElementById("goToMap").addEventListener('click', function(){
    localStorage.setItem("Section","Map");
    window.location="data.php";
    
    });

document.getElementById("goToStream").addEventListener('click', function(){
    localStorage.setItem("Section","Stream");
    window.location="data.php";
    });