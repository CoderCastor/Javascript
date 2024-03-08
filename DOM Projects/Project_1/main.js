const body = document.querySelector("body");
const boxes = document.querySelectorAll(".boxes");

boxes.forEach(function (box) {
  box.addEventListener("click", function (e) {
    if (e.target.id == "box1") {
      body.style.backgroundColor = "#6200ff";
    } else if (e.target.id == "box2") {
      body.style.backgroundColor = "red";
    } else if (e.target.id == "box3") {
      body.style.backgroundColor = "#FF0074";
    } else if (e.target.id == "box4") {
      body.style.backgroundColor = "#FF7343";
    }
  });
});
