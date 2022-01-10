"use strict";

const modules = ["navbar", "skillsAccordion", "qualificationTabs", "swiper"];

requirejs.config({
  baseUrl: "js/modules",
});

requirejs(modules, function () {});
