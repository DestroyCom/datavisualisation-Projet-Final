document.querySelector('.buttonMove').addEventListener('click', function(e){
    document.querySelector('#contenu1').classList.toggle('hidden');
    document.querySelector('#contenu2').classList.toggle('hidden');
})
document.querySelector('.buttonMove2').addEventListener('click', function(e){
    document.querySelector('#contenu1').classList.toggle('hidden');
    document.querySelector('#contenu2').classList.toggle('hidden');
})

document.querySelector('.fleche').addEventListener('click', function(e){
    window.location = 'index.html';
})
