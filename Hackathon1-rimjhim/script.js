function videoAnimation() {
  const videoSection = document.querySelector("#page2");
  const video = document.querySelector("#page2 video");
  const videoPlayBtn = document.querySelector("#page2 .video-play-btn");
  console.log(videoPlayBtn.childNodes);

  videoSection.addEventListener("mouseenter", (event) => {
    console.log("mouse entered");
    gsap.to(videoPlayBtn, {
      opacity: .5,
      scale: 1,
      duration: 0.3,
    });
  });
  videoSection.addEventListener("mouseleave", (event) => {
    console.log("mouse entered");
    gsap.to(videoPlayBtn, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
    });
    video.load();
  });
  videoSection.addEventListener("mousemove", (event) => {
    gsap.from(videoPlayBtn, {
      x: event.x - videoSection.getBoundingClientRect().x - 150,
      y: event.y - videoSection.getBoundingClientRect().y - 150,
    });
  });

  videoPlayBtn.addEventListener("click", () => {
    console.log(video.play());
  });
}

function navbarAnimation(){

    const navLogo = document.querySelector("nav .logo")
    const navLinks= document.querySelectorAll(".nav-part1 h4")
    const navtBtns= document.querySelectorAll(".nav-part2 button")
    
    const navTl = gsap.timeline({
        delay:.1
    })
    
    navTl.from(navLogo,{
        y:-80,
        duration:.2
    })
    
    navTl.from(navLinks,{
        y:-80,
        duration:.2,
        stagger:.1
    })
    
    navTl.from(navtBtns,{
        y:-90,
        duration:.2,
        stagger:.1
    })
    
}

const mainH1 = document.querySelectorAll(".main-content h1")
const mainPageBtn =  document.querySelector(".main-content button")
const mainH1Tl = gsap.timeline({
})

mainH1Tl.from(mainH1,{
    y:190,
    delay:.6,
    duration:1,
    stagger:.1
})
gsap.from(mainPageBtn,{
    y:190,
    duration:.5,
    delay:.8
})



navbarAnimation()
videoAnimation()

