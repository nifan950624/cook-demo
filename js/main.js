// var wellcome = document.getElementById('wellcome')
// setTimeout(() =>{
//     wellcome .classList.add('active')
// }
// ,0000)

let tagmenus = document.querySelectorAll('.navigationBar>ol>li>a')
for (let i = 0; i < tagmenus.length; i++) {
    tagmenus[i].onmouseenter = function (x) {
        let atag = x.currentTarget
        atag.classList.add('nihaoya')
    }
    tagmenus[i].onmouseleave = function (x) {
        let atag = x.currentTarget
        atag.classList.remove('nihaoya')
    }
}
var stiky = document.querySelector('.Top-NavBar');
window.onscroll = function (aa) {
    var y = window.scrollY;
    // y > 0 ?stiky.classList.add('active'):stiky.classList.remove('active')
    var tagElement = document.querySelectorAll('[data-x]');
    var minIndex = 0
    for (var i = 1; i < tagElement.length; i++) {
        if (Math.abs(tagElement[minIndex].offsetTop - y) > Math.abs(tagElement[i].offsetTop - y)) {
            minIndex = i
        }
        tagElement[minIndex].classList.add('active')
    }
}


var mySwiper = new Swiper('.swiper-container', {

    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 3,
    centeredSlides: true,
    speed:3000,
    autoplay : {
      delay:1000
    },
}) 