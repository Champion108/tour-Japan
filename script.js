

let tl = gsap.timeline({
    repeat:-1,
});

const element = document.querySelector('#main');
const colors = ['rgb(227, 183, 238)', 'rgb(213, 213, 127)', 'rgb(210, 241, 225)'];
let colorIndex = 0;

function changeColor() {
  gsap.to(element , {
    backgroundColor: colors[colorIndex],
    duration: 4,
    ease: Expo.easeInOut,
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
    duration:4,
    stagger:4,
}, 'miher')

tl
.to(".txt h1",{
    ease: Expo.easeInOut,
    top:0,
    duration:4,
    stagger:4,
}, 'miher')

.to(".txt h1",{
    delay:4,
    ease: Expo.easeInOut,
    top:"-100%" ,
    stagger:4
}, 'miher')

