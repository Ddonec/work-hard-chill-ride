const cat1 = document.querySelector(".cat-c-1");
const cat2 = document.querySelector(".cat-c-2");
const cat3 = document.querySelector(".cat-c-3");
const cat4 = document.querySelector(".cat-c-4");
const cat5 = document.querySelector(".cat-c-5");
const cat6 = document.querySelector(".cat-c-6");
const cat7 = document.querySelector(".cat-c-7");
const cat8 = document.querySelector(".cat-c-8");

const catC = document.querySelectorAll(".cat-c");

cat1.addEventListener("click", function () {
   catC.forEach(function (element) {
      element.classList.remove("active-category");
   });
   cat1.classList.add("active-category");
});

cat2.addEventListener("click", function () {
   catC.forEach(function (element) {
      element.classList.remove("active-category");
   });
   cat2.classList.add("active-category");
});
cat3.addEventListener("click", function () {
   catC.forEach(function (element) {
      element.classList.remove("active-category");
   });
   cat3.classList.add("active-category");
});
cat4.addEventListener("click", function () {
   catC.forEach(function (element) {
      element.classList.remove("active-category");
   });
   cat4.classList.add("active-category");
});
cat5.addEventListener("click", function () {
   catC.forEach(function (element) {
      element.classList.remove("active-category");
   });
   cat5.classList.add("active-category");
});
cat6.addEventListener("click", function () {
   catC.forEach(function (element) {
      element.classList.remove("active-category");
   });
   cat6.classList.add("active-category");
});
cat7.addEventListener("click", function () {
   catC.forEach(function (element) {
      element.classList.remove("active-category");
   });
   cat7.classList.add("active-category");
});
cat8.addEventListener("click", function () {
   catC.forEach(function (element) {
      element.classList.remove("active-category");
   });
   cat8.classList.add("active-category");
});
