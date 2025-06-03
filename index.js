
document.addEventListener("DOMContentLoaded", function () {
  const options = {
    strings: ["Сорью Аска Лэнгли", "второе дитя", "назначенный пилот Евы 02"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 1000,
    loop: true
  };

  const typed = new Typed("#asuka-main-text", options);
});

document.addEventListener("DOMContentLoaded", function () {
  const options = {
    strings: ["Рей Аянами", "первое дитя", "назначенный пилот Евы 00"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 1000,
    loop: true
  };

  const typed = new Typed("#rei-main-text", options);
});

document.addEventListener("DOMContentLoaded", function () {
  const options = {
    strings: ["Cиндзи Икари", "третье дитя", "назначенный пилот Евы 01"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 1000,
    loop: true
  };

  const typed = new Typed("#shinji-main-text", options);
});


function initGallery(selector) {
  const imgs = document.querySelectorAll(selector);
  if (!imgs.length) return;
  let i = 0;
  setInterval(() => {
    imgs[i].classList.remove('active');
    i = (i + 1) % imgs.length;
    imgs[i].classList.add('active');
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  initGallery('.gallery-image');
  initGallery('.gallery-image-rei');
  initGallery('.gallery-image-shinji');
});


document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.scroll-reveal');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  items.forEach(item => observer.observe(item));
});


  document.addEventListener('DOMContentLoaded', () => {
    const slider = tns({
      container: '.my-slider',
      items: 1,
      slideBy: 'page',
      autoplay: true,
      autoplayTimeout: 3000,   // интервал в мс
      autoplayButtonOutput: false,
      controls: false,         // если не нужны стрелки
      nav: true,              // если не нужны точки
      loop: true,
      speed: 1000              // скорость анимации в мс
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    const slider = tns({
      container: '.my-slider-rei',
      items: 1,
      slideBy: 'page',
      autoplay: true,
      autoplayTimeout: 3000,   // интервал в мс
      autoplayButtonOutput: false,
      controls: false,         // если не нужны стрелки
      nav: true,              // если не нужны точки
      loop: true,
      speed: 1000              // скорость анимации в мс
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const slider = tns({
      container: '.my-slider-shinji',
      items: 1,
      slideBy: 'page',
      autoplay: true,
      autoplayTimeout: 3000,   // интервал в мс
      autoplayButtonOutput: false,
      controls: false,         // если не нужны стрелки
      nav: true,              // если не нужны точки
      loop: true,
      speed: 1000              // скорость анимации в мс
    });
  });


document.querySelector('.up').addEventListener('click', () => {
    document.querySelector(".up").animate(
  [
    {transform: "translateY(0)" },
    { transform: "translateY(-1vh) scale(1.1)" },
    {transform: "translateY(0)" }
  ],
  {
    duration: 300,
    easing: "ease",
    fill: "forwards"
  }
);
})