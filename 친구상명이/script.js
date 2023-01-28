$('.main-main>li').hover(function () {
  $(this).find('.main-menu-list').stop().slideDown(500);
} , function(){
  $(this).children('.main-menu-list').stop().slideUp(500);
})


// $(function () {
//   $(".gnb > li").hover(function () {
//     // sub menu가 보이게 
//     $(this).find("ul").stop().slideDown(500);
//     $(this).children("a").addClass("on");
//   }, function () {
//     $(this).find("ul").stop().slideUp(500);
//     $(this).children("a").removeClass("on");
//   })
// });

// 
let btn1 = document.querySelector('.btn1');
btn1.addEventListener('click' ,function(){
  document.querySelector('.slide-list').style.transform = 'translate(0)'
});

let btn2 = document.querySelector('.btn2');
btn2.addEventListener('click' ,function(){
  document.querySelector('.slide-list').style.transform = 'translate(-100vw)'
});

let btn3 = document.querySelector('.btn3');
btn3.addEventListener('click' ,function(){
  document.querySelector('.slide-list').style.transform = 'translate(-200vw)'
});

let btn4 = document.querySelector('.btn4');
btn4.addEventListener('click' ,function(){
  document.querySelector('.slide-list').style.transform = 'translate(-300vw)'
});

let btn5 = document.querySelector('.btn5');
btn5.addEventListener('click' ,function(){
  document.querySelector('.slide-list').style.transform = 'translate(-400vw)'
});
// 
let sid = document.querySelector('.ddi');
sid.addEventListener('click' , function(){
  document.querySelector('aside').style.display = 'block'
})

let closeButton = document.querySelector('.closebutton');
 closeButton.addEventListener('click' , function(){
  document.querySelector('aside').style.display = 'none'
 })
// 




$('.image-list>li>img').on('click' , function(){
   let picpic = $(this).attr('src');
   $('.modal img').attr('src' , picpic)

   $('.modal').fadeIn();
   
  
})

 
// //  
// $(".img-list img").click(function() {
//   let 이미지경로 = $(this).attr("src");
//   let 대체텍스트 = $(this).attr("alt");
//   $("#img-modal-box img").attr({
//     src : 이미지경로, 
//     alt : 대체텍스트
//   });
//   $('#img-modal').fadeIn();
// })

// $("#img-modal-btn").click(function () {
//   $("#img-modal").fadeOut();
// });


// //modal Code
// $("#open-btn").click(function () {
//   $('#modal').fadeIn();
//   $('#modal-box').delay(400).animate({opacity:1});

  
// });

// $("#modal-close").click(function () {
//   $('#modal').fadeOut();
//   $('#modal-box').delay(400).animate({opacity:0});

// })







