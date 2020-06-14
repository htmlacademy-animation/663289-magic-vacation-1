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
        background.style.height = `100%`;
      } else {
        background.style.height = 0;
      }
    }
  };

  const observer = new MutationObserver(callback);

  observer.observe(page, config);
}