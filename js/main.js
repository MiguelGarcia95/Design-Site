var scrollAnim = new TimelineMax();
var controller = new ScrollMagic.Controller();
// var controller = new ScrollMagic.Controller({vertical: false});

scrollAnim
.to('.shadow', 1, {top: '100%',})
.to('.title-decal', 1, {boxShadow: '-50px -50px 5px 0px rgba(0,0,0,0.2)'}, '-=1')
.to('.tr', 0.5, {transform: 'rotate(0deg)', width: '100%'})
.to('.tl', 0.5, {transform: 'rotate(90deg)', width: '43px', top: '3px'}, '-=0.5')
.to('.bl', 0.5, {transform: 'rotate(0deg)', width: '100%'}, '-=0.5')
.to('.br', 0.5, {transform: 'rotate(90deg)', width: '43px', bottom: '3px'}, '-=0.5')
.to('.logo p', 0.5, {color: '#232323'}, '-=0.5')
.to('.logo div', 0.5, {backgroundColor: '#232323'}, '-=0.5')

var sceneOne = new ScrollMagic.Scene({
  triggerElement: '.one',
  triggerHook: 0,
  duration: '100%',
})
.setTween(scrollAnim)
.setPin('.title')
.addIndicators()

var sceneTwo = new ScrollMagic.Scene({
  triggerElement: '.two',
  triggerHook: 0,
  duration: '100%',
})
// .setTween(scrollAnim)
.setPin('.two')
.addIndicators()

controller.addScene([sceneOne, sceneTwo])