
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();


ScrollTrigger.matchMedia({

    "(min-width:800px)": function(){
        
        gsap.timeline({
            scrollTrigger: {
                trigger: ".resume-section",
                start: "200 center",
                end: "bottom top",
                // markers: true
            }
        })
        .from(".resume-title-div", {opacity:0})
        .from(".resume-text", {opacity:0, y:100})
        .from(".resume-img-div", {opacity:0})
        .from(".resume-btn", {opacity:0, y:30})
        
    },

    "(max-width:799px)": function(){
        gsap.timeline({
            scrollTrigger: {
                trigger: ".resume-section",
                start: "200 center",
                end: "bottom top",
                // markers: true
            }
        })
        .from(".resume-title-div", {opacity:0})
        .from(".resume-img-div", {opacity:0, y:50})
        .from(".resume-text", {opacity:0, y:100, delay:0.5})
        .from(".resume-btn", {opacity:0, y:30, delay:1})
    },


    "all": function(){
        tl.to(".animate-div-in", {duration: 2, opacity:0, yPercent: 100, display: "none", stagger: 0.3});

        gsap.timeline({
            scrollTrigger: {
                trigger: ".about-section",
                start: "200 center",
                end: "bottom top",
                // markers: true
            }
        })
        .from(".about-section", {opacity:0, duration:0.5})
        .from(".about-title", {y:100, opacity:0, duration: 1})
        .from(".about-text", {y:100, opacity:0, delay:1, duration: 1});
        
        
        gsap.timeline({
            scrollTrigger: {
                trigger: ".service-section",
                start: "200 center",
                end: "bottom top",
                // markers: true
            }
        })
        .from(".service-title", {opacity: 0, y:30})
        .from(".service-div", {opacity: 0, y:50, stagger:1});

        gsap.timeline({
            scrollTrigger: {
                trigger: ".project-section",
                start: "200 center",
                end: "bottom top",
                // markers: true
            }
        })
        .from(".project-title-div", {opacity:0, x:-50})
        .from(".pro-span", {opacity:0, x:200})
        .from(".project-div", {opacity:0, y:100, delay:0.5, stagger:1});


        gsap.timeline({
            scrollTrigger: {
                trigger: ".workflow-section",
                start: "200 center",
                end: "bottom top",
                // markers: true
            }
        })
        .from(".workflow-title", {opacity:0, y:100})
        .from(".workflow-text", {opacity:0, y:100, delay:1.5});
    }

})