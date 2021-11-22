(() => {
  var p = document.querySelectorAll("p"),
    pLength = p.length,
    img = document.querySelectorAll(".arrow"),
    p1 = document.querySelectorAll(".p1");
  //console.log(p1)
  //console.log(p)

  for (let i = 0; i < pLength; i++) {
    p[i].addEventListener("click", () => {
      if (p1[i].classList.contains("p1")) {
        p1[i].className = "p2";
        img[i].style.transform = "rotateZ(-180deg)";
        p[i].className = "p7";
        p[i].style.color = "hsl(238, 29%, 16%)";
        p[i].style.fontWeight = 800;
        p[i].classList.add("p7");
      } else {
        img[i].style.transform = "";
        p[i].style.color = "hsl(240, 6%, 50%)";
        p1[i].className = "p1";
        p[i].style.fontWeight = 100;
        p[i].classList.add("p7");
      }
    });
    img[i].addEventListener("click", () => {
      if (p1[i].classList.contains("p1")) {
        p1[i].className = "p2";
        img[i].style.transform = "rotateZ(-180deg)";
        p[i].className = "p7";
        p[i].style.color = "hsl(238, 29%, 16%)";
        p[i].style.fontWeight = 800;
        p[i].classList.add("p7");
      } else {
        img[i].style.transform = "";
        p[i].style.color = "hsl(240, 6%, 50%)";
        p1[i].className = "p1";
        p[i].style.fontWeight = 100;
        p[i].classList.add("p7");
      }
    });
  }
})();
