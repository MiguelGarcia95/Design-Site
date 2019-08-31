var scrollAnim = new TimelineMax();
var controller = new ScrollMagic.Controller();
// var controller = new ScrollMagic.Controller({vertical: false});

scrollAnim
.to('.shadow-01', 1, {top: '+=90%', boxShadow: 'inset 0 0 15px 5px rgba(0,0,0,0.1)', transform: 'rotate(90deg)'})
// .to('.block', 1, {backgroundColor: 'green'})
// .set('.slide', {y: '-100vh'})
// .set('.slide.one', {width: 0})
// .to('.slide.one', 2, {y: '-=100vh'})

new ScrollMagic.Scene({
  triggerElement: '.scroll-trigger',
  // offset: 1,
  triggerHook: 0,
  duration: '200%',
})
.setTween(scrollAnim)
.setPin('.one')
.addIndicators()
.addTo(controller)