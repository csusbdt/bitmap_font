window.addEventListener('load', function() {
  window.a = {};

  const clockCtx = a_canvas.getContext('2d');
  let   t   = 0;
  function clock(millis) {
    const dt = millis / 1000 - t;
    t        = millis / 1000;
    clockCtx.clearRect(0, 0, a_canvas.width, a_canvas.height);
    a.font.draw(clockCtx, "" + Math.round(t), 50, 100);
    requestAnimationFrame(clock);
  }
  requestAnimationFrame(function(millis) {
    t = millis / 1000;
//    requestAnimationFrame(clock);
  });

  clockCtx.drawImage(a_white_glyphs_48, 0, 0);
  clockCtx.strokeStyle = "white";
  clockCtx.beginPath();
  clockCtx.moveTo(86, 0);
  clockCtx.lineTo(86, 600);
  clockCtx.moveTo(86 + 28, 0);
  clockCtx.lineTo(86 + 28, 600);

  clockCtx.moveTo(  0, 25);
  clockCtx.lineTo(900, 25);
  clockCtx.moveTo(  0, 25 + 25);
  clockCtx.lineTo(900, 25 + 25);
  clockCtx.stroke();

  a.glyphs = {};
  a.glyphs['a'] = { x: 86, y: 25, w: 25, h: 30, ay: 14 };
  a.glyphs['b'] = { x: 152, y: 10, w: 30, h: 36, ay: 0 };
  a.glyphs['0'] = { x: 86, y: 25, w: 32, h: 30, ay: 20 };
  a.glyphs['1'] = { x: 0, y: 0, w: 32, h: 120, ay: 60 };

  a.font = {};
  a.font.draw = function(ctx, text, x, y) {
    ctx.fillStyle = "white";
    ctx.font = "48px serif";
    for (let i = 0; i < text.length; ++i) {
      let c = text.charAt(i);
      if (a.glyphs.hasOwnProperty(c)) {
        const g = a.glyphs[c];
        ctx.drawImage(a_white_glyphs_48, g.x, g.y, g.w, g.h, x, y + g.ay, g.w, g.h);
        x += g.w;
      } else {
        ctx.fillText(c, x + i * 36, y);
      }
    }
  }

  a.font.draw(clockCtx, "a", 0, 0);
  a.font.draw(clockCtx, "b", 25, 0);
});

