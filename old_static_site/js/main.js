"use strict";

const modules = [
  "navbar",
  "skillsAccordion",
  "qualificationTabs",
  "swiper",
  "scrollup",
  "themes",
];

requirejs.config({
  baseUrl: "js/modules",
});

requirejs(modules, function () {});
