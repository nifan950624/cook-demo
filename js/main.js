var wellcome = document.getElementById('wellcome')
setTimeout(() =>{
    wellcome .classList.add('active')
}
,0000)

let tagmenus = document.querySelectorAll('.navigationBar>ol>li>a')
for(let i = 0; i < tagmenus.length; i++){
    tagmenus[i].onmouseenter = function(x) {
       let atag = x.currentTarget
       atag.classList.add('nihaoya')
    }
    tagmenus[i].onmouseleave = function(x) {
        let atag = x.currentTarget
        atag.classList.remove('nihaoya')
     }
}
var stiky = document.querySelector('.Top-NavBar');
window.onscroll = function(aa) {
    var y = window.scrollY;
    // y > 0 ?stiky.classList.add('active'):stiky.classList.remove('active')
    var tagElement = document.querySelectorAll('[data-x]');
    var minIndex = 0
    for (var i = 1; i < tagElement.length; i++){
   if( Math.abs( tagElement[minIndex].offsetTop - y)  >  Math.abs(tagElement[i].offsetTop - y)){
        minIndex = i
        }
        tagElement[minIndex].classList.add('active')
    }
}