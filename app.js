(function () {
  'use strict';

  const secondHand = document.querySelector('.second-hand');
  const minHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // Removes full rotation of hands at every top of the minute
    const allHands = document.querySelectorAll('.hand');
    if (seconds === 0)  {
      allHands.forEach(hand => hand.style.transition = 'none');
    }
    else {
      allHands.forEach(hand => hand.style.transition = '');
    }



  }
  setInterval(setDate, 1000);

})();
