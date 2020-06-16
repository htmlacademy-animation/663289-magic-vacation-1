export default () => {
  const rulesItem = document.querySelector(`.rules__item`);
  const rulesBtn = document.querySelector(`.rules__link`);

  function checkAnimationEnd() {
    rulesBtn.classList.add(`rules__link--full-size`);

    rulesItem.removeEventListener(`animationend`, checkAnimationEnd);
  }

  rulesItem.addEventListener(`animationend`, checkAnimationEnd);
};
