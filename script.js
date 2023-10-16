// window.addEventListener("mousemove" , function(event){
//     gsap.to('#rectangle' ,{
//         left:event.clientX + 'px',
//         top: event.clientY + 'px',
//         ease : Power3
//     } );
// });

window.addEventListener("mousemove" , function(event){
    let  rect = document.querySelector("#rectangle");
    let valueX  = gsap.utils.mapRange(0, window.innerWidth, 100 + rect.getBoundingClientRect().width/2 , window.innerWidth-(100 + rect.getBoundingClientRect().width/2), event.clientX);
    let valueY  = gsap.utils.mapRange(0, window.innerHeight, 100 + rect.getBoundingClientRect().width/2 , window.innerHeight-(100 + rect.getBoundingClientRect().width/2), event.clientY);
    gsap.to('#rectangle' ,{
        left:valueX ,
        top: valueY,
        ease : Power3
    } );
});