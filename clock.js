// Clock //

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  h = checkTime(h);
  document.getElementById("clock").innerHTML = h + " : " + m + " : " + s;
  setTimeout(function () {
    startTime();
  }, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// End Clock //

// background //

var body = document.getElementById("body");
var div_clock = document.getElementById("div_clock");
var div_button = document.getElementById("div_button");
var clock = document.getElementById("clock");
var img_clock = document.getElementById("img_clock");

class themes {
  constructor() {
    this.color1 = document.getElementById("Color1");
    this.color1.addEventListener("click", () => {
      this.select_color("theme_morning");
    });

    this.color2 = document.getElementById("Color2");
    this.color2.addEventListener("click", () => {
      this.select_color("theme_night");
    });

    if (localStorage.getItem("Themes") == null) {
      body.style.backgroundImage = "url(sun.jpg)";
      div_clock.style.backgroundColor = "wheat";
      div_button.style.border = "2px goldenrod dotted";
      clock.style.color = "white";
      img_clock.style.border = "3px blue dotted";
    }
    this.select_color(localStorage.getItem("Themes"));
  }

  select_color(theme) {
    if (theme == "theme_morning") {
      body.style.backgroundImage = "url(sun.jpg)";
      div_clock.style.backgroundColor = "wheat";
      div_button.style.border = "2px goldenrod dotted";
      clock.style.color = "white";
      img_clock.style.border = "3px blue dotted";
    } else if (theme == "theme_night") {
      body.style.backgroundImage = "url(stars.jpg)";
      div_clock.style.backgroundColor = "#394b75";
      div_button.style.border = "2px blue dotted";
      clock.style.color = "#a9ceff";
      img_clock.style.border = "3px goldenrod dotted";
    }
    localStorage.setItem("Themes", theme);
  }
}
onload = new themes();
onload = () => {
  startTime();
};

// End background //

