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

let currentIndex = 0;
function showSlide(index) {
  let slides = document.querySelectorAll(".carousel-item");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
  currentIndex = index + 1;
}
function carousel() {
  showSlide(currentIndex % 3);
}
carousel();
let id = setInterval(carousel, 4000);
// 이미지 버튼을 누르면 해당하는 이미지가 나타남
const carouselBtn = document.querySelector(".main-carousel-container");
carouselBtn.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    const index = Number(event.target.dataset.index) - 1;
    showSlide(index);
    clearInterval(id);
    id = setInterval(carousel, 4000);
  }
});
