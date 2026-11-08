 /* DECLERATIONS */
 const button = document.querySelector(".button");
 const clicksHeader = document.querySelector(".clicks");

 const pickaxeButton = document.querySelector(".buy-pickaxe");
 const drillButton = document.querySelector(".buy-drill");
 const tntButton = document.querySelector(".buy-tnt");

 let clicks = 0;
 let cps = 0;

 const PICKAXE_VALUE = 100;
 const DRILL_VALUE = 1000;
 const TNT_VALUE = 10000;

 /* MAIN */
button.addEventListener("click", increaseClicks);

pickaxeButton.addEventListener("click", () => {
    buy(PICKAXE_VALUE, PICKAXE_VALUE / 100);
});

drillButton.addEventListener("click", () => {
     buy(DRILL_VALUE, DRILL_VALUE / 100);
});

tntButton.addEventListener("click", () => {
     buy(TNT_VALUE, TNT_VALUE / 100);
});

// Asynchronously running
 setInterval(() => {
     if (cps > 0) {
         clicks += cps;
         updateUI()
     }
 }, 1000);

 /* FUNCTIONS */

 function increaseClicks() {
     clicks++;
     clicksHeader.textContent = clicks;
 }

 function updateUI() {
     clicksHeader.textContent = clicks;
 }

 function buy(value, amountofCPS) {
     if (clicks >= value) {
         cps += amountofCPS;
         clicks -= value;
     }
 }