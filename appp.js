
/* surprise element*/

let music = new Audio("Main Hoon Jiyan.mp3")

let jiyan= document.getElementById("ziyan")
jiyan.addEventListener("mouseenter",(e) => {
   console.log("playing music!!~")
   music.play()
})

jiyan.addEventListener("mouseleave",(e) => {
   console.log("playing music!!~")
   music.pause()
})


/*gsap animation*/

gsap.registerPlugin(ScrollTrigger)

 gsap.to(".line2",{
   ease: Expo.easeInOut,
   top:0,
   duration:2,
   stagger:2,
})

gsap.to(".line1",{
   ease: Expo.easeInOut,
   left:0,
   duration:2,
   stagger:2,
})

gsap.to(".cont h1",{
   ease: Expo.easeInOut,
   top:0,
   duration:2,
   stagger:2,
})

gsap.to(".cont1 h3",{
   ease: Expo.easeInOut,
   bottom:0,
   duration:2,
   stagger:2,
})
 
let slider=document.querySelector('.land .slider .slide');

gsap.to(".land .slider .slide",{
   ease: Expo.easeInOut,
   left:0,
   delay:1,
   duration:2,
   stagger:2,
})

let right = document.getElementsByClassName("button")[0];

right.addEventListener("click",()=>{
   let chk = slider.style.left;
   let t= chk.substring(0,chk.length-2)
   var m= parseInt(t)
   console.log(m)
   if(m==-1600)
      return;
   slider.style.left = `${m-400}px`;
})

let left = document.getElementsByClassName("button1")[0];

left.addEventListener("click",()=>{
   let chk = slider.style.left;
   let t= chk.substring(0,chk.length-2)
   var m= parseInt(t)
   if(m==0){
      return;
   }
   slider.style.left = `${m+400}px`;
})

gsap.to(".head h1",{
   duration:1.5,
   left:0,
   ease: Expo.easeInOut,
   scrollTrigger:".head",
})

gsap.to(".box .ver",{
   duration:1,
   top:0,
   ease: Expo.easeInOut,
   scrollTrigger:".box",
})

gsap.to(".box .txt p",{
   delay:1,
   duration:1.5,
   left:0,
   ease: Expo.easeInOut,
   scrollTrigger:".box",
})

gsap.to(".con .chat1 .txt p",{
   delay:0,
   duration:2,
   left:0,
   ease: Expo.easeInOut,
   scrollTrigger:".con",
})

gsap.to(".con2 .chat1 .txt p",{
   delay:0,
   duration:2,
   left:0,
   ease: Expo.easeInOut,
   scrollTrigger:".con2",
})

/*
gsap.to("#snow",{
   backgroundColor:"#fff",
   duration:4,
   ease: Expo.easeOutIn,
   scrollTrigger:".box",
})

gsap.to(".head",{
   backgroundColor:"#fff",
   duration:4,
   ease: Expo.easeOutIn,
   scrollTrigger:".box",
})

gsap.to(".hor",{
   delay:2,
   rotate:-32,
   stagger:2,
})

gsap.to(".ver",{
   ease: Expo.easeInOut,
   position:sticky,
   duration:2,
   stagger:2,
})
=======

/* surprise element*/
