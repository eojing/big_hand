
// 상단 인물 스크롤
const bigHand = document.querySelectorAll('.big_hand_name');

bigHand.forEach(function(e){
    e.addEventListener('click',function(e){
        bigHand.forEach(function(e){
            e.classList.remove('big_hand_name_on');
        });
        e.currentTarget.classList.add('big_hand_name_on');
    })
})


// 오른쪽 팝업
const rightPopup = document.querySelector('.right_popup_wrap');
const rightPopupClose = document.querySelector('.right_popup_close');

    rightPopupClose.addEventListener('click',function(){
        rightPopup.classList.remove('right_popup_on');
    });


const opBack = document.querySelector('.op_back');
const blackBg = document.querySelector('.popup_back');


// 툴팁
const tooltipBtn = document.querySelector('.tooltip_img_wrap');
const tooltip = document.querySelector('.tooltip_wrap');

tooltipBtn.addEventListener('click',function(){
    tooltip.classList.toggle('tooltip_wrap_on');
    opBack.classList.add('op_back_on');
});

opBack.addEventListener('click',function(){
    opBack.classList.remove('op_back_on');
    tooltip.classList.remove('tooltip_wrap_on');
});



// 유의사항
const notice = document.querySelector('.notice');
const noticePopupBtn = document.querySelector('.popup_btn');
const noticeCloseBtn = document.querySelector('.notice_close');


noticePopupBtn.addEventListener('click',function(){
    notice.classList.add('notice_on');
});

noticeCloseBtn.addEventListener('click',function(){
    notice.classList.remove('notice_on');
});


// 헤더 영역 메뉴
const menuBtn = document.querySelector('.menu');
const topMenu = document.querySelector('.top_menu_select_wrap');
const menuOption = document.querySelectorAll('.top_menu div');

menuOption.forEach(function(e){
    e.addEventListener('click',function(){
        topMenu.classList.remove('top_menu_select_wrap_on');
        blackBg.classList.remove('popup_back_on');
    });
});

menuBtn.addEventListener('click',function(){
    topMenu.classList.add('top_menu_select_wrap_on');
    blackBg.classList.add('popup_back_on');
    
});

opBack.addEventListener('click',function(){
    
});

blackBg.addEventListener('click',function(){
    if(topMenu.classList.contains('top_menu_select_wrap_on')){
        topMenu.classList.remove('top_menu_select_wrap_on');
        blackBg.classList.remove('popup_back_on');
    }
});


// 구분
const item = document.querySelectorAll('.item');
const item_not = document.querySelector('.not');
const popup = document.querySelectorAll('.popup_wrap');
const select = document.querySelectorAll('.select');
const popup_wrap = document.querySelectorAll('.popup_wrap');
const close_btn = document.querySelectorAll('.close_btn');
const popupOption = document.querySelectorAll('.option');


for(let i = 0; i < item.length; i++){
    item[i].addEventListener('click',function(){
        rightPopup.classList.add('right_popup_on');
    });
}

for(let i = 0; i < popup.length; i++){
    select[i].addEventListener('click',function(){
        blackBg.classList.add('popup_back_on');
        popup[i].classList.add('popup_wrap_on');
    });
}


for(let i = 0; i < popup.length; i++){
    select[i].addEventListener('click',function(){
    blackBg.classList.add('popup_back_on');
    popup[i].classList.add('popup_wrap_on');
    const option = popup_wrap[i].querySelectorAll('.option');
    

    function itemHide(){
        item.forEach(function(e){
            item.forEach(function(e){
                e.classList.remove('item_on');
            })
        })
    }

    option.forEach(function(e){
        e.addEventListener('click',function(){
            option.forEach(function(e){
                e.classList.remove('option_select');
            });
            popup.forEach(function(e){
                e.classList.remove('popup_wrap_on');
            });
            this.classList.add('option_select');
            select[i].querySelector('div').innerHTML = this.innerHTML;
            blackBg.classList.remove('popup_back_on');
            if(popup[1].querySelectorAll('.option')[0].classList.contains('option_select')){
                select[2].querySelector('div').innerHTML = "전체";
                item.forEach(function(e){
                    e.classList.add('item_on');
                });
                select[2].classList.remove('select_on');
            } else{
                select[2].classList.add('select_on');
            }
        });
    });
});
}

close_btn.forEach(function(e){
    e.addEventListener('click',function(){
        popup_wrap.forEach(function(e){
            e.classList.remove('popup_wrap_on');
        });
        blackBg.classList.remove('popup_back_on');
    });
    
});
