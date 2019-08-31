var scrollAnim = new TimelineMax();
var controller = new ScrollMagic.Controller();
// var controller = new ScrollMagic.Controller({vertical: false});

scrollAnim
.to('.shadow', 1, {top: '100%',})
// .to('.title h1', 0.5, {textShadow: '10px -20px 1px rgba(0,0,0,0.2)' }, '-=1')

var sceneOne = new ScrollMagic.Scene({
  triggerElement: '.scroll-trigger',
  triggerHook: 0,
  duration: '100%',
})
.setTween(scrollAnim)
.setPin('.title')
.addIndicators()

var sceneTwo = new ScrollMagic.Scene({

})

controller.addScene([sceneOne])