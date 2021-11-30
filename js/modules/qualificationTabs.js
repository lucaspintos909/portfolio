const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('cualification__active')
    });

    target.classList.add('cualification__active');

    tabs.forEach(tab => {
      tab.classList.remove('cualification__active');
    })

    tab.classList.add('cualification__active');
  });
});
