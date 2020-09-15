export default () => {
  const page = document.querySelector(`.screen--prizes`);
  const background = document.querySelector(`.animation-background`);
  const secondPrizeNum = document.querySelector(`#second-prize`);
  const additionalPrizeNum = document.querySelector(`#additional-prize`);

  secondPrizeNum.addEventListener(`animationend`, function () {
    increaseNums(secondPrizeNum, {from: 0, to: 7}, {ms: 1000, fmt: Math.round});
    increaseNums(additionalPrizeNum, {from: 11, to: 900}, {ms: 1000, fmt: Math.round});
  });

  function render($el, val, fmt) {
    $el.innerText = fmt(val);
  }

  function next({from, to}, {ms, duration}) {
    if (duration >= ms) {
      return to;
    }

    if (duration === 0) {
      return from;
    }

    return from + (to - from) * (duration / ms);
  }

  function increaseNums($el, {from, to}, {ms = 1000, fmt = (val) => val} = {}) {
    let canceled = false;
    const since = Date.now();

    function tick() {
      const duration = Date.now() - since;
      const val = next({from, to}, {ms, duration});

      if (canceled || Math.abs(val) > Math.abs(to)) {
        return;
      }

      requestAnimationFrame(() => {
        render($el, val, fmt);
        tick();
      });
    }

    tick();

    return function cancel() {
      canceled = true;
    }
  }

  const config = {
    attributes: true,
  };

  const callback = function (mutationsList) {
    for (let mutation of mutationsList) {
      const {classList} = mutation.target;

      if (classList.contains(`active`) && classList.contains(`screen--prizes`)) {
        background.classList.add(`animation-background--full-size`);
      } else {
        background.classList.remove(`animation-background--full-size`);
      }
    }
  };

  const observer = new MutationObserver(callback);

  observer.observe(page, config);
};
