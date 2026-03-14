// Initialize all highlight-card carousels on the page
function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach(function (carousel) {
    var track = carousel.querySelector(".hc-carousel-track");
    var slides = carousel.querySelectorAll(".hc-carousel-slide");
    var dots = carousel.querySelectorAll(".hc-dot");
    var prevBtn = carousel.querySelector(".hc-prev");
    var nextBtn = carousel.querySelector(".hc-next");

    // Find sibling desc and caption elements inside the parent card
    var card = carousel.closest("[data-carousel-card]");
    var descs = card ? card.querySelectorAll(".hc-desc") : [];
    var captions = card ? card.querySelectorAll(".hc-caption") : [];

    if (!track || slides.length === 0) return;

    var current = 0;
    var autoTimer = null;

    function goTo(n) {
      current = ((n % slides.length) + slides.length) % slides.length;
      track.style.transform = "translateX(-" + current * 100 + "%)";

      dots.forEach(function (d, i) {
        d.classList.toggle("active", i === current);
      });

      // Update descriptions
      descs.forEach(function (d, i) {
        d.classList.toggle("active", i === current || (current >= descs.length && i === descs.length - 1));
      });

      // Update captions
      captions.forEach(function (c, i) {
        c.classList.toggle("active", i === current || (current >= captions.length && i === captions.length - 1));
      });
    }

    function startAuto() {
      stopAuto();
      if (slides.length > 1) {
        autoTimer = setInterval(function () {
          goTo(current + 1);
        }, 4000);
      }
    }

    function stopAuto() {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        stopAuto();
        goTo(current - 1);
        startAuto();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        stopAuto();
        goTo(current + 1);
        startAuto();
      });
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        stopAuto();
        goTo(i);
        startAuto();
      });
    });

    // Touch / swipe support
    var touchStartX = 0;
    track.addEventListener("touchstart", function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener("touchend", function (e) {
      var diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        stopAuto();
        goTo(current + (diff > 0 ? 1 : -1));
        startAuto();
      }
    }, { passive: true });

    goTo(0);
    startAuto();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCarousels);
} else {
  initCarousels();
}
