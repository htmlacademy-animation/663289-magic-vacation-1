export default () => {
  const lastRulesItem = document.querySelector(`.rules__item--fourth`);
  const rulesBtn = document.querySelector(`.rules__link`);

  function checkAnimationEnd() {
    rulesBtn.classList.add(`rules__link--full-size`);

    lastRulesItem.removeEventListener(`animationend`, checkAnimationEnd);
  }

  lastRulesItem.addEventListener(`animationend`, checkAnimationEnd);
};
