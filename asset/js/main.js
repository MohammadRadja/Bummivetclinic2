// Inisialisasi Carousel
$("#myCarousel").carousel({
  interval: 1000,
});

// Menambahkan Elemen untuk Next Carousel
$("#myCarousel .carousel-item").each(function () {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }

  for (var i = 0; i < minPerSlide; i++) {
    next.children(":first-child").clone().appendTo($(this));
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }
  }
});

var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

var mixer = mixitup(containerEl, {
  selectors: {
    target: '[data-ref~="mixitup-target"]',
  },
});
