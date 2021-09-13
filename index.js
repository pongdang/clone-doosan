let quickMenuBtn1 = document.querySelector("#quick-subsidiary img");
let quickMenuBtn2 = document.querySelector("#quick-story img");
let quickMenuBtn3 = document.querySelector("#quick-news img");
let quickMenuBtn4 = document.querySelector("#quick-location img");

quickMenuBtn1.addEventListener("mouseover", startHover1);
quickMenuBtn1.addEventListener("mouseout", endHover1);
quickMenuBtn2.addEventListener("mouseover", startHover2);
quickMenuBtn2.addEventListener("mouseout", endHover2);
quickMenuBtn3.addEventListener("mouseover", startHover3);
quickMenuBtn3.addEventListener("mouseout", endHover3);
quickMenuBtn4.addEventListener("mouseover", startHover4);
quickMenuBtn4.addEventListener("mouseout", endHover4);

function startHover1() {
  quickMenuBtn1.src = "/image/quick-menu/icon-subsidiary.gif";
}
function startHover2() {
  quickMenuBtn2.src = "/image/quick-menu/icon-story.gif";
}
function startHover3() {
  quickMenuBtn3.src = "/image/quick-menu/icon-paper.gif";
}
function startHover4() {
  quickMenuBtn4.src = "/image/quick-menu/icon-map.gif";
}
function endHover1() {
  quickMenuBtn1.src = "/image/quick-menu/subsidiary-off.png";
}
function endHover2() {
  quickMenuBtn2.src = "/image/quick-menu/story-off.png";
}
function endHover3() {
  quickMenuBtn3.src = "/image/quick-menu/paper-off.png";
}
function endHover4() {
  quickMenuBtn4.src = "/image/quick-menu/map-off.png";
}
