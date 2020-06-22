export default () => {
  const body = document.querySelector(`body`);
  const pageHeader = document.querySelector(`.page-header`);
  const pageLogo = document.querySelector(`.page-header__logo`);
  const pageFooter = document.querySelector(`.screen__footer`);
  const introDate = document.querySelector(`.intro__date`);
  const introTitle = document.querySelector(`.intro__title`);

  function getRandomTimeOffset(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function createWord(_, className) {
    const span = document.createElement(`span`);
    span.classList.add(className);

    return span;
  }

  function createElement(unit, timer, property) {
    const span = document.createElement(`span`);

    span.textContent = unit;
    span.style.transition = `${property} ${timer}ms ease ${getRandomTimeOffset(500, 720)}ms`;

    return span;
  }

  function prepareWord(word, className) {
    return word
      .split(``)
      .map((letter) => createElement(letter, 500, `transform`, className));
  }

  function prepareText(text, $parent) {
    const words = text
      .split(` `)
      .map((word) => {
        const $word = createWord(word, `intro__word`);
        const $latters = prepareWord(word, $parent.className);
        $latters.forEach((latter) => {
          $word.appendChild(latter);
        });

        return $word;
      });

    $parent.innerHTML = ``;

    words.forEach((item) => {
      $parent.appendChild(item);
    });
  }

  window.onload = () => {
    prepareText(introTitle.innerText, introTitle);
    prepareText(introDate.innerText, introDate);
    setTimeout(() => {
      introTitle.classList.add(`active`);
    }, 100);

    setTimeout(() => {
      introDate.classList.add(`active`);
    }, 1500);

    body.classList.add(`load`);

    pageHeader.style.opacity = 1;
    pageLogo.style.transform = `translateX(0)`;
    pageFooter.style.transform = `translateX(0)`;
  };
};
