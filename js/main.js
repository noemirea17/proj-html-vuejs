Vue.config.devtools = true;

var app = new Vue({
  el: "#root",
  data: {
    header: {
      logo: "img/logo-corporate-9.png",
      options: [
        "HOME",
        "ELEMENTS",
        "FEATURES",
        "PAGES",
        "PORTFOLIO",
        "BLOG",
        "SHOP",
      ],
      socials: ["facebook-f", "twitter", "linkedin-in"],
    },
    footer: {
      contacts: {
        address: "1234, Street Name, City Name",
        phone: "(800)123-4567",
        email: "mail@example.com",
      },
      copyright: "Copyright 2020. All right reserved",
    },
  },
});
