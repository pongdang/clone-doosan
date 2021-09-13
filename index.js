const quickMenuList = document.querySelectorAll(".quick-menu li");
const changeImageSrc = (event, extension) => {
  const imageName = event.target.dataset["menu"];
  const img = event.target.querySelector("img");
  img.src = `/image/quick-menu/${imageName}.${extension}`;
  console.log(imageName, img);
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

const carousel = document.querySelector(".main-carousel-container");
carousel.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    const slideImg = document.querySelector("#carousel-box1 img");
    slideImg.src = `/image/slide/slide-img-${event.target.dataset.index}.jpeg`;
  }
});

// function () {}
// () => {}
