var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove" ,function(dets){
    // crsr.style.left = dets.x -15 + "px"
    // crsr.style.top = dets.y -10 + "px"
    blur.style.left = dets.x -125 + "px"
    blur.style.top = dets.y -125 + "px"
})

var h4all= document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter" ,function(){
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid rgb(4, 206, 252)"
        crsr.style.backgroundColor = "rgb(4, 206, 252)"
    })
})


gsap.to("#nav", {
     backgroundColor: "#000",
     height:"100px",
     duration: 0.5,
     scrollTrigger:{
       trigger:"#nav",
       scroller:"body",
    //    markers:true,
       start: "top -10%",
       end:"top -11%",
       scrub:2
     }
})

gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:5
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:3.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:5
    }
})


gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-50,
    x:-50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.to("#colon2",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 55%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    } 
})

gsap.from("#interior-cards h1",{
    y:50,
    scrollTrigger:{
        trigger:"#interior-cards h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    } 
})

gsap.from("#interior img,#interior2 img",{
    y:90,
    opacity:0,
    duration:3.5,
    scrollTrigger:{
        trigger:"#interior",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:5
    }
})

gsap.from("#interior-in",{
    y:90,
    opacity:0,
    duration:5,
    scrollTrigger:{
        trigger:"#interior",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:5
    }
})

// gsap.from("#interior-cards",{
//     scale:0.8,
//     opacity:0,
//     duration:8,
//     scrollTrigger:{
//         trigger:"#interior-cards",
//         scroller:"body",
//         // markers:true,
//         start:"top 60%",
//         end:"top 55%",
//         scrub:5
//     }
// })

// gsap.from("#interior-cards2",{
//     scale:0.8,
//     opacity:0,
//     duration:3,
//     scrollTrigger:{
//         trigger:"#interior-cards2",
//         scroller:"body",
//         // markers:true,
//         start:"top 60%",
//         end:"top 55%",
//         scrub:3
//     }
// })

gsap.from("#my-pic",{
    scale:0.8,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#my-pic",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:4
    }
})

gsap.from("#my-details h2,h3,blockquote,span",{
    y:50,
    duration:2,
    scrollTrigger:{
        trigger:"#my details h2,h3,blockquote,span",
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 85%",
        scrub:5
    } 
})

gsap.from("#mywork",{
    scale:0.8,
    opacity:0,
    duration:8,
    scrollTrigger:{
        trigger:"#mywork",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:5
    }
})

gsap.from("#mywork-2",{
    scale:0.8,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:"#mywork-2",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})

gsap.from("#mywork h1",{
    y:50,
    scrollTrigger:{
        trigger:"#mywork h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    } 
})