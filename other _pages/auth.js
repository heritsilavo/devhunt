document.querySelector('.hide').addEventListener('click',function(e) {
    document.querySelector('.login-container').style.animation="hide-login .5s forwards";    
})
document.querySelector('.loginButt').addEventListener('click',function(e) {
    document.querySelector('.login-container').style.animation="show-login .5s forwards";    
})