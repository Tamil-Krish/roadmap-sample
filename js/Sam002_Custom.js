//<!-- OwlCarousel script start -->
      
var owl = $('.owl-carousel');
owl.owlCarousel({
  dots: false,
  nav:true,
  navText: [$('.am-next'),$('.am-prev')],
  items: 1,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  loop: true
});
$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [10])
})
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay')
})
    
//<!-- OwlCarousel script end -->


