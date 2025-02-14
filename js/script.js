function clculate() {
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  const type = document.getElementById("type").value;
  let c;

  if (type == `mines`) {
    c = a - b;
  } else if (type == `plus`) {
    c = a + b;
  } else if (type == `times`) {
    c = a * b;
  } else if (type == `divid`) {
    c = a / b;
  } else {
    alert(`pleas select the type!`);
  }

  document.getElementById("c").value = c;
}

function inc() {
  let c = document.getElementById("c");
  c.value++;

  c.value++;
  c.value--;
}

function de() {
  let c = document.getElementById("c");
  c.value--;
}

function reclick(click) {
  let bulb = document.getElementById("bulb");
  bulb.src = click;
}
function change(a, b) {
  let kazemi = document.getElementById("bulb");
  kazemi.src = b;
  kazemi.width = a;
}

function resize(size) {
  let bulb = document.getElementById("bulb");
  bulb.width = size;
}
function rtl() {
  let ad = document.getElementById("ad");
  ad.dir = "rtl";
}
function ltr() {
  let ad = document.getElementById("ad");
  ad.dir = "ltr";
}

function menuToggle() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.style.display == "flex") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "flex";
  }
}
document
  .querySelector("header .right .menu i")
  .addEventListener("click", menuToggle);

document.querySelectorAll(".drop-down-2").forEach((menu) => {
  menu.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});
