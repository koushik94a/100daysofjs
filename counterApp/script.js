const count = document.querySelector(".value");

const add = document.querySelector("#plus");
const subtract = document.querySelector("#minus");
const reset = document.querySelector("#reset");

add.addEventListener("click", () => {
    count.innerHTML++;
    setColor();
});
subtract.addEventListener("click", () => {
    count.innerHTML--;
    setColor();
});
reset.addEventListener("click", () => {
    count.innerHTML = 0;
    setColor();
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "yellow";
  } else if (count.innerHTML < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "#fff";
  }
}