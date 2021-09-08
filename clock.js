window.addEventListener('load', function() {
  const clockCtx = a_clock.getContext('2d');
  let   t        = 0;

  function clock(millis) {
    const dt = millis / 1000 - t;
    t        = millis / 1000;
    clockCtx.clearRect(0, 0, a_clock.width, a_clock.height);
    const now = new Date();
    let ampm = "AM";
    let hour = now.getHours();
    if (hour > 12) { 
      hour -= 12; 
      ampm = "PM"; 
    }
    if (hour === 0) {
      hour = 12;
    }
    if (hour < 10) hour = "  " + hour;
    let minute = now.getMinutes();
    if (minute < 10) minute = "0" + minute; 
    let seconds = now.getSeconds();
    if (seconds < 10) seconds = "0" + seconds; 
    let s = hour + ":" + minute + ":" + seconds; // + " " + ampm;
    a.font.draw(clockCtx, s, 0, 0);
    a.font.draw(clockCtx, ampm, 200, 0);
    requestAnimationFrame(clock);
  }

  requestAnimationFrame(function(millis) {
    t = millis / 1000;
    requestAnimationFrame(clock);
  });
});

