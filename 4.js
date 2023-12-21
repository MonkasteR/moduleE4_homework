function toys(power, switcher) {
    // const switcher = true;
    function watt(power) {
        return console.log(`Power of toy is ${power}*${switchOn(switcher)}`);
    }
    function switchOn(switcher) {
        return console.log(switcher);
    }
}
pot = toys(100, true);
pc = toys(200, false);
lamp = toys(300, true);

console.log(pot);
console.log(pc);
console.log(lamp);




