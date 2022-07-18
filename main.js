import kaboom from "kaboom";

kaboom({
  background: [40, 42, 54],
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
loadSprite('ouchie', 'temp_ouch-block.png');

loadRoot('snd/');
loadSound('select', 'menu_browsing.wav');
loadSound('jump', 'jump.wav');
loadSound('hurt', 'hurt.wav');
loadSound('powerup', 'powerup.wav');


scene('game', () => {
  // level/s
  const level = addLevel([
    "@    x    i",
    "==========="
  ], {
    width: 16,
    height: 16,
    pos: vec2(100, 200),
    "@": () => [
      sprite('banan'),
      area(),
      body(),
      origin('bot'),
      'player',
    ],
    "=": () => [
      sprite('platform'),
      area(),
      solid(),
      origin('bot'),
    ],
    "i": () => [
      sprite('block'),
      area(),
      origin('bot'),
      'powerup'
    ],
    "x": () => [
      sprite('ouchie'),
      area(),
      origin('bot'),
      'danger'
    ],
  });

  const char = get('player')[0];
  onKeyDown('r', () => {
    go('start');
  });
  char.onUpdate(() => {
    camPos(char.pos);
  });
  onKeyDown('a', () => {
    char.flipX(false);
    char.move(-SPEED, 0);
  });
  onKeyDown('d', () => {
    char.flipX(true);
    char.move(SPEED, 0);
  });
  onKeyPress('space', () => {
    if (char.isGrounded()) {
      play('jump');
      char.jump();
    };
  });

  char.onCollide('danger', () => {
    // char.pos = level.getPos(0, 0);
    play('hurt');
    addKaboom(char.pos);
    shake(10);
  });
  char.onCollide('powerup', (powerup) => {
    play('powerup');
    destroy(powerup);
  });
});

scene('start', () => {
  add([
    text('press space to start', { size: 18 }),
    pos(vec2(160, 120)),
    origin('center'),
    color(255, 255, 255)
  ]);

  onKeyRelease('space', () => {
    play('select');
    go('game');
  });
});

go('start');