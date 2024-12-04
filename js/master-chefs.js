const chefs = [
  {
    name: "Marko Petrović",
    designation: "ekspert za roštilj i tradicionalna jela",
    image: "img/team-1.jpg",
  },
  {
    name: "Ivan Jovanović",
    designation: "majstor internacionalne kuhinje",
    image: "img/team-2.jpg",
  },
  {
    name: "Nikola Stanković",
    designation: "kreator modernih jela",
    image: "img/team-3.jpg",
  },
  {
    name: "Dejan Kovačević",
    designation: "stručnjak za dezert i predjela",
    image: "img/team-4.jpg",
  },
];

chefs.forEach(({ name, designation, image }) => {
  const str = `
         <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item text-center rounded overflow-hidden">
                <div class="rounded-circle overflow-hidden m-4">
                  <img class="img-fluid" src="${image}" alt="${name}" />
                </div>
                <h5 class="mb-0">${name}</h5>
                <small class="pb-3">${designation}</small>
              </div>
            </div>
  `;
  const html = $.parseHTML(str);

  const $chefs = $("#chefs");
  $chefs.append(html);
});
