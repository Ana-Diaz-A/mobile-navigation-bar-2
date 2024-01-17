//CONST
const mainTabs = document.querySelector(".main-tabs");
const mainSliderCircle = document.querySelector(".main-slider-circle");
const roundButtons = document.querySelectorAll(".round-button");
const colors = {
  blue: {50: {value: "#e3f2fd"}, 100: {value: "#bbdefb"}},
  green: {50: {value: "#e8f5e9"}, 100: {value: "#c8e6c9"}},
  purple: {50: {value: "#f3e5f5"}, 100: {value: "#e1bee7"}},
  orange: {50: {value: "#ffe0b2"}, 100: {value: "#ffe0b2"}},
  red: {50: {value: "#ffebee"}, 100: {value: "#ffcdd2"}}
};

//This function receives a color and a variant, and returns the corresponding value from the colors object.
const getColor = (color, variant) => {
  return colors[color][variant].value;
};

//This function is used to handle the active tab in a tabbed interface. 
//Removes the active class from all tabs and adds it to the clicked tab.
const handleActiveTab = (tabs, event, className) => {
  tabs.forEach((tab) => {
    tab.classList.remove(className);
  });

  if (!event.target.classList.contains(className)) {
    event.target.classList.add(className);
  }
};

//This code responds to clicks on elements within mainTabs by updating various visual and CSS properties based on the clicked target's attributes and classes.
mainTabs.addEventListener("click", (event) => { 
  const root = document.documentElement;
  const targetColor = event.target.dataset.color;
  const targetTranslateValue = event.target.dataset.translateValue;

  if (event.target.classList.contains("round-button")) { 
    mainSliderCircle.classList.remove("animate-jello"); 
    void mainSliderCircle.offsetWidth; 
    mainSliderCircle.classList.add("animate-jello"); 

    root.style.setProperty("--translate-main-slider", targetTranslateValue);
    root.style.setProperty("--main-slider-color", getColor(targetColor, 50));
    root.style.setProperty("--background-color", getColor(targetColor, 100));

    handleActiveTab(roundButtons, event, "active");

    if (!event.target.classList.contains("gallery")) {
      root.style.setProperty("--filters-container-height", "0");
      root.style.setProperty("--filters-wrapper-opacity", "0");
    } else {
      root.style.setProperty("--filters-container-height", "3.8rem");
      root.style.setProperty("--filters-wrapper-opacity", "1");
    }
  }
});

const filterTabs = document.querySelector(".filter-tabs");
const filterButtons = document.querySelectorAll(".filter-button");

//This code responds to clicks on elements within filterTabs by updating the visual and CSS properties related to the filters slider based on the clicked target's attributes and classes.
filterTabs.addEventListener("click", (event) => {
  const root = document.documentElement;
  const targetTranslateValue = event.target.dataset.translateValue;

  if (event.target.classList.contains("filter-button")) {
    root.style.setProperty("--translate-filters-slider", targetTranslateValue);
    handleActiveTab(filterButtons, event, "filter-active");
  }
});