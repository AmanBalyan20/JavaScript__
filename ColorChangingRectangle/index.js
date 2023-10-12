var efect = document.querySelector("#rectangle")
efect.addEventListener("mousemove", function(event){
    //getBoundingClientRect- this function is used to get the axis that where is mouse
    var location = efect.getBoundingClientRect();

    var rectValue  = event.clientX - location.left;

    if(rectValue < location.width/2){
        var redColor = gsap.utils.mapRange(0, location.width/2 , 255,0,rectValue );
        gsap.to(efect , {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        });
    }
    else{
        var blueColor = gsap.utils.mapRange(location.width/2, location.width , 0,255,rectValue );
        gsap.to(efect , {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        });
    }
});

efect.addEventListener("mouseleave", function(){
    gsap.to(efect, {
        backgroundColor: "white"
    })

})

//gsap.util.mapRange() - This is used to map one range to the another range.
//4 parameters - minimum input , max input , min output, max output, Value to map 