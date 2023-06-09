function roll() {
  const elements = [...document.getElementsByClassName('slot-roll')];
  elements.forEach(function (slotRoll) {
    slotRoll.classList.add('animation');

    slotRoll.addEventListener('animationend', function () {
      slotRoll.classList.remove('animation');
    });
  });
}