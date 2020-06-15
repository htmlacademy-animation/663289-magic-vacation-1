export default () => {
  const page = document.querySelector(`.screen--prizes`);
  const background = document.querySelector(`.animation-background`);

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
}