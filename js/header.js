window.onload = function(){
    const btn = document.querySelector('.image');
    const menu = document.querySelector('.group');
    const barbtn = document.querySelector('h3');
    const top = document.querySelector('.topbutton');
    const search = document.querySelector('.img');
    const searal = document.querySelector('.search');
    const cartbtn = document.querySelector('.btn.b2');
    let on = true;
    let seon = true;
    
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