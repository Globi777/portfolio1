
const $doc = $(document);
const $header = $('header');
const $main = $('main');


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

$doc.ready(function() {

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
