
const $doc = $(document);
const $header = $('header');
const $main = $('main');
const $about = $('.aboutMe');


$doc.on("scroll",function(){
   const scrollPos = $doc.scrollTop();
   const sectionOffset = $main.offset().top;
   const headerHeight = $header.outerHeight();

if (scrollPos < sectionOffset) {
  $header.css(
    'opacity', 1 - scrollPos/headerHeight
  );
}
});

$('.burger').on('click', function () {

   $(this).toggleClass('active');
   $('ul').toggleClass('active');
 });

$about.ready(function() {

 	$('a[href^="#"]').on('click', function(event) {

 		var target = $( $(this).attr('href') );

 		if( target.length ) {
 			event.preventDefault();
 			$('html, body').animate({
 				scrollTop: target.offset().top
 			}, 1000);
 		}
 	});

 });
 if (window.matchMedia("(max-width: 400px)").matches)
     {
 $doc.ready(function() {
  // var state = false;
 $(".divEmp > p").hide();
 $(".divFav > p").hide();

$('.emp').click(function () {
      $(".divEmp > p").slideToggle("slow");
      // state = true;
    });

$(".fav").click(function () {
      $(".divFav > p").slideToggle("slow");
    });

 });
}
 if (window.matchMedia("(max-width: 560px)").matches){
    $('#avatar').remove();
 } else {
   $('header > ing').attr('#avatar');
 }
