var rect=document.querySelector(".rect")

function throttle(fn, delay) {
    let isThr = false;

    return function (...args) {
        if (!isThr) {
            fn.apply(this, args);
            isThr = true;

            setTimeout(() => {
                isThr = false;
            }, delay);
        }
    };
}

rect.addEventListener('mousemove', throttle((dets) => {

  var div = document.createElement("div");
  div.classList.add("imagediv")
  div.style.left=dets.clientX+'px';
  div.style.top=dets.clientY+'px';

  var img=document.createElement("img");
  img.setAttribute("src","pier-7582632_1920.jpg")
   div.appendChild(img)
  document.body.appendChild(div)

  gsap.to(img,{
    y:"0",
    ease:Power2,
   duration:.8
  })

       
  gsap.to(img,{
    y:"100%",
    delay:.7,
    ease:Power3
  })

 
setTimeout(()=>{

    div.remove()
},1500)
  

}, 300));






// var rect=document.querySelector(".rect")
// rect.addEventListener("mousemove",function(dets){

// console.log(dets.clientX,dets.clientY)
// })

// console.log(rect)
// Throtting =reduce the number of execution while moving over the div