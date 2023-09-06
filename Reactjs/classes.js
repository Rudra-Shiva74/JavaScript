class Car {
    constructor(name) {
        this.brand = name;
    }
    present() {
        return 'i am a ' + this.brand;
    }
}

class Modal extends Car {
    constructor(name, mod) {
        super(name);
        this.modal = mod;
    }
}

const Mycar = new Car("Ford");
const modal = new Modal("Ford", "2014");
console.log(modal.present());
console.log(Mycar.brand);
console.log(Mycar.present());