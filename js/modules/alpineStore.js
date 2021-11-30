"use strict";

document.addEventListener("alpine:init", () => {
  Alpine.data("navbar", () => ({
    items: [
      { text: "Home", icon: "uil-estate", section: "#home" },
      { text: "Sobre mí", icon: "uil-user", section: "#about" },
      { text: "Skills", icon: "uil-file-alt", section: "#skills" },
      { text: "Portafolio", icon: "uil-bag-alt", section: "#portfolio" },
      { text: "Contáctame", icon: "uil-message", section: "#contact" },
    ],
  }));

  Alpine.data("qualification", () => ({
    content: [
      /* EDUCATION */
      {
        id: "education",
        classes: "qualification__active",
        qualifications: [
          {
            title: "Bachiller Informático",
            additional_info: 'Énfasis desarrollo web',
            subtitle: "ESI - Uruguay",
            years: "2019 - 2021",
            right_side: false,
          },
          {
            title: "Analista Junior Genexus",
            subtitle: "Jovenes a Programar, Ceibal - Uruguay",
            years: "2018",
            right_side: true,
          },
        ],
      },
      /* WORK */
      {
        id: "work",
        classes: "",
        qualifications: [
          {
            title: "Desarrollador web",
            subtitle: "Freelance, Uruguay",
            years: "2020",
            right_side: true,
          },
        ],
      },
    ],
  }));
});
