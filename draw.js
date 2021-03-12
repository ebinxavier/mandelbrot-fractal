const Jimp = require("jimp");

module.exports = (pixels2D, fileName = "file") => {
  const W = pixels2D.length;
  const H = pixels2D[0].length;
  new Jimp(W, H, function (err, image) {
    if (err) throw err;

    pixels2D.forEach((row, y) => {
      row.forEach((color, x) => {
        image.setPixelColor(color, x, y);
      });
    });

    image.write(fileName + ".png", (err) => {
      if (err) throw err;
    });
  });
};
