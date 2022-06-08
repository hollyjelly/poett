window.onload = function(){
    const btn = document.querySelector('.image');
    const menu = document.querySelector('.group');
    const barbtn = document.querySelector('h3');
    console.log(barbtn);

    const search = document.querySelector('.img');
    const searal = document.querySelector('.search');
    const cartbtn = document.querySelector('.btn.b2');
    // 슬라이드
    const left = document.querySelector('.btn.s1');
    const right = document.querySelector('.btn.s2');
    const artGroup = document.querySelector('.artGroup');
    const article = document.querySelectorAll('.artGroup article');
    const top = document.querySelector('.topbutton');
    let currentIdx = 0;
    let slideCount = article.length;
    // 반응형
    const tab = window.matchMedia("screen and (max-width: 421px)");
    let on = true;
    let h = 0;
    let seon = true;
    
    if(tab.matches){
        h=50.5;
    }else{
        h=20;
    }

    function cartalert(){
        alert('장바구니로 이동하시겠습니까?');
    }

    function searchalert(){
        if(seon){
            searal.style.zIndex ='3'
            searal.style.opacity ='1'
            searal.style.width ='500%'
            seon = false;
        }else{
            searal.style.zIndex ='-1'
            searal.style.opacity ='0'
            searal.style.width ='0%'
            seon = true;
        }

    }

    top.onclick = function(e){
        e.preventDefault();
        window.scrollTo({top:0, behavior:'smooth'});
    }

    function moveSlide(num){
        artGroup.style.left = -num * h + '%';
        currentIdx = num;
    }

    left.onclick = function(){
        if (currentIdx !== -3){
        moveSlide(currentIdx - 1);
        }    
    }
    right.onclick = function(){
        if (currentIdx !== slideCount - 10){
            moveSlide(currentIdx + 1);
        }
    }
    
    function menubar(){
        if(on){
            barbtn.style.opacity = "0"
            menu.style.opacity = "1"
            menu.style.zIndex = "2"
            menu.style.width = "300%"
            on = false;
            
        }else{
            barbtn.style.opacity = "1"
            menu.style.opacity = "0"
            menu.style.zIndex = "-1"
            menu.style.width = "0"
            on = true;
            
        }
    }

    btn.onclick = menubar
    barbtn.onclick = menubar
    search.onclick = searchalert
    cartbtn.onclick = cartalert
}