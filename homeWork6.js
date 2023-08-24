const ERROR_MESSAGES = {
    INVALID_STRING: 'Некорректное значение',
    INVALID_YEAR: 'Некорректный год производства',
    INVALID_SPEED: 'Некорректная скорость',
    INVALID_HOURS: 'Неверное количество часов',
    ALREADY_STARTED: 'Машина уже заведена',
    NOT_STARTED: 'Машина ещё не заведена',
    INVALID_FUEL_AMOUNT: 'Неверное количество топлива для заправки',
    FUEL_TANK_OVERFLOW: 'Топливный бак переполнен',
    LOW_FUEL: 'Недостаточно топлива',
};

class Car {
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
        this.#validateAndSet(this._isValidString, brand, 'brand');
        this.#validateAndSet(this._isValidString, model, 'model');
        this.#validateAndSet(this._isValidYear, yearOfManufacturing, 'yearOfManufacturing');
        this.#validateAndSet(this._isValidSpeed, maxSpeed, 'maxSpeed');
        this.#validateAndSet(this._isValidFuelVolume, maxFuelVolume, 'maxFuelVolume');
        this.#validateAndSet(this._isValidFuelConsumption, fuelConsumption, 'fuelConsumption');
    }

    #validateAndSet(validator, value, property) {
        if (validator(value)) {
            this[`#${property}`] = value;
        } else {
            throw new Error(ERROR_MESSAGES[`INVALID_${property.toUpperCase()}`]);
        }
    }

    _isValidString(value) {
        return typeof value === 'string' && value.length >= 1 && value.length <= 50;
    }

    _isValidYear(value) {
        const currentYear = new Date().getFullYear();

        return Number.isInteger(value) && value >= 1900 && value <= currentYear;
    }

    _isValidSpeed(value) {
        return Number.isInteger(value) && value >= 100 && value <= 300;
    }

    _isValidFuelVolume(value) {
        return typeof value === 'number' && value >= 5 && value <= 20;
    }

    _isValidFuelConsumption(value) {
        return typeof value === 'number';
    }

    _isValidFuelAmount(amount) {
        return typeof amount === 'number' && amount > 0;
    }

    _canFillUp(amount) {
        return this.#currentFuelVolume + amount <= this.#maxFuelVolume;
    }

    _isValidSpeedValue(speed) {
        return Number.isInteger(speed) && speed > 0 && speed <= this.#maxSpeed;
    }

    _isValidHoursValue(hours) {
        return Number.isInteger(hours) && hours > 0;
    }

    _isEnoughFuel(distance) {
        return this.#currentFuelVolume >= (distance * this.#fuelConsumption) / 100;
    }

    get brand() {
        return this.#brand;
    }

    set brand(value) {
        if (this._isValidString(value)) {
            this.#brand = value;
        } else {
            throw new Error(ERROR_MESSAGES.INVALID_STRING + ' бренда');
        }
    }

    get model() {
        return this.#model;
    }

    set model(value) {
        if (this._isValidString(value)) {
            this.#model = value;
        } else {
            throw new Error(ERROR_MESSAGES.INVALID_STRING + ' модели');
        }
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set yearOfManufacturing(value) {
        const currentYear = new Date().getFullYear();

        if (this._isValidYear(value, currentYear)) {
            this.#yearOfManufacturing = value;
        } else {
            throw new Error(ERROR_MESSAGES.INVALID_YEAR);
        }
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxSpeed(value) {
        if (this._isValidSpeed(value)) {
            this.#maxSpeed = value;
        } else {
            throw new Error(ERROR_MESSAGES.INVALID_SPEED);
        }
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set maxFuelVolume(value) {
        if (this._isValidFuelVolume(value)) {
            this.#maxFuelVolume = value;
        } else {
            throw new Error(ERROR_MESSAGES.INVALID_FUEL_AMOUNT);
        }
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    set fuelConsumption(value) {
        if (this._isValidFuelConsumption(value)) {
            this.#fuelConsumption = value;
        } else {
            throw new Error(ERROR_MESSAGES.INVALID_FUEL_AMOUNT);
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
            throw new Error(ERROR_MESSAGES.ALREADY_STARTED);
        }
        this.#isStarted = true;
    }

    shutDownEngine() {
        if (!this.#isStarted) {
            throw new Error(ERROR_MESSAGES.NOT_STARTED);
        }
        this.#isStarted = false;
    }

    fillUpGasTank(amount) {
        if (!this._isValidFuelAmount(amount)) {
            throw new Error(ERROR_MESSAGES.INVALID_FUEL_AMOUNT);
        }

        if (!this._canFillUp(amount)) {
            throw new Error(ERROR_MESSAGES.FUEL_TANK_OVERFLOW);
        }

        this.#currentFuelVolume += amount;
    }
    
    drive(speed, hours) {
        if (!this._isValidSpeedValue(speed) || !this._isValidHoursValue(hours)) {
            throw new Error(ERROR_MESSAGES.INVALID_SPEED);
        }

        if (!this.#isStarted) {
            throw new Error(ERROR_MESSAGES.NOT_STARTED);
        }

        const distance = speed * hours;

        if (!this._isEnoughFuel(distance)) {
            throw new Error(ERROR_MESSAGES.LOW_FUEL);
        }
        this.#currentFuelVolume -= (distance * this.#fuelConsumption) / 100;
        this.#mileage += distance;
    }
}

export default Car;