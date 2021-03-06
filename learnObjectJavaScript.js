const carro = {
    velAtual: 0,
    acelMax: 10,
    velMax: 220,
    kilometragem: 0,
    somaKm(km){
        this.kilometragem += km
    },
    setVel(numb) {
        if (numb > this.velMax){
            this.velAtual = this.velMax
        } else{
            this.velAtual = numb
        }
    },
    plusVel(acel) {
        if(acel > this.acelMax){
            acel = this.acelMax
        }
        if(this.velAtual + acel >= this.velMax){
            this.velAtual = this.velMax
        } else {
            this.velAtual += acel
        }
        this.somaKm(0.5)
    },
    status() {
        return `Velocidade atual é de : ${this.velAtual}km/h, e kilometragem é de : ${this.kilometragem}km`
    }
}

const uno = {
    modelo: 'mile',
    acelMax: 4,
    velMax: 120,
    kilometragem: 89000.5,
    __proto__: carro,
    status() {
        return `Modelo ${this.modelo}, ${super.status()}`
    }
}

const volvo = {
    modelo: 'V40',
    kilometragem: 8005,
    __proto__: carro
}

const ferrari = {
    modelo: 'F15',
    acelMax: 18,
    velMax: 380,
    kilometragem: 0,
    __proto__: carro
}
