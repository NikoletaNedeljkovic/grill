const testimonial = [
  {
    name: "Jelena M.",
    testimony:
      "Najbolji restoran u gradu! Svaki obrok je prava poslastica za čula. ",
    profession: "Advokat",
    image: "img/testimonial-1.jpg",
  },
  {
    name: "Ivan S.",
    testimony:
      "Vrhunski kvalitet hrane i usluga na svetskom nivou. Preporučujem!",
    profession: "Student",
    image: "img/testimonial-2.jpg",
  },
  {
    name: "Marko L.",
    testimony:
      "Ovde dolazim sa porodicom već godinama, nikada nas nisu razočarali.",
    profession: "Privatni kuvar",
    image: "img/testimonial-3.jpg",
  },
  {
    name: "Katarina R.",
    testimony: "Ambijent je predivan, a meni je nešto što morate da probate!",
    profession: "Dizajner enterijera",
    image: "img/testimonial-4.jpg",
  },
];

testimonial.forEach(({ name, profession, image, testimony }) => {
  const str = `
          <div class="testimonial-item bg-transparent border rounded p-4">
              <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p>${testimony}</p>
              <div class="d-flex align-items-center">
                <img
                  class="img-fluid flex-shrink-0 rounded-circle"
                  src="${image}"
                  alt="${name}"
                  style="width: 50px; height: 50px"
                />
                <div class="ps-3">
                  <h5 class="mb-1">${name}</h5>
                  <small>${profession}</small>
                </div>
              </div>
          </div>
  `;
  const html = $.parseHTML(str);

  const $testimonial = $("#testimonial");
  $testimonial.append(html);
});

$(".testimonial-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  center: true,
  margin: 24,
  dots: true,
  loop: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});
