import kaboom from "kaboom";

kaboom({
  background: [134, 135, 247],
  width: 320,
  height: 240,
  scale: 2,
});

const SPEED = 100;

loadRoot('img/');
loadSprite('block', 'iso-block.png');
loadSprite('banan', 'banan-man.png');


scene('game', () => {
  const char = add([
      // text("hello"),
      sprite('banan'),
      pos(120, 80),
      area(),
      body()
  ]);

  onKeyDown('left', () => {
    char.move(-SPEED, 0);
  });
  onKeyDown('right', () => {
    char.move(SPEED, 0);
  });
  onKeyDown('space', () => {
    char.jump();
  });
  
  add([
      rect(width(), 48),
      pos(0, height() - 48),
      outline(4),
      area(),
      solid(),
      color(127, 200, 255),
  ]);
});

scene('start', () => {
  add([
    text('press space to start', { size: 24 }),
    pos(vec2(160, 120)),
    origin('center'),
    color(255, 255, 255)
  ]);

  onKeyRelease('space', () => {
    go('game');
  });
});

go('start');