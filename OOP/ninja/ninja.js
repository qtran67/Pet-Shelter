class Ninja {
    constructor (name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log("Name: " + this.name);
    }

    showStats(){
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
    }

    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor (name, health=200, speed=10, strength=10){
        super(name, health, speed, strength);
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
const sensei = new Sensei("Master Splinter");
sensei.showStats();
sensei.speakWisdom();
sensei.showStats();
