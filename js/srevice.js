const tab = document.querySelectorAll('.tab div');
const tab_content = document.querySelectorAll('section');
const accordion = document.querySelectorAll('.accordion');

accordion.forEach(function(i){
    i.addEventListener('click',function(){
        accordion.forEach(function(e){
            e.classList.remove('accordion_on');
        });
    i.classList.add('accordion_on');
    });

});




tab[0].addEventListener('click',function(){
    tab[1].classList.remove('tab_on');
    tab[0].classList.add('tab_on');
    tab_content[1].style.display = 'none';
    tab_content[0].style.display = 'block';
});

tab[1].addEventListener('click',function(){
    tab[0].classList.remove('tab_on');
    tab[1].classList.add('tab_on');
    tab_content[0].style.display = 'none';
    tab_content[1].style.display = 'block';
});