// Amount of Snowflakes
const snowMax = 300;

// Snowflake Colors
const snowColor = ["#ccc", "#eee", "#fff", "#ddd"];

// Snow Entity
const snowEntity = "&#x2022;";

// Falling Velocity
const snowSpeed = 2;

// Minimum Flake Size
const snowMinSize = 3;

// Maximum Flake Size
const snowMaxSize = 15;

// Refresh Rate (in milliseconds)
const snowRefresh = 50;

// Additional Styles
const snowStyles =
  "cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;";

/*
// End of Configuration
// ----------------------------------------
// Do not modify the code below this line
*/

let snow = [],
  pos = [],
  coords = [],
  lefr = [],
  marginBottom,
  marginRight;

function randomize(range) {
  const rand = Math.floor(range * Math.random());
  return rand;
}

function initSnow() {
  const snowSize = snowMaxSize - snowMinSize;
  setWindowSize();

  for (let i = 0; i <= snowMax; i++) {
    coords[i] = 0;
    lefr[i] = Math.random() * 15;
    pos[i] = 0.03 + Math.random() / 10;
    snow[i] = document.getElementById("flake" + i);
    snow[i].style.fontFamily = "inherit";
    snow[i].size = randomize(snowSize) + snowMinSize;
    snow[i].style.fontSize = snow[i].size + "px";
    snow[i].style.color = snowColor[randomize(snowColor.length)];
    snow[i].style.zIndex = 1000;
    snow[i].sink = (snowSpeed * snow[i].size) / 5;
    snow[i].posX = randomize(marginRight - snow[i].size);
    snow[i].posY = randomize(
      2 * marginBottom - marginBottom - 2 * snow[i].size
    );
    snow[i].style.left = snow[i].posX + "px";
    snow[i].style.top = snow[i].posY + "px";
  }

  moveSnow();
}

function setWindowSize() {
  marginBottom = document.body.scrollHeight - 5;
  marginRight = document.body.clientWidth - 15;
}

function moveSnow() {
  for (let i = 0; i <= snowMax; i++) {
    coords[i] += pos[i];
    snow[i].posY += snow[i].sink;
    snow[i].style.left = snow[i].posX + lefr[i] * Math.sin(coords[i]) + "px";
    snow[i].style.top = snow[i].posY + "px";

    if (
      snow[i].posY >= marginBottom - 2 * snow[i].size ||
      parseInt(snow[i].style.left) > marginRight - 3 * lefr[i]
    ) {
      snow[i].posX = randomize(marginRight - snow[i].size);
      snow[i].posY = 0;
    }
  }

  setTimeout("moveSnow()", snowRefresh);
}

for (let i = 0; i <= snowMax; i++) {
  document.write(
    `<span id='flake${i}' style='${snowStyles} position:absolute; top:-${snowMaxSize}'>${snowEntity}</span>`
  );
}

$().ready(function () {
  $("select").on("change", function () {
    window.setTimeout(initSnow, 250);
  });
  $(".accordion-button").on("click", function () {
    window.setTimeout(initSnow, 250);
  });
});

window.addEventListener("resize", setWindowSize);
window.addEventListener("load", initSnow);
