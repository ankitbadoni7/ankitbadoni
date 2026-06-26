// TYPEWRITER

document.addEventListener("DOMContentLoaded", function () {
  var webText = document.getElementById("web-text");

  var typed = new Typed(".auto-type", {
    strings: ["Developer", "Designer", "UI/UX Designer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    preStringTyped: function (arrayPos, self) {
      if (self.strings[arrayPos] === "UI/UX Designer") {
        webText.style.display = "none";
      } else {
        webText.style.display = "inline";
      }
    }
  });
});

  
  // DARK THEME
  document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Set initial emoji
    themeToggle.textContent = '☀️';
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Change emoji based on current theme
        themeToggle.textContent = document.body.classList.contains('dark-theme') ? '🌙' : '☀️';
    });
});


let hamberger = document.querySelector('.hamberger');
let cross = document.querySelector('.cross');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

cross.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

 document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('mobtheme');
    
    // Set initial emoji
    themeToggle.textContent = '☀️';
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Change emoji based on current theme
        themeToggle.textContent = document.body.classList.contains('dark-theme') ? '🌙' : '☀️';
    });
});


document.querySelectorAll('.particle').forEach(particleDiv => {
  const canvas = document.createElement('canvas');
  particleDiv.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let dots = [];
  const numDots = 100;

  let mouseX = canvas.width / 2;
  let mouseY = canvas.height / 2;

  class Dot {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.z = Math.random() * 100;
      this.radius = Math.random() * 2 + 1;
      this.dx = (Math.random() - 0.5) * 0.5;
      this.dy = (Math.random() - 0.5) * 0.5;
    }

    update() {
      this.x += this.dx;
      this.y += this.dy;

      if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
    }

    draw() {
      const distanceX = (this.x - mouseX) / canvas.width;
      const distanceY = (this.y - mouseY) / canvas.height;
      const depthEffect = 1 - this.z / 100;

      ctx.beginPath();
      ctx.arc(
        this.x + distanceX * 50,
        this.y + distanceY * 50,
        this.radius * depthEffect,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = `rgba(61, 207, 211, ${0.4 * depthEffect})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < numDots; i++) {
    dots.push(new Dot());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach(dot => {
      dot.update();
      dot.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
});
