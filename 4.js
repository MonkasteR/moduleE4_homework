// Родительская функция для электроприборов
function ElectricDevice(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}

// Методы родительской функции
ElectricDevice.prototype = {
    plugIn: function() {
        if (!this.pluggedIn) {
            this.pluggedIn = true;
            console.log(this.name + ' включен в розетку.');
        } else {
            console.log(this.name + ' уже включен в розетку.');
        }
    },
    unplug: function() {
        if (this.pluggedIn) {
            this.pluggedIn = false;
            console.log(this.name + ' выключен из розетки.');
        } else {
            console.log(this.name + ' уже выключен из розетки.');
        }
    }
};

// Конкретные приборы
function DeskLamp(brightness) {
    ElectricDevice.call(this, 'Настольная лампа', 50);
    this.brightness = brightness;
}

DeskLamp.prototype = Object.create(ElectricDevice.prototype);
DeskLamp.prototype.constructor = DeskLamp;
DeskLamp.prototype.adjustBrightness = function() {
    console.log('Яркость настольной лампы ' + this.brightness + '%');
};

function TabletLamp(brightness) {
    ElectricDevice.call(this, 'Планшетная лампа', 100);
    this.brightness = brightness;
}

TabletLamp.prototype = Object.create(ElectricDevice.prototype);
TabletLamp.prototype.constructor = TabletLamp;
TabletLamp.prototype.adjustBrightness = function() {
    console.log('Яркость планшетной лампы ' + this.brightness + '%');
}


function Computer(specs) {
    ElectricDevice.call(this, 'Компьютер', 500);
    this.specs = specs;
}

Computer.prototype = Object.create(ElectricDevice.prototype);
Computer.prototype.constructor = Computer;
Computer.prototype.showSpecs = function() {
    console.log('Спецификации компьютера:', this.specs);
};

// Создание экземпляров приборов
var lamp = new DeskLamp(75);
var computer = new Computer({ CPU: 'Intel Core i7', RAM: '16GB', Storage: '1TB' });
var tablet = new TabletLamp(50);


// Включение приборов в розетку
lamp.plugIn();
computer.plugIn();
tablet.plugIn();

// Вызов методов, специфичных для каждого прибора
lamp.adjustBrightness();
computer.showSpecs();
tablet.adjustBrightness();

// Расчет потребляемой мощности
var totalPower = lamp.power + computer.power + tablet.power;
console.log('Потребляемая мощность всех приборов: ' + totalPower + ' Вт.');