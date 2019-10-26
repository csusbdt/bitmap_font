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
    requestAnimationFrame(clock);
  });

  clockCtx.drawImage(a_white_glyphs_48, 200, 0);

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
  a.glyphs['A'] = { x:  46, y:  09, w: 39, h: 40, ay: 10 };
  a.glyphs['a'] = { x:  86, y:  25, w: 27, h: 25, ay: 14 };
  a.glyphs['b'] = { x: 152, y:   9, w: 27, h: 39, ay: 0  };
  a.glyphs['c'] = { x: 221, y:  23, w: 25, h: 27, ay: 12 };
  a.glyphs['d'] = { x: 288, y:   9, w: 25, h: 39, ay: 0  };
  a.glyphs['e'] = { x: 355, y:  25, w: 24, h: 24, ay: 15 };
  a.glyphs['f'] = { x: 425, y:   9, w: 23, h: 39, ay: 0  };

  a.glyphs['M'] = { x:  43, y:  90, w: 36, h: 40, ay: 10 };
  a.glyphs['P'] = { x: 251, y:  92, w: 28, h: 38, ay: 12 };

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
        //drawBox(ctx, x, y + g.ay, g.w, g.h);
        x += g.w;
      } else {
        ctx.fillStyle = "white";
        ctx.fillText(c, x, y);
        x += 36;
      }
    }
  }

  //a.font.draw(clockCtx, "7:04 PM", 0, 40);
});

