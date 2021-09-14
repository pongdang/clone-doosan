// 퀵메뉴
const quickMenuList = document.querySelectorAll(".quick-menu li");
const changeImageSrc = (event, extension) => {
  const imageName = event.target.dataset["menu"];
  const img = event.target.querySelector("img");
  img.src = `/image/quick-menu/${imageName}.${extension}`;
  // console.log(imageName, img);
};

for (let i = 0; i < quickMenuList.length; i++) {
  const quickMenu = quickMenuList[i];
  quickMenu.addEventListener("mouseenter", (event) =>
    changeImageSrc(event, "gif")
  );
  quickMenu.addEventListener("mouseleave", (event) =>
    changeImageSrc(event, "png")
  );
}

// function () {}
// () => {}

// 이게,, 자동 슬라이드?!
const ACTIVE_CLASS = "active";
const firstCarousel = document.querySelector(".carousel-item:first-child");
function carousel() {
  const currentCarousel = document.querySelector(`.${ACTIVE_CLASS}`);
  if (currentCarousel) {
    currentCarousel.classList.remove(ACTIVE_CLASS);
    const nextCarousel = currentCarousel.nextElementSibling;
    if (nextCarousel) {
      nextCarousel.classList.add(ACTIVE_CLASS);
    } else {
      firstCarousel.classList.add(ACTIVE_CLASS);
    }
  } else {
    firstCarousel.classList.add(ACTIVE_CLASS);
  }
}
carousel();
setInterval(carousel, 3000);

// 이미지 버튼을 누르면 해당하는 이미지가 나타남
const carouselBtn = document.querySelector(".main-carousel-container");
carouselBtn.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    const slideImg = document.querySelector("#carousel-box1 img");
    slideImg.src = `/image/slide/slide-img-${event.target.dataset.index}.jpeg`;
    // console.log(slideImg);
  }
});
