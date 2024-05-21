const tab = document.querySelectorAll('.tab div');
const tab_content = document.querySelectorAll('section');
const accordion = document.querySelectorAll('.accordion');
const accordionPerant = document.querySelector('ul');
const wrap = document.querySelector('.wrap');


accordion.forEach(function(e){
    e.addEventListener('click', function(e){
        if(e.currentTarget.classList.contains('accordion_on')){
            e.currentTarget.classList.remove('accordion_on');
        }else{
            accordion.forEach(function(e){
                e.classList.remove('accordion_on');
            });
            e.currentTarget.classList.add('accordion_on');
        }
    });
})








tab[0].addEventListener('click',function(){
    tab[1].classList.remove('tab_on');
    tab[0].classList.add('tab_on');
    tab_content[1].style.display = 'none';
    tab_content[0].style.display = 'block';
    wrap.classList.remove('bg297');
});

tab[1].addEventListener('click',function(){
    tab[0].classList.remove('tab_on');
    tab[1].classList.add('tab_on');
    tab_content[0].style.display = 'none';
    tab_content[1].style.display = 'block';
    wrap.classList.add('bg297');
});






