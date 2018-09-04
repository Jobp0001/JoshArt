$(document).ready(function(){
    console.log("works");
    const controller = new ScrollMagic.Controller();
    const ourScene = new ScrollMagic.Scene({
        triggerElement: '#aboutMe',
        triggerHook: 0.7,
    });
    ourScene.setClassToggle('#aboutMe', 'fade-in');
    ourScene.addIndicators({
        name: 'fade scane',
        colorTrigger: 'black',
        colorStart: '#75c695'
    });
    ourScene.addTo(controller);
});