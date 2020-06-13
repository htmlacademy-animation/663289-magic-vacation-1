export default () => {
  const body = document.querySelector(`body`);
  const pageHeader = document.querySelector(`.page-header`);
  const pageLogo = document.querySelector(`.page-header__logo`);
  const pageFooter = document.querySelector(`.screen__footer`);

  window.onload = () => {
    body.classList.add(`load`);

    pageHeader.style.opacity = 1;
    pageLogo.style.transform = `translateX(0)`;
    pageFooter.style.transform = `translateX(0)`;
  };
};
