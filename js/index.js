const checkbox = document.querySelector('input[type="checkbox"]');
const winterContent = document.querySelector(".season.winter");
const summerContent = document.querySelector(".season.summer");
const headerLine = document.querySelector(".header-top-blue");
const underBiker = document.querySelector(".under-bike");
const secondLineHeader = document.querySelector(".second-line-header");
const headerList = document.querySelector(".header-1920-list");
const header2List = document.querySelector(".icun-list-h");
const searchZoneHeader = document.getElementById("search-header-1920");
const summerStatus = document.querySelectorAll(".summer-status");
const winterStatus = document.querySelectorAll(".winter-status");
const numberHeader = document.querySelector(".n-h-y");

const blueFake = document.querySelector(".blue-line-fake");
const grayFake = document.querySelector(".gray-line-fake");

checkbox.addEventListener("change", function () {
   const newPlaceholderColor = this.checked ? "red" : "white";
   const placeholderElement = searchZoneHeader;
   if (this.checked) {
      summerStatus.forEach(function (element) {
         element.classList.add("none");
      });
      winterStatus.forEach(function (element) {
         element.classList.remove("none");
      });
      summerContent.style.display = "none";
      winterContent.style.display = "flex";
      headerLine.style.background = "#5567ea";
      underBiker.style.background = "#5567ea";
      secondLineHeader.style.background = "rgba(232, 234, 251, 0.8)";
      headerList.style.color = "white";
      header2List.style.color = "white";
      searchZoneHeader.style.border = "2px solid #fff";
      searchZoneHeader.style.background = "#5567ea";
      placeholderElement.style.color = newPlaceholderColor;
      blueFake.style.background = "#5567ea";
      grayFake.style.background = "rgba(232, 234, 251, 0.8)";
      numberHeader.style.color = "#FFC93A";
   } else {
      summerStatus.forEach(function (element) {
         element.classList.remove("none");
      });
      winterStatus.forEach(function (element) {
         element.classList.add("none");
      });
      winterContent.style.display = "none";
      summerContent.style.display = "flex";
      headerLine.style.background = "#ffc93a";
      underBiker.style.background = "#ffc93a";
      secondLineHeader.style.background = "#fff9e8";
      headerList.style.color = "black";
      header2List.style.color = "black";
      searchZoneHeader.style.border = "2px solid black";
      searchZoneHeader.style.background = "#ffdd64";
      placeholderElement.style.color = "black";
      blueFake.style.background = "#ffc93a";
      grayFake.style.background = "#fff9e8";
      numberHeader.style.color = "#5567EA";
   }
});
