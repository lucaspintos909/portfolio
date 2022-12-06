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
            title: "Licenciatura en Informática",
            subtitle: "Universidad de Montevideo - Uruguay",
            years: "2022 - Actualidad",
            right_side: true,
          },
          {
            title: "Bachiller Informático",
            additional_info: "Énfasis desarrollo web",
            subtitle: "Escuela Superior de Informática - Uruguay",
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
            title: "Técnico en Análisis de Servicios",
            subtitle: "Ceibal.",
            years: "2022 - Actualidad",
            right_side: true,
          },
          {
            title: "Pasante de Desarrollo",
            subtitle: "Unidad Informática, Facultad de Psicología, UdelaR.",
            years: "abr. 2022 - sep. 2022",
            right_side: false,
          },
          {
            title: "Desarrollador web",
            subtitle: "Freelance",
            years: "2020",
            right_side: true,
          },
        ],
      },
    ],
  }));

  Alpine.data("portfolio", () => ({
    projects: [
      {
        title: "Blog de café",
        img: "assets/img/blog_café_project.png",
        description:
          "Página web estatica hecha con HTML y CSS",
        demo: "https://blogdecafe-project.netlify.app/",
        image_alt: "Imágen blog de café",
      },
      {
        title: "Bienes Raíces",
        img: "assets/img/bienes_raices_project.png",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, impedit!",
        demo: "https://bienes-raices-project.netlify.app/",
        image_alt: "Imágen de web bienes raíces",
      },
      {
        title: "Todo List",
        img: "assets/img/javascript_todolist.png",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, impedit!",
        demo: "https://j4vascript-todo-list.netlify.app/",
        image_alt: "Imágen de web bienes raíces",
      },
    ],
  }));
});
