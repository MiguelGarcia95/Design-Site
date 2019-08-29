var scrollAnim = new TimelineMax();
var controller = new ScrollMagic.Controller();

scrollAnim
  .set('.view', {y: '-100vh'})
  .to('.first-view', 3, {y: '+= 100vh'})

new ScrollMagic.Scene({
  triggerElement: '.scroll-trigger',
  triggerHook: 0,
  duration: '300vw',
})
.setTween(scrollAnim)
.addTo(controller)