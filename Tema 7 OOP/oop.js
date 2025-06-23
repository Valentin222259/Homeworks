class Autovehicul {
  constructor(marca, model, culoare, kilometraj) {
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }
  proprietati() {
    return `Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj} km]`;
  }
}

class MasinaDeCurse extends Autovehicul{
    constructor(marca, model, culoare, kilometraj){
        super(marca, model, culoare, kilometraj);
    }
    participaLaCampionat(nr){
        this.nr = nr;
        if(this.nr > 0)
            return `Am castigat locul ${this.nr}.`;
        else return `Nu am castigat niciun premiu.`;
    }
}

const MyCar = new Autovehicul("Audi", "A4", "Rosu", 240000);
const MyCar1 = new Autovehicul("BMW", "Seria 3", "Negru", 321543);
const MyCar2 = new Autovehicul("Mercedes", "C-class", "Alb", 840000);

console.log(MyCar.proprietati());
console.log(MyCar1.proprietati());
console.log(MyCar2.proprietati());

const m1 = new MasinaDeCurse("Toyota", "Turbo", "Verde", "100000");
console.log(m1.participaLaCampionat(2));

const m2 = new MasinaDeCurse("Tesla", "Gri", "Model S", 30000);
console.log(m2.participaLaCampionat(-1));

