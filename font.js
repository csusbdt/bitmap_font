window.addEventListener('load', function() {
  window.a = window.a || {};
  a.font   =             {};
//  a.font.isBox = true;

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

  a.font.glyphs = {};
  a.font.glyphs[' '] = { x:   0, y:  00, w: 10, h: 40, ay:  0 };
  a.font.glyphs['A'] = { x:  46, y:  09, w: 39, h: 40, ay:  5 };
  a.font.glyphs['a'] = { x:  86, y:  25, w: 27, h: 25, ay: 15 };
  a.font.glyphs['B'] = { x: 120, y:  09, w: 29, h: 40, ay:  0 };
  a.font.glyphs['b'] = { x: 152, y:   9, w: 27, h: 39, ay:  1 };
  a.font.glyphs['C'] = { x: 184, y:  09, w: 29, h: 40, ay:  0 };
  a.font.glyphs['c'] = { x: 221, y:  23, w: 25, h: 27, ay: 13 };
  a.font.glyphs['D'] = { x: 254, y:  09, w: 29, h: 40, ay:  0 };
  a.font.glyphs['d'] = { x: 288, y:   9, w: 25, h: 39, ay:  1 };
  a.font.glyphs['E'] = { x: 324, y:   9, w: 22, h: 40, ay:  0 };
  a.font.glyphs['e'] = { x: 355, y:  25, w: 24, h: 24, ay: 16 };
  a.font.glyphs['F'] = { x: 390, y:   9, w: 24, h: 40, ay:  0 };
  a.font.glyphs['f'] = { x: 426, y:   9, w: 22, h: 39, ay:  1 };

  a.font.glyphs['G'] = { x:  45, y:  56, w: 36, h: 35, ay:  5 };
  a.font.glyphs['g'] = { x:  85, y:  57, w: 24, h: 35, ay: 15 };
  a.font.glyphs['H'] = { x: 116, y:  54, w: 28, h: 37, ay:  0 };
  a.font.glyphs['h'] = { x: 150, y:  53, w: 23, h: 39, ay:  1 };
  a.font.glyphs['I'] = { x: 183, y:  52, w: 29, h: 40, ay:  0 };
  a.font.glyphs['i'] = { x: 225, y:  54, w: 10, h: 38, ay:  3 };
  a.font.glyphs['J'] = { x: 252, y:  53, w: 24, h: 40, ay:  0 };
  a.font.glyphs['j'] = { x: 288, y:  55, w: 22, h: 35, ay: 16 };
  a.font.glyphs['K'] = { x: 318, y:  55, w: 26, h: 35, ay:  4 };
  a.font.glyphs['k'] = { x: 349, y:  54, w: 21, h: 36, ay:  3 };
  a.font.glyphs['L'] = { x: 384, y:  55, w: 24, h: 34, ay:  5 };
  a.font.glyphs['l'] = { x: 425, y:  53, w:  9, h: 36, ay:  4 };

  a.font.glyphs['M'] = { x:  43, y:  96, w: 36, h: 34, ay:  9 };
  a.font.glyphs['m'] = { x:  80, y: 104, w: 30, h: 25, ay: 10 };
  a.font.glyphs['N'] = { x: 114, y:  97, w: 24, h: 32, ay:  3 };
  a.font.glyphs['n'] = { x: 149, y: 104, w: 19, h: 23, ay: 12 };
  a.font.glyphs['O'] = { x: 183, y:  94, w: 29, h: 35, ay:  0 };
  a.font.glyphs['o'] = { x: 221, y: 104, w: 20, h: 23, ay: 12 };
  a.font.glyphs['P'] = { x: 252, y:  94, w: 27, h: 34, ay:  9 };
  a.font.glyphs['p'] = { x: 286, y:  98, w: 21, h: 31, ay: 19 };
  a.font.glyphs['Q'] = { x: 317, y:  94, w: 30, h: 35, ay:  4 };
  a.font.glyphs['q'] = { x: 356, y:  97, w: 19, h: 32, ay: 20 };
  a.font.glyphs['R'] = { x: 386, y:  93, w: 26, h: 35, ay:  5 };
  a.font.glyphs['r'] = { x: 419, y:  99, w: 22, h: 31, ay:  9 };

  a.font.glyphs['S'] = { x:  42, y: 136, w: 21, h: 35, ay:  1 };
  a.font.glyphs['s'] = { x:  76, y: 144, w: 18, h: 27, ay: 10 };
  a.font.glyphs['T'] = { x: 105, y: 136, w: 28, h: 37, ay:  0 };
  a.font.glyphs['t'] = { x: 140, y: 136, w: 27, h: 36, ay:  0 };
  a.font.glyphs['U'] = { x: 173, y: 136, w: 29, h: 37, ay:  0 };
  a.font.glyphs['u'] = { x: 208, y: 149, w: 26, h: 23, ay: 12 };
  a.font.glyphs['V'] = { x: 239, y: 136, w: 27, h: 38, ay:  0 };
  a.font.glyphs['v'] = { x: 276, y: 146, w: 21, h: 27, ay: 11 };
  a.font.glyphs['W'] = { x: 303, y: 137, w: 39, h: 38, ay:  0 };
  a.font.glyphs['w'] = { x: 345, y: 147, w: 29, h: 26, ay: 11 };
  a.font.glyphs['X'] = { x: 378, y: 136, w: 31, h: 36, ay:  1 };
  a.font.glyphs['x'] = { x: 416, y: 146, w: 20, h: 25, ay: 12 };

  a.font.glyphs['Y'] = { x:  41, y: 179, w: 25, h: 35, ay:  1 };
  a.font.glyphs['y'] = { x:  77, y: 187, w: 18, h: 27, ay: 20 };
  a.font.glyphs['Z'] = { x: 108, y: 179, w: 30, h: 36, ay:  0 };
  a.font.glyphs['z'] = { x: 140, y: 191, w: 27, h: 23, ay: 13 };

  a.font.glyphs['0'] = { x: 343, y: 243, w: 26, h: 40, ay:  5 };
  a.font.glyphs['1'] = { x:  42, y: 242, w: 23, h: 40, ay:  5 };
  a.font.glyphs['2'] = { x:  74, y: 243, w: 28, h: 40, ay:  5 };
  a.font.glyphs['3'] = { x: 109, y: 243, w: 27, h: 40, ay:  5 };
  a.font.glyphs['4'] = { x: 142, y: 243, w: 30, h: 40, ay:  5 };
  a.font.glyphs['5'] = { x: 177, y: 243, w: 28, h: 40, ay:  5 };
  a.font.glyphs['6'] = { x: 209, y: 243, w: 25, h: 40, ay:  5 };
  a.font.glyphs['7'] = { x: 245, y: 243, w: 26, h: 40, ay:  5 };
  a.font.glyphs['8'] = { x: 279, y: 243, w: 24, h: 40, ay:  5 };
  a.font.glyphs['9'] = { x: 312, y: 243, w: 25, h: 40, ay:  5 };

  a.font.glyphs[':'] = { x:  47, y: 310, w: 13, h: 40, ay:  5 };
  a.font.glyphs[';'] = { x:  74, y: 310, w: 28, h: 40, ay: 10 };
  a.font.glyphs[','] = { x: 109, y: 330, w: 27, h: 20, ay: 30 };
  a.font.glyphs['.'] = { x: 142, y: 330, w: 30, h: 20, ay: 30 };
  a.font.glyphs['~'] = { x: 177, y: 320, w: 24, h: 20, ay: 20 };
  a.font.glyphs['@'] = { x: 209, y: 320, w: 25, h: 30, ay: 20 };
  a.font.glyphs['#'] = { x: 241, y: 320, w: 30, h: 28, ay: 22 };
  a.font.glyphs['$'] = { x: 279, y: 310, w: 22, h: 40, ay: 10 };
  a.font.glyphs['%'] = { x: 310, y: 310, w: 28, h: 40, ay: 10 };
  a.font.glyphs['^'] = { x: 343, y: 320, w: 28, h: 20, ay: 10 };
  a.font.glyphs['&'] = { x: 380, y: 310, w: 25, h: 40, ay: 10 };
  a.font.glyphs['*'] = { x: 412, y: 310, w: 25, h: 40, ay: 10 };

  a.font.glyphs['('] = { x:  42, y: 380, w: 23, h: 40, ay: 10 };
  a.font.glyphs[')'] = { x:  74, y: 380, w: 28, h: 40, ay: 10 };
  a.font.glyphs['_'] = { x: 108, y: 405, w: 26, h: 20, ay: 30 };
  a.font.glyphs['-'] = { x: 142, y: 394, w: 30, h: 10, ay: 25 };
  a.font.glyphs['+'] = { x: 177, y: 389, w: 24, h: 21, ay: 20 };
  a.font.glyphs['='] = { x: 209, y: 390, w: 25, h: 18, ay: 24 };
  a.font.glyphs['{'] = { x: 241, y: 377, w: 30, h: 43, ay:  6 };
  a.font.glyphs['}'] = { x: 279, y: 377, w: 30, h: 43, ay:  6 };
  a.font.glyphs['['] = { x: 313, y: 378, w: 21, h: 40, ay: 10 };
  a.font.glyphs[']'] = { x: 346, y: 378, w: 21, h: 40, ay: 10 };
  a.font.glyphs['|'] = { x: 384, y: 378, w: 13, h: 40, ay: 10 };
  a.font.glyphs['\\'] = { x: 410, y: 379, w: 27, h: 38, ay: 12 };

  a.font.glyphs['/'] = { x:  42, y: 446, w: 27, h: 36, ay: 10 };
  a.font.glyphs['"'] = { x: 142, y: 444, w: 30, h: 20, ay:  8 };
  a.font.glyphs['\''] = { x: 177, y: 445, w: 24, h: 17, ay:  8 };
  a.font.glyphs['`'] = { x: 209, y: 445, w: 25, h: 18, ay: 8 };
  a.font.glyphs['!'] = { x: 241, y: 444, w: 30, h: 43, ay:  6 };
  a.font.glyphs['?'] = { x: 279, y: 444, w: 30, h: 43, ay:  6 };

  a.font.draw = function(ctx, text, x, y) {
    ctx.fillStyle = "white";
    ctx.font = "48px serif";
    for (let i = 0; i < text.length; ++i) {
      let c = text.charAt(i);
      if (a.font.glyphs.hasOwnProperty(c)) {
        const g = a.font.glyphs[c];
        ctx.drawImage(a_white_glyphs_48, g.x, g.y, g.w, g.h, x, y + g.ay, g.w, g.h);
        if (a.font.isBox) drawBox(ctx, x, y + g.ay, g.w, g.h);
        x += g.w;
      } else {
        ctx.fillStyle = "white";
        ctx.fillText(c, x, y);
        x += 36;
      }
    }
  }

  /*
  a.font.draw(clockCtx, "AaBbCcDdEeFf"  , 100,   0);
  a.font.draw(clockCtx, "GgHhIiJjKkLl"  , 100,  50);
  a.font.draw(clockCtx, "MmNnOoPpQqRr"  , 100, 100);
  a.font.draw(clockCtx, "SsTtUuVvWwXx"  , 100, 140);
  a.font.draw(clockCtx, "YyZz"          , 100, 180);
  a.font.draw(clockCtx, "1234567890"    , 100, 220);
  a.font.draw(clockCtx, ":;,.~@#$%^&*"  , 100, 260);
  a.font.draw(clockCtx, "()_-+={}[]|\\" , 100, 300);
  a.font.draw(clockCtx, "/\"'`!?"       , 300, 180);
  */
});

