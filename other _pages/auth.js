loginShow=false;
document.querySelector('.hide').addEventListener('click',function(e) {
    if(window.innerWidth>=590){
        document.querySelector('.login-container').style.animation="hide-login .5s forwards";    
    }else{
        document.querySelector('.login-container').style.animation="hide-login590 .5s forwards";
    }
    loginShow=false;
})
document.querySelector('.loginButt').addEventListener('click',function(e) {
    if(window.innerWidth>=590){
        document.querySelector('.login-container').style.animation="show-login .5s forwards";     
    }else{
        document.querySelector('.hide').style.animation="animHide .5s forwards";
        document.querySelector('.login-container').style.animation="show-login590 .5s forwards";
    }
    loginShow=true;
})
window.addEventListener('resize',function(e) {
    if(window.innerWidth>=590 && loginShow){
        document.querySelector('.login-container').style.animation="hide-login .5s forwards";
        loginShow=false;
    }else{
        if(loginShow){
            document.querySelector('.login-container').style.animation="hide-login590 .5s forwards";
            loginShow=false;
        }
    }
})