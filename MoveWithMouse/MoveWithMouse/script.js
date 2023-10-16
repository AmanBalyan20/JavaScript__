window.addEventListener("mousemove" , function(event){
    gsap.to('#rectangle' ,{
        left:event.clientX + 'px',
        top: event.clientY + 'px',
        ease : Power3
    } );
});