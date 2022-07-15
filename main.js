import kaboom from "kaboom";

kaboom({
  background: [134, 135, 247],
  width: 320,
  height: 240,
  scale: 2,
});

loadRoot('img/');
loadSprite('block', 'iso-block.png');
loadSprite('banan', 'banan-man.png');

const char = add([
    // text("hello"),
    sprite('banan'),
    pos(120, 80),
    area(),
    body()
]);

add([
    rect(width(), 48),
    pos(0, height() - 48),
    outline(4),
    area(),
    solid(),
    color(127, 200, 255),
]);