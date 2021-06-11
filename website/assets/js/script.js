document.getElementById("stream").addEventListener('click', function(){
    document.getElementById("stream").style.backgroundColor="#353131";
    document.getElementById("concert").style.backgroundColor="#8F8F8F";
    document.getElementById("PageStream").classList.remove("hidden");
    document.getElementById("PageMap").classList.add("hidden");
    document.getElementById("Calque_1").classList.add("hidden");
  });

document.getElementById("concert").addEventListener('click', function(){
    document.getElementById("stream").style.backgroundColor="#8F8F8F";
    document.getElementById("concert").style.backgroundColor="#353131";
    document.getElementById("PageStream").classList.add("hidden");
    document.getElementById("PageMap").classList.remove("hidden");
    document.getElementById("Calque_1").classList.remove("hidden");
  });

