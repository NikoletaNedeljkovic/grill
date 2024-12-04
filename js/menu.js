const menuItems = [
  {
    name: "Sabljičica iz Plamena",
    image: "img/menu-1.jpg",
    description:
      "Meso sa žara (jagnjeći kotleti, piletina, svinjski file), raznovrsni prilozi po izboru",
    price: 3600,
  },
  {
    name: "Zlatna Magija",
    image: "img/menu-2.jpg",
    description:
      "Domaći ramen, miso čorba, dimljeni svinjski vrat, jaja, povrće, začinjeni chili.",
    price: 2800,
  },
  {
    name: "Zeleni Užitak",
    image: "img/menu-3.jpg",
    description:
      "Arborio pirinač, patlidžan, tikvica, paprika, šampinjoni, parmezan, maslinovo ulje ",
    price: 1800,
  },
  {
    name: "Divlji Tanjir",
    image: "img/menu-4.jpg",
    description:
      "Biftek, pečeni krompir, grilovano povrće, umak od crnog vina.",
    price: 3500,
  },
  {
    name: "Magična Daska",
    image: "img/menu-5.jpg",
    description:
      "Domaći hummus, guacamole, feta sir, grilovano povrće, pita, suve šljive",
    price: 1700,
  },
  {
    name: "Sabor Ukusa",
    image: "img/menu-6.jpg",
    description: "Šnicla, pomfrit, tartar sos, grilovani paradajz.",
    price: 1900,
  },
  {
    name: "Pizza iz Džungle",
    image: "img/menu-7.jpg",
    description:
      "Tanka kora, parmezan, mozzarella, dimljeni patlidžan, goveđi fileti, začinsko bilje.",
    price: 2200,
  },
  {
    name: "Voz sa Ukusima ",
    image: "img/menu-8.jpg",
    description:
      "Pljeskavice, dimljeni sir, masline, začinjeni ajvar, sezonska salata.",
    price: 2100,
  },
];

menuItems.forEach(({ name, image, price, description }) => {
  const str = `
      <div class="col-lg-6">
        <div class="d-flex align-items-center">
            <img class="flex-shrink-0 img-fluid rounded" src="${image}" alt="${name}" style="width: 80px;">
            <div class="w-100 d-flex flex-column text-start ps-4">
                <h5 class="d-flex justify-content-between border-bottom pb-2">
                    <span>${name}</span>
                    <span class="text-primary">${price} RSD</span>
                </h5>
                <small class="fst-italic">${description}</small>
            </div>
        </div>
      </div>
`;
  const html = $.parseHTML(str);

  const $menu = $("#menu");
  $menu.append(html);
});
