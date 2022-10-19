var cursor = {
  _x: 0,
  _y: 0,
  $dot: document.querySelector('.cursor-dot'),

  func: function () {
    this.setupEventListeners();
  },

  setupEventListeners: function () {
    var self = this;
    document.addEventListener('mousemove', function (x) {
      //showing the cursor
      self.cursorVisible = true;
      if (self.cursorVisible) {
        self.$dot.style.opacity = 1;
      } else {
        self.$dot.style.opacity = 0;
      }
      //positioning cursor
      self.endX = x.pageX;
      self.endY = x.pageY;
      self.$dot.style.top = self.endY + 'px';
      self.$dot.style.left = self.endX + 'px';
    });
  },
}

cursor.func();


document.getElementById("motion-design-button").addEventListener("click", clickScroll);

function clickScroll() {
  document.getElementById("motion-design-image").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("three-button").addEventListener("click", clickScroll2);

function clickScroll2() {
  document.getElementById("three-image").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("digital-fabrication-button").addEventListener("click", clickScroll3);

function clickScroll3() {
  document.getElementById("digital-fabrication-image").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("ux-design-button").addEventListener("click", clickScroll4);

function clickScroll4() {
  document.getElementById("ux-design-image").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("interactive-button").addEventListener("click", clickScroll4);

function clickScroll4() {
  document.getElementById("interactive-image").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("other-button").addEventListener("click", clickScroll5);

function clickScroll5() {
  document.getElementById("other-image").scrollIntoView({ behavior: "smooth" });
}


