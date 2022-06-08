window.onload = function(){
    const btn = document.querySelector('.image');
    const menu = document.querySelector('.group');
    const barbtn = document.querySelector('h3');
    const aler = document.querySelectorAll('.alert');
    const heartbtn = document.querySelectorAll('.heart');
    const top = document.querySelector('.topbutton');
    const search = document.querySelector('.img');
    const searal = document.querySelector('.search');
    const cartbtn = document.querySelector('.btn.b2');
    let on = true;
    let seon = true;
    let btnon = [];   
    let heart = [];

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
    top.onclick = function(e){
        e.preventDefault();
        window.scrollTo({top:0, behavior:'smooth'});
    }
    btn.onclick = menubar
    barbtn.onclick = menubar
    search.onclick = searchalert
    cartbtn.onclick = cartalert
        // 하트
        heartbtn.forEach((e,ind)=>{
            btnon[ind] = true;
            heart[ind] = true;
            e.onclick =(o)=>{
                if(btnon[ind]){
                    o.currentTarget.animate({
                        color: '#e3a5bc'
                    },{
                        duration: 100,
                        fill:'forwards'
                    });
                    aler[ind].classList.add('onbtn');
                    btnon[ind] = false;
                    }else{
                        o.currentTarget.animate({
                            color: '#ebe7e4'
                        },{
                            duration: 100,
                            fill:'forwards'
                        });
                        aler[ind].classList.remove('onbtn');
                    btnon[ind] = true;
                }
            }
        });
}