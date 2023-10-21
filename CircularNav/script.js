gsap.from(".img ", {
    rotation: 360,
    duration: 30,  
    repeat: -1,   
    ease: "none", 
    yoyo: true    
  });
  
gsap.to(".img2", {
    rotation: 360,
    duration: 30,  
    repeat: -1,   
    ease: "none", 
    yoyo: true    
   });

gsap.to("#circle" , {
    rotate: 0 ,
    ease: Expo.easeInOut,
    duration: 3,
    scrollTrigger:".part2"
})   

gsap.to(".scroll", {
    y:30,
    repeat:-1,
    yoyo:true
 })

let active = 3;
let dots = document.querySelectorAll(".mnCircle");
let text = document.querySelectorAll(".secondText");

gsap.to(dots[active-1] , {
    opacity:.7
})

gsap.to(text[active-1] , {
    opacity:1
})

dots.forEach(function(event , index){
    event.addEventListener("click", function(){
        gsap.to("#circle", {
            rotate: (3-(index+1))*10,
            ease: Expo.easeInOut,
            duration:1

        })
        colorOut();
        gsap.to(this , {
            opacity:.7
        })
        gsap.to(text[index] , {
            opacity:1
        })

    })
})

function colorOut(){
    gsap.to(dots,{
        opacity:0.09
    })
    gsap.to(text,{
        opacity:.1
    })
}