import kaboom from "kaboom";

kaboom({
  background: [134, 135, 247],
  font: "sinko",
  width: 320,
  height: 240,
  scale: 2,
});

const SPEED = 140; // 140 feels like a sweet spot

loadRoot('img/');
loadSprite('block', 'iso-block.png');
loadSprite('banan', 'banan-man.png');
loadSprite('platform', 'platform.png');


scene('game', () => {
  const char = add([
      // text("hello"),
      sprite('banan'),
      pos(120, 80),
      area(),
      body()
  ]);

  onKeyDown('r', () => {
    go('start');
  });
  onKeyDown('left', () => {
    char.move(-SPEED, 0);
  });
  onKeyDown('right', () => {
    char.move(SPEED, 0);
  });
  onKeyDown('space', () => {
    if (char.isGrounded()) char.jump();
  });
  
  add([
      sprite('platform'),
      pos(0, height() - 16),
      area(),
      solid(),
  ]);
  add([
      sprite('platform'),
      pos(16, height() - 16),
      area(),
      solid(),
  ]);
  add([
      sprite('platform'),
      pos(16*2, height() - 16),
      area(),
      solid(),
  ]);
  add([
      sprite('platform'),
      pos(16*3, height() - 16),
      area(),
      solid(),
  ]);
  add([
      sprite('platform'),
      pos(16*4, height() - 16),
      area(),
      solid(),
  ]);
  add([
      sprite('platform'),
      pos(16*5, height() - 16),
      area(),
      solid(),
  ]);
  add([
      sprite('platform'),
      pos(16*6, height() - 16),
      area(),
      solid(),
  ]);
  add([
      sprite('platform'),
      pos(16*7, height() - 16),
      area(),
      solid(),
  ]);
  add([
      sprite('platform'),
      pos(16*8, height() - 16),
      area(),
      solid(),
  ]);
});

scene('start', () => {
  add([
    text('press space to start', { size: 18 }),
    pos(vec2(160, 120)),
    origin('center'),
    color(255, 255, 255)
  ]);

  onKeyRelease('space', () => {
    go('game');
  });
});

go('start');