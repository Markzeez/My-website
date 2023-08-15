function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    const hourArrow = document.querySelector(".hour");
    const minuteArrow = document.querySelector(".minute");
    const secondArrow = document.querySelector(".second");
  
    const hourRotation = (hour % 12) * 30 + minute * 0.5;
    const minuteRotation = minute * 6 + second * 0.1;
    const secondRotation = second * 6;
  
    hourArrow.style.transform = `rotate(${hourRotation}deg)`
    minuteArrow.style.transform = `rotate(${minuteRotation}deg)`;
    secondArrow.style.transform = `rotate(${secondRotation}deg)`;
  }
  setInterval(updateClock, 1000);
  
  updateClock();