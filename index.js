import kaboom from "kaboom";

kaboom({
    scale: 1.5
});

loadRoot('img/');
loadSprite('block', 'iso-block.png');

loadRoot("snd/");
loadSound("laser", "laser.wav");
loadSound("explosion", "explosion.mp3");
loadSound("Steamtech-Mayhem_Looping", "Steamtech-Mayhem_Looping.mp3");

const char = add([
    // text("hello"),
    sprite('block'),
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

add([
    rect(48, 64),
    area(),
    outline(4),
    pos(width() * 2, height() - 48),
    origin("botleft"),
    color(255, 180, 255),
    move(LEFT, 240),
]);

add([
    rect(24, 69),
    area(),
    outline(4),
    pos(width() * 3, height() - 84),
    origin("botleft"),
    color(255, 180, 255),
    move(LEFT, 240),
    "tree", // add a tag here
]);

onKeyPress('space', () => {
    if (char.isGrounded()) char.jump();
});

onKeyPress('a', () => {
    char.move(LEFT, 20);
});

onKeyPress('d', () => {
    char.move(RIGHT, 20);
});

char.onCollide("tree", () => {
    addKaboom(char.pos);
    shake();
});