"use strict";

requirejs.config({
  baseUrl: "js/modules",
});
const modules = ["navbar", "skillsAccordion", "qualificationTabs"];
requirejs(modules, function () {});
