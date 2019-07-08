$("#button,nav").click(function() {
    $(".hamburger").toggleClass("focus");
    $(".content").toggleClass("show");
    $('.section__person').toggleClass('del');
    $('body').toggleClass('scroll');
  });
$('.btn').click(function() {
  $('body').animate({'scrollTop': 0}, 2000);
  $('html').animate({'scrollTop': 0}, 2000);
})

$('.button-to-scroll-down').click(function() {
  $('body').animate({'scrollBottom': 0}, 2000);
  $('html').animate({'scrollBottom': 0}, 2000);
})


let ul = document.querySelector('#ul');

ul.addEventListener('click', function(event) {
  let a = document.querySelectorAll('.header-link');
  let need = event.path[0].classList;

  if(need == 'header-link'){
    ul.style.display = 'none';
  }
})




// var arr = [1, 2, 3, 4, 5, 6];

// function sum(a) {
//   var sum = 0;
//   for( var i = 0; i < a.length; i++ ) {
//       sum += a[i];
//   }
//   return console.log(sum);
// }
// sum();



var arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function(item, i) {
  var sum = 0;
  sum += item + item + i;
  console.log(sum);
});