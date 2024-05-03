const sliderItem = document.querySelectorAll(".slider-item");
// gán
for (let index = 0; index < sliderItem.length; index++) {
  sliderItem[index].style.left = index * 100 + "%";
}

const sliderItems = document.querySelector(".slider-items");
const arrowRight = document.querySelector(".ri-arrow-right-circle-fill");
const arrowLeft = document.querySelector(".ri-arrow-left-circle-fill");

function sliderMove(i) {
  sliderItems.style.left = -i * 100 + "%";
}
let i = 0;
if (arrowRight != null && arrowLeft != null) {
  arrowRight.addEventListener("click", () => {
    if (i < sliderItem.length - 1) {
      i++;
      sliderMove(i);
    } else {
      return false;
    }
  });
  arrowLeft.addEventListener("click", () => {
    if (i <= 0) {
      return false;
    } else {
      i--;
      sliderMove(i);
    }
  });
}

function autoSlider() {
  if (i < sliderItem.length - 1) {
    i++;
    sliderMove(i);
    console.log(i);
  } else {
    i = 0;
    sliderMove(i);
  }
}
setInterval(autoSlider, 7000);

// navbar responsive mobile
const Menubar = document.querySelector(".header-bar-icon");
const headerNav = document.querySelector(".header-nav");
Menubar.addEventListener("click", () => {
  headerNav.classList.toggle("active");
});

// click product image detail
const imageSmall = document.querySelectorAll(".product-images-items img");
const imageMain = document.querySelector(".main-image");
for (let index = 0; index < imageSmall.length; index++) {
  imageSmall[index].addEventListener("click", () => {
    imageMain.src = imageSmall[index].src;

    for (let a = 0; a < imageSmall.length; a++) {
      imageSmall[a].classList.remove("active");
    }
    imageSmall[index].classList.add("active");
  });
}

// quantity product
const quantityPlus = document.querySelector(".ri-add-fill");
const quantityMinus = document.querySelector(".ri-subtract-fill");
const quantityInput = document.querySelector(".quantity-input");
let qty = 1;
quantityPlus.addEventListener("click", () => {
  qty++;
  quantityInput.value = qty;
  console.log(quantityInput.value);
});
quantityMinus.addEventListener("click", () => {
  if (qty <= 1) {
    return false;
  } else {
    qty--;
    quantityInput.value = qty;
  }
});
