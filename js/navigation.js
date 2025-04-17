// Navigation

let btn = document.querySelector(".toggle-btn");
let nav = document.querySelector(".navigation-right");

btn.addEventListener("click", () => {
  nav.classList.toggle("display-navigation");
  btn.classList.toggle("active-toggle");
});

// Scroll to top

let mybutton = document.getElementById("scrolltop");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

mybutton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


// navigation scroll effect
let prevscroll = window.scrollY;

window.onscroll = function () {
    let currentscroll = window.scrollY;

    // navigation 
    if (prevscroll < 80) {
        document.querySelector('.main-navigation').classList.remove("with-bg");
    }
    else {
        document.querySelector('.main-navigation').classList.add("with-bg");
    }
    
    prevscroll = currentscroll;
}


// Load button js 

const toggleBtn = document.getElementById('toggle-btn');
const hiddenVideos = document.querySelectorAll('.video.hidden');
let expanded = false;

toggleBtn.addEventListener('click', () => {
  hiddenVideos.forEach(video => {
    video.classList.toggle('hidden');
  });

  expanded = !expanded;
  toggleBtn.textContent = expanded ? 'Show Less' : 'Load More';
});