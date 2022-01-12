"use strict";

const modules = ["navbar", "skillsAccordion", "qualificationTabs", "swiper", "scrollup"];

requirejs.config({
  baseUrl: "js/modules",
});

requirejs(modules, function () {});
