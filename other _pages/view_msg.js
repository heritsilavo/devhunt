
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

//------------------------
/*var contenu_msg=[];
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
})*/


/*
document.querySelector('.texte').addEventListener('click',function(e) {
    var contenu=`<textarea name="textarea" id="text_cont" cols="100" rows="5"></textarea>`
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
*/


document.querySelector('.reset_msg').addEventListener('click',function(e) {
    document.querySelector('.contenu').innerHTML="";
    contenu_msg=[];
})