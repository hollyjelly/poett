window.onload = function(){
    const btn = document.querySelector('.image');
    const menu = document.querySelector('.group');
    const barbtn = document.querySelector('h3');
    const top = document.querySelector('.topbutton');
    const search = document.querySelector('.img');
    const searal = document.querySelector('.search');
    const cartbtn = document.querySelector('.btn.b2');
    const box1= document.querySelector('.btn.c1');
    const box2 = document.querySelector('.btn.c2');
    const carton = document.querySelector('.alert');
    let on = true;
    let seon = true;
    let cart = true;

    function buyevent(){
            if (confirm("구매페이지로 넘어가시겠습니까?")) {
            } else {
                alert('즐거운 쇼핑 되세요 ~ (❁´◡`❁)');
            }
    }

    function cartevent(){
        if(cart){
            box1.style.color = '#475544'
            carton.classList.add('on');
            cart = false;
        }else{
            box1.style.color = '#868e74'
            carton.classList.remove('on');
            cart = true;
        }
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
    
    btn.onclick = menubar;
    barbtn.onclick = menubar;
    search.onclick = searchalert;
    cartbtn.onclick = cartalert;
    box1.onclick = cartevent;
    box2.onclick = buyevent;
}