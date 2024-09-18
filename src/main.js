const values = [" Web-Developer", " Content Writer", " Django Devloper", " Student", " UI/UX Designer", " Photo-Video Editor"];
const dynamicText = document.querySelector("#dynamicText");
let currentIndex = 0;
function changeTextWithAnimation() {
  dynamicText.style.opacity = 0;
  setTimeout(() => {
    dynamicText.textContent = values[currentIndex];
    dynamicText.style.opacity = 2;
    currentIndex = (currentIndex + 1) % values.length;
  }, 300);
} 
changeTextWithAnimation();
setInterval(changeTextWithAnimation, 3000);

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
});
function loadinganimation(){
    gsap.from(".main svg",{
        y:-100,
        duration:0.5,
        opacity:0,
        stagger:0.5,
        delay:0.4,
    })
    gsap.from(".name",{
        y:-100,
        duration:0.6,
        opacity:0,
        stagger:0.5,
        delay:0.4,
    })
}
loadinganimation()
function hover(){
  gsap.from(".mainn svg",{
    hover
  })
}
hover()

