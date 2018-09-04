$(document).ready(function(){
    const skills = $('.skill');

    console.log("works");
    const controller = new ScrollMagic.Controller();
    const aboutScene = new ScrollMagic.Scene({
        triggerElement: '#aboutMe',
        triggerHook: 0.7,
        reverse: false
    });
    aboutScene.setClassToggle('#aboutMe', 'fade-in');
    aboutScene.addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        colorStart: '#75c695'
    });
    aboutScene.addTo(controller);

    const skillTimeline = new TimelineMax();
    skillTimeline
        .staggerFrom(skills, 0.8, {y: 150, autoAlpha: 0, ease: Power3.easeOut}, 0.1);


    const skillScene = new ScrollMagic.Scene({
        triggerElement: '#skillContainer',
        triggerHook: 0.4,
        reverse: false
    })
        .setTween(skillTimeline)
        .addIndicators({
            name: 'fade skill',
            colorTrigger: "red",
            colorStart: "#4582cc"
        })
        .addTo(controller);

});

