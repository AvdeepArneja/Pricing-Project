document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle");
    const priceTags = document.querySelectorAll(".price h1");
  
    const annualPrices = ["199.99", "249.99", "399.99"];
    const monthlyPrices = ["19.99", "24.99", "39.99"];
  
    let isAnnual = true;
  
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      isAnnual = !isAnnual;
  
      priceTags.forEach((priceTag, i) => {
        priceTag.innerHTML = isAnnual ? annualPrices[i] : monthlyPrices[i];
      });
    });
  });
  