const math = require("mathjs");
const draw = require("./draw");
const MAX = 100;
const { complex, abs, add, pow } = math;

const mandelBrot = (c) => {
  let z = 0;
  let n = 0;
  while (abs(z) <= 2 && n < MAX) {
    z = add(pow(z, 2), c);
    n += 1;
  }
  return n;
};

const getImage = () => {
  const DIM = 1500;
  const W = DIM,
    H = DIM;

  const RE_START = -1.5;
  const RE_END = 1.5;
  const IM_START = -2.5;
  const IM_END = 0.5;

  const pixels2D = [];
  for (let x = 0; x < W; x++) {
    console.log(DIM - x);
    for (let y = 0; y < H; y++) {
      let c = complex(
        IM_START + (y / H) * (IM_END - IM_START),
        RE_START + (x / W) * (RE_END - RE_START)
      );
      const intensity = mandelBrot(c);
      if (!pixels2D[x]) pixels2D[x] = [];
      let color = intensity > MAX / 2 ? intensity * 0xaa00aa : 0;
      if (color > 0xffffff) color = 0xff00ff;
      pixels2D[x][y] = color;
    }
  }
  return pixels2D;
};

draw(getImage());
