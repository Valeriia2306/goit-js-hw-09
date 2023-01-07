const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.btnStart.addEventListener('click', () => {
  colorChange.startChangeColor();
});
refs.btnStop.addEventListener('click', () => {
  colorChange.stopChangeColor();
});

const colorChange = {
  startChangeColor() {
    this.intercalId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
  },

  stopChangeColor() {
    clearInterval(this.intercalId);
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
  },
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
