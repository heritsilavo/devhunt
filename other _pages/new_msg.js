document.querySelector('.pseudo').addEventListener('mouseenter',function(event) {
    document.querySelector('.pseudo ul').style.transform="scaleY(1)";    
})
document.querySelector('.pseudo').addEventListener('mouseleave',function(event) {
    document.querySelector('.pseudo ul').style.transform="scaleY(0)";    
})
var titre_msg="";
document.querySelectorAll('.filtre-i').forEach(element => {
    element.addEventListener('click',function() {
        document.querySelectorAll('.activeFilter').forEach(ele => {
            ele.classList.remove('activeFilter');
        });
        element.classList.add("activeFilter");
    })
});
//-------------   titre_msg : 
document.getElementById('next1').addEventListener('click',function(e) {
    e.preventDefault('');
    titre_msg=document.getElementById('titre').value;
    if(document.getElementById('titre').value!=""){
        document.querySelector('.p1').style.animation="toLeft .2s forwards";
        document.querySelector('.p2').style.animation="fromRight .2s forwards";    
        console.log(titre_msg);
    }
})


var contenu_msg=[];
document.querySelector('.image').addEventListener('click',function(e) {
    var contenu=`
        <label for="file_in" id="img_lab">cliquer içi pour ajouter l'image</label>
        <input type="file" name="file_in" id="file_in">
    `
    var child =document.createElement('div');
    child.setAttribute("class","image_in");
    child.innerHTML=contenu.trim();
    document.querySelector('.contenu').appendChild(child);
    contenu_msg.push({
        type:'img',
        contenu:'',
        ref:child.childNodes[2]
    })
    console.log(contenu_msg);
})



document.querySelector('.texte').addEventListener('click',function(e) {
    var contenu=`<textarea name="textarea" id="text_cont"></textarea>`
    var child =document.createElement('div');
    child.setAttribute("class","texte_in");
    child.innerHTML=contenu.trim();
    document.querySelector('.contenu').appendChild(child);
    contenu_msg.push({
        type:'txt',
        contenu:'',
        ref:child.firstChild
    })
    console.log(contenu_msg);
})


document.querySelector('.reset_msg').addEventListener('click',function(e) {
    document.querySelector('.contenu').innerHTML="";
    contenu_msg=[];
})

document.getElementById('retour2').addEventListener('click',function(e) {
    document.querySelector('.p1').style.animation="fromLeft .2s forwards";
    document.querySelector('.p2').style.animation="toRight .2s forwards";    
})

document.getElementById('suivant2').addEventListener('click',function(event) {
    event.preventDefault();
    contenu_msg.forEach((element,i) => {
        if(element.type=='txt'){
            element.contenu=element.ref.value;
        }else{
            element.contenu=element.ref.value
        } 
    });
    document.querySelector('.p2').style.animation="toLeft .2s forwards";
        document.querySelector('.p3').style.animation="fromRight .2s forwards";   
})

///--------content_msg          : values

var tagList=["HTML","JS","PHP","JS","C","C++"]
var msg_tags=[]; 

tagList.forEach(element => {
    const li = document.createElement('li');
    li.innerHTML=element;
    document.getElementById('ul').appendChild(li);
});

document.querySelector('.ok_tag').addEventListener('click',function(e) {
    e.preventDefault();
    if(document.getElementById('tag_in').value!=""){
        const li = document.createElement('li');
        li.innerHTML=document.getElementById('tag_in').value;
        document.getElementById('ul').appendChild(li);
        li.classList.add('selected');
        tagList.unshift(li.value);
        document.getElementById('tag_in').value="";
    }
})

document.querySelectorAll('.tagList_ul li').forEach(element => {
    element.addEventListener('click',function(e){
        if(element.classList.contains('selected')){
            element.classList.remove('selected');
        }else {
            element.classList.add('selected');
        }
    })
});

document.querySelector('.create-tag .input-box label').addEventListener('click',function(params) {
    document.getElementById('tag_in').focus();
})

document.getElementById('retour3').addEventListener('click',function(params) {
    document.querySelector('.p2').style.animation="fromLeft .2s forwards";
    document.querySelector('.p3').style.animation="toRight .2s forwards";    
})

document.getElementById('suivant3').addEventListener('click',function() {
    document.querySelectorAll('.tagList_ul li').forEach(element => {
        if(element.classList.contains('selected')){
            msg_tags.push(element.innerHTML);
            console.log(msg_tags);
        }
    });
})