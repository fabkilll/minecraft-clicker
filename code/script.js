 /* DECLERATIONS */
 const button = document.querySelector(".button");
 const clicksHeader = document.querySelector(".clicks");
 const multiplierHeader = document.querySelector(".multiplier");

 const pickaxeButton = document.querySelector(".buy-pickaxe");
 const drillButton = document.querySelector(".buy-drill");
 const tntButton = document.querySelector(".buy-tnt");

 const rebirthButton = document.querySelector(".rebirth-button");

 let clicksForRebirth = 10000;
 let clicks = 10000;
 let cps = 0;
 let multiplier = 1;

 const PICKAXE_VALUE = 100;
 const DRILL_VALUE = 1000;
 const TNT_VALUE = 10000;

 /* MAIN */
 updateUI();

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

rebirthButton.addEventListener("click", rebirth);

// Asynchronously running
 setInterval(() => {
     if (cps > 0) {
         clicks += cps;
         updateUI()
     }
 }, 1000);

 /* FUNCTIONS */

 function increaseClicks() {
     clicks += 1 * multiplier;
     clicksHeader.textContent = clicks;
 }

 function updateUI() {
     clicksHeader.textContent = clicks;
 }

 function rebirth() {
     if (clicks >= clicksForRebirth) {
         multiplier*= 2;
         multiplierHeader.textContent = `Multiplier: ${multiplier}x`;

         clicks -= clicksForRebirth;
         clicksForRebirth*= 2;

         rebirthButton.textContent = `Rebirth (${clicksForRebirth} Clicks)`;

         updateUI();
     }
 }

 function buy(value, amountofCPS) {
     if (clicks >= value) {
         cps += amountofCPS * multiplier;
         clicks -= value;
         updateUI();
     }
 }