var scrollAnim = new TimelineMax();
var controller = new ScrollMagic.Controller();
// var controller = new ScrollMagic.Controller({vertical: false});

scrollAnim
// .set('.slide', {y: '-100vh'})
// .set('.slide.one', {width: 0})
.to('.slide.one', 2, {y: '-=100vh'})

new ScrollMagic.Scene({
  triggerElement: '.scroll-trigger',
  // offset: 1,
  triggerHook: 0,
  duration: '100%',
})
.setTween(scrollAnim)
.setPin('.scroll-trigger')
.addIndicators()
.addTo(controller)