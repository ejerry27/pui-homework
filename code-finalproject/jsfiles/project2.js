
// animation for the cars that will slide in 
document.addEventListener('DOMContentLoaded',()=>{
    anime({
        targets:'.card',
        translateY:[50,0],
        opacity:[0,1],
        // delaying the time
        delay:anime.stagger(500),
        // type of animation
        easing:'easeOutQuad',
        // how long it will be there
        duration:800,
    });
});