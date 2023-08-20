export default class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
        this.#brand = brand;
        this.#model = model;
        this.#yearOfManufacturing = yearOfManufacturing;
        this.#maxSpeed = maxSpeed;
        this.#maxFuelVolume = maxFuelVolume;
        this.#fuelConsumption = fuelConsumption;
    }

     isValidString(value) {
        return typeof value === 'string' && value.length >= 1 && value.length <= 50;
    }

    get brand() {
        return this.#brand;
    }

    set brand(value) {
        if (this.isValidString(value)) {
            this.#brand = value;
        } else {
            throw new Error('Некорректное значение бренда');
        }
    }

    get model() {
        return this.#model;
    }

    set model(value) {
        if (this.isValidString(value)) {
            this.#model = value;
        } else {
            throw new Error('Некорректное значение модели');
        }
    }


    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set yearOfManufacturing(value) {
        const currentYear = new Date().getFullYear();
        if (Number.isInteger(value) && value >= 1900 && value <= currentYear) {
            this.#yearOfManufacturing = value;
        } else {
            throw new Error('Некорректный год производства');
        }
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxSpeed(value) {
        if (Number.isInteger(value) && value >= 100 && value <= 300) {
            this.#maxSpeed = value;
        } else {
            throw new Error('Некорректная максимальная скорость');
        }
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set maxFuelVolume(value) {
        if (typeof value === 'number' && value >= 5 && value <= 20) {
            this.#maxFuelVolume = value;
        } else {
            throw new Error('Некорректный максимальный объем топливного бака');
        }
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    set fuelConsumption(value) {
        if (typeof value === 'number') {
            this.#fuelConsumption = value;
        } else {
            throw new Error('Некорректный расход топлива');
        }
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return this.#mileage;
    }

    start() {
        if (this.#isStarted) {
            throw new Error('Машина уже заведена');
        } else {
            this.#isStarted = true;
        }
    }

    shutDownEngine() {
        if (!this.#isStarted) {
            throw new Error('Машина ещё не заведена');
        } else {
            this.#isStarted = false;
        }
    }

    fillUpGasTank(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error('Неверное количество топлива для заправки');
        }

        if (this.#currentFuelVolume + amount > this.#maxFuelVolume) {
            throw new Error('Топливный бак переполнен');
        }

        this.#currentFuelVolume += amount;
    }

    drive(speed, hours) {
        if (typeof speed !== 'number' || speed <= 0 || speed > this.#maxSpeed) {
            throw new Error('Неверная скорость');
        }

        if (typeof hours !== 'number' || hours <= 0) {
            throw new Error('Неверное количество часов');
        }

        if (!this.#isStarted) {
            throw new Error('Машина должна быть заведена, чтобы ехать');
        }

        const maxDistance = this.#currentFuelVolume / (this.#fuelConsumption / 100);
        const distance = speed * hours;

        if (distance > maxDistance) {
            throw new Error('Недостаточно топлива');
        }

        this.#currentFuelVolume -= (distance * this.#fuelConsumption) / 100;
        this.#mileage += distance;
    }
}
