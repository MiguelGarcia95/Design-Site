var firstScrollAnimation = new TimelineMax();
var secondScrollAnimation = new TimelineMax();
var thirdScrollAnimation = new TimelineMax();
var fourthScrollAnimation = new TimelineMax();
var controller = new ScrollMagic.Controller();
// var controller = new ScrollMagic.Controller({vertical: false});

firstScrollAnimation
.to('.one .shadow', 1, {top: '100%',})
.to('.one .title-decal', 1, {boxShadow: '-50px -50px 5px 0px rgba(0,0,0,0.2)'}, '-=1')
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
.setTween(firstScrollAnimation)
.setPin('.title')
.addIndicators();

secondScrollAnimation
.to('.two .decals h1', 1.5, {right: 'unset', left: '-700px', autoAlpha: 0.02})
.to('.two .title', 1, {height: '200px'})
.to('.service', 1, {autoAlpha: 1, scale: 1});

var sceneTwo = new ScrollMagic.Scene({
  triggerElement: '.two',
  triggerHook: 0,
  duration: '250%',
})
.setTween(secondScrollAnimation)
.setPin('.two')
.addIndicators();

thirdScrollAnimation
.to('.left-decal', 1, {height: '500px'})
.to('.three .title', 1.5, {height: '160px'}, '-=1')
.to('.three .title', 0.1, {textShadow: '-10px 10px 5px rgba(0,0,0,0.1)'})
.to('.left-decal', 1, {overflow: 'visible', transform: 'rotate(45deg)'})
.to('.three .subtitle', 1, {scale: 1}, '-=1')
.to('.three .details', 1, {scale: 1}, '-=0.5')
.to('.left-group', 1, {left: '+=20%', top: '+=20%'}, '-=1')
.to('.right-group', 1, {right: '+=20%', bottom: '+=20%'}, '-=1');

var sceneThree = new ScrollMagic.Scene({
  triggerElement: '.three',
  triggerHook: 0,
  duration: '250%',
})
.setTween(thirdScrollAnimation)
.setPin('.three')
.addIndicators();

fourthScrollAnimation
.to('.four .title', 1, {height: '80px'})
.to('.four .details', 1, {scale: 1}, '-=0.5')
.to('.four .contactus', 1, {height: '250px',})
.to('.four input', 1, {scale: 1,})

var sceneFour = new ScrollMagic.Scene({
  triggerElement: '.four',
  triggerHook: 0,
  duration: '250%'
})
.setTween(fourthScrollAnimation)
.setPin('.four')
.addIndicators();

controller.addScene([sceneOne, sceneTwo, sceneThree, sceneFour]);