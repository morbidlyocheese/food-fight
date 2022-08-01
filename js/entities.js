class Entity {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }

    getName() {
        return console.log('name is: ', this.name);
    }
}

const ted = new Entity('Ted', 0, 0);
ted.getName();