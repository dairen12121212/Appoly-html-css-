// // slider checkout

// let checkoutIndex = 3;
// let checkoutOffset = 0;

// const checkoutItems = document.querySelectorAll(".checkout__item");
// const checkoutContent = document.querySelector(".checkout__content");
// const checkoutDots = document.querySelectorAll(".checkout__dot");

// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");

// const updateSlider = (direction) => {
//   if (direction === "next" && checkoutIndex < 5) {
//     checkoutIndex++;
//     if (window.innerWidth >= 1440) {
//       checkoutOffset += 130;
//     } else if (window.innerWidth >= 768) {
//       checkoutOffset += 65;
//     }
//   } else if (direction === "prev" && checkoutIndex > 1) {
//     checkoutIndex--;
//     if (window.innerWidth >= 1440) {
//       checkoutOffset -= 130;
//     } else if (window.innerWidth >= 768) {
//       checkoutOffset -= 65;
//     }
//   }

//   checkoutContent.style.transform = `translateX(${-checkoutOffset}px)`;

//   prev.classList.toggle("checkout__button_active", checkoutIndex > 1);
//   next.classList.toggle("checkout__button_active", checkoutIndex < 5);

//   checkoutItems.forEach((item, i) => {
//     item.classList.remove("checkout__item_active");
//     if (checkoutIndex === 3) {
//       checkoutItems[0].classList.add("start");
//       checkoutItems[4].classList.add("end");
//     } else {
//       checkoutItems[0].classList.remove("start");
//       checkoutItems[4].classList.remove("end");
//     }
//     if (i + 1 === checkoutIndex) {
//       item.classList.add("checkout__item_active");
//     }
//   });
// };

// next.addEventListener("click", () => updateSlider("next"));
// prev.addEventListener("click", () => updateSlider("prev"));

// // customers slider

// const customersItems = document.querySelectorAll(".customers__card");
// const customersNav = document.querySelectorAll(".customers__dot");

// let customersIndex = 3;

// const switchSlider = (id) => {
//   console.log(id);
//   customersItems.forEach((item, i) => {
//     item.classList.remove("customers__card_active");
//     if (i + 1 === id) {
//       item.classList.add("customers__card_active");
//     }
//     if (id == 1) {
//       customersItems[1].classList.add("customers_first");
//     } else {
//       customersItems[1].classList.remove("customers_first");
//     }
//     for (let i = 0; i < customersItems.length; i++) {
//       if (i < id - 2 || i > id) {
//         customersItems[i].classList.add("customers_hidden");
//       } else {
//         customersItems[i].classList.remove("customers_hidden");
//       }
//     }
//   });
// };

// const updateSlideByDot = (id) => {
//   customersIndex = id;
//   switchSlider(id);
// };

// customersNav.forEach((item, i) => {
//   item.addEventListener("click", () => {
//     updateSlideByDot(i + 1);
//     customersNav.forEach((dot, index) => {
//       if (index === i) {
//         dot.classList.add("customers__dot_active");
//       } else {
//         dot.classList.remove("customers__dot_active");
//       }
//     });
//   });
// });
