

let tl = gsap.timeline({
    repeat:-1,
});

const element = document.querySelector('#main');
const colors = ['rgb(227, 183, 238)', 'rgb(213, 213, 127)', 'rgb(210, 241, 225)'];
let colorIndex = 0;

function changeColor() {
  gsap.to(element, {
    delay:1,
    backgroundColor: colors[colorIndex],
    duration: 2,
    onComplete: () => {
      colorIndex = (colorIndex + 1) % 3;
      changeColor(); 
    }
  });
}

changeColor(); 


tl.to(".imgcont",{
    width:"100%",
    ease: Expo.easeInOut,
    duration:3,
    stagger:3,
}, 'miher')

.to(".txt h1",{
    ease: Expo.easeInOut,
    top:0,
    duration:3,
    stagger:3,
}, 'miher')

.to(".txt h1",{
    delay:3,
    ease: Expo.easeInOut,
    top:"-100%" ,
    stagger:3
}, 'miher')
