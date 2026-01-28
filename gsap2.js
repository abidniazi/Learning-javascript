let rect= document.querySelector(".box")
window.addEventListener("mousemove",function(details){

let values=gsap.utils.mapRange(0,window.innerWidth,100+rect.getBoundingClientRect().width/2,window.innerWidth-300+(rect.getBoundingClientRect().width/2),details.clientX);
gsap.to(".box", {
    left:values + "px",
    // top:details.clientY + "px",

    ease:Power3,
}) 

})