export default () => {
  const TIME_LIMIT = 5 * 60 * 1000;
  const START = Date.now();

  const $gameTimer = document.querySelector(`.game__counter`);

  let timer = setInterval(() => {
    let timePassed = TIME_LIMIT - (Date.now() - START);

    if (timePassed < 1000) {
      clearInterval(timer);
      return;
    }

    const date = new Date(timePassed);
    const time = formatTime(date);

    draw(time);
  }, 1000);

  function draw(time) {
    $gameTimer.innerText = time;
  }

  function formatTime(date) {
    let minutes = date.getMinutes().toString().padStart(2, `0`);
    let seconds = date.getSeconds().toString().padStart(2, `0`);

    return `${minutes}:${seconds}`
  }
}