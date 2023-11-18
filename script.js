// function MouseFollower() {
//     window.addEventListener("mousemove", function(dets){
//         document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
//     })
// }

// MouseFollower();


document.querySelectorAll(".project").forEach(function(project) {
    project.addEventListener("mousemove",function(details){
       
       var dif = details.clientY -project.getBoundingClientRect().top;
       var x = details.clientX - project.getBoundingClientRect().left;
       
        gsap.to(project.querySelector("img"),{
        opacity: 1,
        ease: Power3,
        duration: 0.5,
        top: dif+50,
        left: x+50
       }) 
    })
});
