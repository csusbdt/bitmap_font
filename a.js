window.a = {};

window.addEventListener('load', function() {
  const clockCtx = a_canvas.getContext('2d');
  let   t        = 0;

  function clock(millis) {
    const dt = millis / 1000 - t;
    t        = millis / 1000;
    clockCtx.clearRect(0, 0, a_canvas.width, a_canvas.height);
    const now = new Date();
    let ampm = "AM";
    let hour = now.getHours();
    if (hour > 12) { 
      hour -= 12; 
      ampm = "PM"; 
    }
    let minute = now.getMinutes();
    if (minute < 10) minute = "0" + minute; 
    let s = hour + ":" + minute + " " + ampm;
    a.font.draw(clockCtx, s, 50, 100);
    requestAnimationFrame(clock);
  }
  requestAnimationFrame(function(millis) {
    t = millis / 1000;
//    requestAnimationFrame(clock);
  });

  clockCtx.drawImage(a_white_glyphs_48, 0, 100);

  function drawBox(ctx, x, y, w, h) {
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo( x     , y     );
    ctx.lineTo( x + w , y     );
    ctx.lineTo( x + w , y + h );
    ctx.lineTo( x     , y + h );
    ctx.lineTo( x     , y     );
    ctx.stroke();
  }

  a.glyphs = {};
  a.glyphs[' '] = { x:   0, y:  00, w: 12, h: 40, ay:  0 };
  a.glyphs['A'] = { x:  46, y:  09, w: 39, h: 40, ay:  0 };
  a.glyphs['a'] = { x:  86, y:  25, w: 27, h: 25, ay: 15 };
  a.glyphs['B'] = { x: 120, y:  09, w: 29, h: 40, ay:  0 };
  a.glyphs['b'] = { x: 152, y:   9, w: 27, h: 39, ay:  1 };
  a.glyphs['C'] = { x: 184, y:  09, w: 29, h: 40, ay:  0 };
  a.glyphs['c'] = { x: 221, y:  23, w: 25, h: 27, ay: 13 };
  a.glyphs['D'] = { x: 254, y:  09, w: 29, h: 40, ay:  0 };
  a.glyphs['d'] = { x: 288, y:   9, w: 25, h: 39, ay:  1 };
  a.glyphs['E'] = { x: 324, y:   9, w: 22, h: 40, ay:  0 };
  a.glyphs['e'] = { x: 355, y:  25, w: 24, h: 24, ay: 16 };
  a.glyphs['F'] = { x: 390, y:   9, w: 24, h: 40, ay:  0 };
  a.glyphs['f'] = { x: 426, y:   9, w: 22, h: 39, ay:  1 };

  a.glyphs['G'] = { x:  45, y:  56, w: 36, h: 35, ay:  0 };
  a.glyphs['g'] = { x:  85, y:  57, w: 24, h: 35, ay: 15 };
  a.glyphs['H'] = { x: 116, y:  54, w: 28, h: 37, ay:  0 };
  a.glyphs['h'] = { x: 150, y:  53, w: 23, h: 39, ay:  1 };
  a.glyphs['I'] = { x: 183, y:  52, w: 29, h: 40, ay:  0 };
  a.glyphs['i'] = { x: 225, y:  54, w: 10, h: 38, ay:  3 };
  a.glyphs['J'] = { x: 252, y:  53, w: 24, h: 40, ay:  0 };
  a.glyphs['j'] = { x: 288, y:  55, w: 22, h: 35, ay: 16 };
  a.glyphs['K'] = { x: 318, y:  55, w: 26, h: 35, ay:  4 };
  a.glyphs['k'] = { x: 349, y:  54, w: 21, h: 36, ay:  3 };
  a.glyphs['L'] = { x: 384, y:  55, w: 24, h: 34, ay:  5 };
  a.glyphs['l'] = { x: 425, y:  53, w:  9, h: 36, ay:  4 };

  a.glyphs['M'] = { x:  43, y:  94, w: 36, h: 35, ay:  0 };
  a.glyphs['m'] = { x:  80, y: 104, w: 30, h: 25, ay: 10 };
  a.glyphs['N'] = { x: 114, y:  97, w: 24, h: 32, ay:  3 };
  a.glyphs['n'] = { x: 149, y: 104, w: 19, h: 23, ay: 12 };
  a.glyphs['O'] = { x: 183, y:  94, w: 29, h: 35, ay:  0 };
  a.glyphs['o'] = { x: 221, y: 104, w: 20, h: 23, ay: 12 };
  a.glyphs['P'] = { x: 252, y:  94, w: 27, h: 34, ay:  1 };
  a.glyphs['p'] = { x: 286, y:  98, w: 21, h: 31, ay: 19 };
  a.glyphs['Q'] = { x: 317, y:  94, w: 30, h: 35, ay:  4 };
  a.glyphs['q'] = { x: 356, y:  97, w: 19, h: 32, ay: 20 };
  a.glyphs['R'] = { x: 386, y:  93, w: 26, h: 35, ay:  5 };
  a.glyphs['r'] = { x: 419, y:  99, w: 22, h: 31, ay:  9 };

  a.glyphs['S'] = { x:  42, y: 136, w: 21, h: 35, ay:  1 };
  a.glyphs['s'] = { x:  76, y: 144, w: 18, h: 27, ay: 10 };
  a.glyphs['T'] = { x: 105, y: 136, w: 28, h: 37, ay:  0 };
  a.glyphs['t'] = { x: 140, y: 136, w: 27, h: 36, ay:  0 };
  a.glyphs['U'] = { x: 173, y: 136, w: 29, h: 37, ay:  0 };
  a.glyphs['u'] = { x: 208, y: 149, w: 26, h: 23, ay: 12 };
  a.glyphs['V'] = { x: 239, y: 136, w: 27, h: 38, ay:  0 };
  a.glyphs['v'] = { x: 276, y: 146, w: 21, h: 27, ay: 11 };
  a.glyphs['W'] = { x: 303, y: 137, w: 39, h: 38, ay:  0 };
  a.glyphs['w'] = { x: 345, y: 147, w: 29, h: 26, ay: 11 };
  a.glyphs['X'] = { x: 378, y: 136, w: 31, h: 36, ay:  1 };
  a.glyphs['x'] = { x: 416, y: 146, w: 20, h: 25, ay: 12 };

  a.glyphs['0'] = { x: 343, y: 243, w: 26, h: 40, ay: 10 };
  a.glyphs['1'] = { x:  42, y: 242, w: 23, h: 40, ay: 10 };
  a.glyphs['2'] = { x:  74, y: 243, w: 28, h: 40, ay: 10 };
  a.glyphs['3'] = { x: 109, y: 243, w: 27, h: 40, ay: 10 };
  a.glyphs['4'] = { x: 142, y: 243, w: 30, h: 40, ay: 10 };
  a.glyphs['5'] = { x: 177, y: 243, w: 28, h: 40, ay: 10 };
  a.glyphs['6'] = { x: 209, y: 243, w: 25, h: 40, ay: 10 };
  a.glyphs['7'] = { x: 245, y: 243, w: 26, h: 40, ay: 10 };
  a.glyphs['8'] = { x: 279, y: 243, w: 24, h: 40, ay: 10 };
  a.glyphs['9'] = { x: 312, y: 243, w: 25, h: 40, ay: 10 };

  a.glyphs[':'] = { x:  42, y: 310, w: 23, h: 40, ay: 10 };

  a.font = {};
  a.font.draw = function(ctx, text, x, y) {
    ctx.fillStyle = "white";
    ctx.font = "48px serif";
    for (let i = 0; i < text.length; ++i) {
      let c = text.charAt(i);
      if (a.glyphs.hasOwnProperty(c)) {
        const g = a.glyphs[c];
        ctx.drawImage(a_white_glyphs_48, g.x, g.y, g.w, g.h, x, y + g.ay, g.w, g.h);
        drawBox(ctx, x, y + g.ay, g.w, g.h);
        x += g.w;
      } else {
        ctx.fillStyle = "white";
        ctx.fillText(c, x, y);
        x += 36;
      }
    }
  }

  a.font.draw(clockCtx, "SsTtUuVvWwXx", 0, 40);
});

