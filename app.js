// ==================== Main JS for AfghanTravelGuide ====================
document.addEventListener("DOMContentLoaded", () => {

  // ================= NAVBAR TOGGLE (MOBILE MENU) =================
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show"); // نمایش/مخفی کردن منو
  });

  // بستن منو بعد از کلیک روی لینک (موبایل)
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });


  // ================= BACK TO TOP BUTTON ==========================
const backToTop = document.getElementById("backToTop");
const scrollPercent = document.getElementById("scrollPercent");
const progressCircle = document.getElementById("progressCircle");

const radius = progressCircle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
progressCircle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;
}

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  const percent = Math.round((scrollTop / scrollHeight) * 100);
  scrollPercent.textContent = `${percent}%`;
  setProgress(percent);

  if (scrollTop > 50) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});





  // ================= HERO FADE SLIDER ============================
  const heroSwiper = new Swiper(".heroSwiper", {
    effect: "fade",       // افکت محو شدن بین اسلایدها
    loop: true,           // حلقه بی‌نهایت
    autoplay: {
      delay: 3000,        // هر 3 ثانیه اسلاید تغییر کند
      disableOnInteraction: false,
    },
    speed: 1000,          // سرعت تغییر اسلایدها
    // اگر خواستید Pagination و Navigation اضافه کنید، کلاس‌ها را در HTML اضافه کرده و این قسمت را uncomment کنید
    // pagination: { el: ".heroSwiper .swiper-pagination", clickable: true },
    // navigation: { nextEl: ".heroSwiper .swiper-button-next", prevEl: ".heroSwiper .swiper-button-prev" },
  });


  // ================= PACKAGES SLIDER ============================
  const packagesSwiper = new Swiper(".packagesSwiper", {
    loop: true,
    grabCursor: true,     // آیکن دست هنگام هاور
    spaceBetween: 30,     // فاصله بین اسلایدها
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {         // دکمه‌های بعدی/قبلی
      nextEl: ".packagesSwiper .swiper-button-next",
      prevEl: ".packagesSwiper .swiper-button-prev",
    },
    breakpoints: {        // ریسپانسیو
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });


  // ================= CLIENTS / TESTIMONIALS SLIDER ===============
  const clientsSwiper = new Swiper(".mySwiper", {
    effect: "coverflow",  // افکت کاور فلو
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {  // ریسپانسیو
      576: { slidesPerView: 1.2, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 40 },
    },
  });

}); // End of DOMContentLoaded
