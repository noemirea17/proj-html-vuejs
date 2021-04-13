Vue.config.devtools = true;

// var header = new Vue({
//   el: "#head",
//   data: {
//     logo: "img/logo-corporate-9.png",
//     options: [
//       "HOME",
//       "ELEMENTS",
//       "FEATURES",
//       "PAGES",
//       "PORTFOLIO",
//       "BLOG",
//       "SHOP",
//     ],
//   },
// });

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
    },
    footer: {},
  },
});
