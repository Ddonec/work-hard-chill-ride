const checkbox = document.querySelector('input[type="checkbox"]');
const winterContent = document.querySelector(".season.winter");
const summerContent = document.querySelector(".season.summer");
const headerLine = document.querySelector(".header-top-blue");
const underBiker = document.querySelector(".under-bike");
const secondLineHeader = document.querySelector(".second-line-header");
const headerList = document.querySelector(".header-1920-list");
const header2List = document.querySelector(".icun-list-h");
const searchZoneHeader = document.getElementById("search-header-1920");
const searchZoneHeaderClass = document.querySelector(".search-header-1920");
const summerStatus = document.querySelectorAll(".summer-status");
const winterStatus = document.querySelectorAll(".winter-status");
const numberHeader = document.querySelector(".n-h-y");
const textGradient = document.querySelectorAll(".text-gradient");
const backgroundHeader = document.querySelector(".bacground-image-main-page-first-section");
const backgroundHeaderLeftPhoto = document.querySelector(".absolute-fs-container-left");
const backgroundHeaderRightPhoto = document.querySelector(".absolute-fs-container-right");
const switchSeasonBtns = document.querySelectorAll(".class-to-switch-season-btn");
const searchIconSwitchW = document.getElementById("search-icon-1920");
const searchIconSwitchB = document.getElementById("search-icon-1920-black");
const burgerMenuSwitchColor = document.querySelectorAll(".burger span");
const bgSixSection = document.querySelector(".six-section");
const switchTextColorSixS = document.querySelectorAll(".switch-color-text-black-white");
const textTitlePartBlue = document.querySelectorAll(".text-blocks-6-s div:nth-child(1) > span");
const runStringFirst = document.querySelector(".roll-park-list");
const runStringSecond = document.querySelector(".roll-park-list2");
const yellowBlock = document.querySelector(".yellow-block");
const borderColorSwitch = document.querySelectorAll(".border-switch-status-blue");
const sixSectionTitle = document.querySelector(".title-of-section-gradient-yellow");
const thirdSectionContainerHide = document.querySelector(".third-section-container");
const fourSectionContainerHide = document.querySelector(".four-section");
const fiveSectionContainerHide = document.querySelector(".five-section");
const showHideBlueWheel = document.querySelectorAll(".show-hide-blue-wheel");
const showHideYellowWheel = document.querySelectorAll(".show-hide-yellow-wheel");

const blueFake = document.querySelector(".blue-line-fake");
const grayFake = document.querySelector(".gray-line-fake");

checkbox.addEventListener("change", function () {
   const newPlaceholderColor = this.checked ? "red" : "white";
   const placeholderElement = searchZoneHeader;
   if (this.checked) {
      summerStatus.forEach(function (element) {
         element.classList.add("none");
      });
      textGradient.forEach(function (element) {
         element.classList.remove("text-gradient-summer");
      });
      winterStatus.forEach(function (element) {
         element.classList.remove("none");
      });
      switchSeasonBtns.forEach(function (element) {
         element.classList.remove("blue-b-g");
      });
      burgerMenuSwitchColor.forEach(function (element) {
         element.style.background = "white";
      });
      switchTextColorSixS.forEach(function (element) {
         element.classList.remove("switch-color-text-black");
      });
      textTitlePartBlue.forEach(function (element) {
         element.style.color = "#ffc93a";
      });
      borderColorSwitch.forEach(function (element) {
         element.classList.remove("border-blue");
      });
      showHideBlueWheel.forEach(function (element) {
         element.classList.add("none");
      });
      showHideYellowWheel.forEach(function (element) {
         element.classList.remove("none");
      });
      summerContent.style.display = "none";
      winterContent.style.display = "flex";
      headerLine.style.background = "#5567ea";
      underBiker.style.background = "#5567ea";
      secondLineHeader.style.background = "rgba(232, 234, 251, 0.8)";
      headerList.style.color = "white";
      header2List.style.color = "white";
      searchZoneHeaderClass.classList.remove("custom-placeholder-style");
      searchZoneHeader.style.border = "2px solid #fff";
      searchZoneHeader.style.background = "#5567ea";
      placeholderElement.style.color = newPlaceholderColor;
      blueFake.style.background = "#5567ea";
      grayFake.style.background = "rgba(232, 234, 251, 0.8)";
      numberHeader.style.color = "#FFC93A";
      backgroundHeaderRightPhoto.classList.remove("summer");
      backgroundHeaderLeftPhoto.classList.remove("summer");
      backgroundHeader.classList.remove("summer");
      // searchIconSwitchB.classList.add("none");
      // searchIconSwitchW.classList.remove("none");
      bgSixSection.classList.remove("summer");
      bgSixSection.style.backgroundColor = "#5567ea";

      runStringFirst.classList.remove("roll-park-list-black");
      runStringSecond.classList.remove("roll-park-list-black");
      yellowBlock.style.background = "#ffc93a";
      sixSectionTitle.classList.remove("text-gradient");
      // fourSectionContainerHide.classList.add("none");
      // fiveSectionContainerHide.classList.add("none");
      // thirdSectionContainerHide.classList.add("none");
   } else {
      summerStatus.forEach(function (element) {
         element.classList.remove("none");
      });
      textGradient.forEach(function (element) {
         element.classList.add("text-gradient-summer");
      });
      winterStatus.forEach(function (element) {
         element.classList.add("none");
      });
      switchSeasonBtns.forEach(function (element) {
         element.classList.add("blue-b-g");
      });
      burgerMenuSwitchColor.forEach(function (element) {
         element.style.background = "black";
      });
      switchTextColorSixS.forEach(function (element) {
         element.classList.add("switch-color-text-black");
      });
      textTitlePartBlue.forEach(function (element) {
         element.style.color = "#5567EA";
      });
      borderColorSwitch.forEach(function (element) {
         element.classList.add("border-blue");
      });
      showHideBlueWheel.forEach(function (element) {
         element.classList.remove("none");
      });
      showHideYellowWheel.forEach(function (element) {
         element.classList.add("none");
      });
      winterContent.style.display = "none";
      summerContent.style.display = "flex";
      headerLine.style.background = "#ffc93a";
      underBiker.style.background = "#ffc93a";
      secondLineHeader.style.background = "#fff9e8";
      headerList.style.color = "black";
      header2List.style.color = "black";
      searchZoneHeaderClass.classList.add("custom-placeholder-style");

      searchZoneHeader.style.border = "2px solid black";
      searchZoneHeader.style.background = "#ffdd64";
      searchZoneHeader.style.color = "black";
      placeholderElement.style.color = "black";
      blueFake.style.background = "#ffc93a";
      grayFake.style.background = "#fff9e8";
      numberHeader.style.color = "#5567EA";
      backgroundHeaderRightPhoto.classList.add("summer");
      backgroundHeaderLeftPhoto.classList.add("summer");
      backgroundHeader.classList.add("summer");
      // // searchIconSwitchB.classList.remove("none");
      // // searchIconSwitchW.classList.add("none");
      bgSixSection.classList.add("summer");
      bgSixSection.style.backgroundColor = "unset";

      runStringFirst.classList.add("roll-park-list-black");
      runStringSecond.classList.add("roll-park-list-black");
      yellowBlock.style.background = "white";
      sixSectionTitle.classList.add("text-gradient");
      // fourSectionContainerHide.classList.remove("none");
      // fiveSectionContainerHide.classList.remove("none");
      // thirdSectionContainerHide.classList.remove("none");
   }
});

// Фильтр в каталоге

// const priceSlider = document.getElementById("price-slider");
// const priceMin = document.getElementById("price-min");
// const priceMax = document.getElementById("price-max");
// const inputMin = document.getElementById("input-min");
// const inputMax = document.getElementById("input-max");

// noUiSlider.create(priceSlider, {
//    start: [300, 50000],
//    connect: true,
//    range: {
//       min: 300,
//       max: 50000,
//    },
//    handles: true, // Добавлено для отображения кружочков
// });

// priceSlider.noUiSlider.on("update", function (values, handle) {
//    if (handle === 0) {
//       priceMin.textContent = "от " + Math.round(values[0]);
//       inputMin.value = Math.round(values[0]);
//    }
//    if (handle === 1) {
//       priceMax.textContent = "до " + Math.round(values[1]);
//       inputMax.value = Math.round(values[1]);
//    }
// });

// // Обновление значений ползунков при вводе в поля
// inputMin.addEventListener("change", function () {
//    priceSlider.noUiSlider.set([this.value, null]);
// });

// inputMax.addEventListener("change", function () {
//    priceSlider.noUiSlider.set([null, this.value]);
// });
