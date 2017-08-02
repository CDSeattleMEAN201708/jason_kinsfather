function Ninja(name) {
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;

    this.sayName = function() {
        console.log(this.name);
        return this;
    }
    this.showStats = function() {
        console.log("Health: " + this.health + " Strength: " + strength + " Speed: " + speed);
    }
    this.drinkSake = function() {
        this.health += 10;
    }
    this.punch = function(ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= 5;
            console.log(ninja.name + " was punched by " + this.name + " and lost 5 health");
        } else {
            console.log(this.name + " punched wildly at the air");
        }
    }
    this.kick = function(ninja) {
        if (ninja instanceof Ninja) {
            var damage = 15 * strength;
            ninja.health -= damage;
            console.log(ninja.name + " suffered a swift kick from " + this.name + ". Took " + damage + " damage.");
        } else {
            console.log(this.name + " kicked the empty air");
        }
    }
}

var blue_ninja = new Ninja("Goemon");
var red_ninja = new Ninja("Alan Watts");

blue_ninja.kick(red_ninja);
red_ninja.showStats();

red_ninja.kick("hello world");
red_ninja.punch(blue_ninja);
