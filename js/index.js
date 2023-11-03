const checkbox = document.querySelector('input[type="checkbox"]');
const winterContent = document.querySelector(".season.winter");
const summerContent = document.querySelector(".season.summer");
const headerLine = document.querySelector(".header-top-blue");
const underBiker = document.querySelector(".under-bike");
const secondLineHeader = document.querySelector(".second-line-header");
const headerList = document.querySelector(".header-1920-list");
const header2List = document.querySelector(".icun-list-h");
const searchZoneHeader = document.getElementById("search-header-1920");

checkbox.addEventListener("change", function () {
  // Определите новый цвет для текста плейсхолдера
  const newPlaceholderColor = this.checked ? "red" : "white";

  // Получите элемент плейсхолдера
  const placeholderElement = searchZoneHeader;

  // Если чекбокс отмечен, установите новый цвет плейсхолдера
  if (this.checked) {
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
  } else {
    // Если чекбокс не отмечен, установите цвет обратно на белый
    winterContent.style.display = "none";
    summerContent.style.display = "flex";
    headerLine.style.background = "#ffc93a";
    underBiker.style.background = "#ffc93a";
    secondLineHeader.style.background = "#fff9e8";
    headerList.style.color = "black";
    header2List.style.color = "black";
    searchZoneHeader.style.border = "2px solid black";
    searchZoneHeader.style.background = "#ffdd64";
    placeholderElement.style.color = newPlaceholderColor;
  }
});
