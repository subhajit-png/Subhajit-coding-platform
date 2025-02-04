class Car{
    #brand;
    #model;

    speed=0;
    isTrunkOpen=false;


    constructor(carDetails){
        this.#brand=carDetails.brand;
        this.#model=carDetails.model;
    }
    displayInfo(){
        const trankStatus=this.isTrunkOpen? 'open':'close';
        
        console.log(`${this.#brand} ${this.#model} ,speed:${this.speed} km/h,trunk:${this.trankStatus}`);
    }


go(){
    this.speed += 5;
    if(!this.isTrunkOpen){
        this.speed+=5;
    }
    if(this.speed>200){
        this.speed=200;
    }
}
brake(){
    this.speed -= 5;
    if(this.speed<0){
        this.speed=0;
    }
}
openTrunk(){
    if(this.speed===0){
        this.isTrunkOpen=true;
    }
}
closeTrunk(){
    this.isTrunkOpen=false;
}
}
class raceCar extends Car{
    acceleration;
    constructor(cartDetails){
        super(cartDetails);
        this.acceleration=cartDetails.acceleration;
    }
    go(){
        this.speed+=this.acceleration;
        if(this.speed>300){
            this.speed=300;
        }
    }
    openTrunk(){
        console.log('race car do not have a trunk');
    }
    closeTrunk(){
        console.log('race car do not have a trunk');
    }
}


const car1=new Car({
  brand:'toyota',
  model:'supra'
});
const car2=new Car({
    brand:'BMW',
    model:'series 8'
});
const RaceCar= new raceCar({
 brand:'lamborghini',
 model:'f1',
 acceleration:20
});
console.log(car1);
console.log(car2);
console.log(RaceCar);
car1.displayInfo();
car1.go();
car1.go();
car1.go();
car1.brake();
car1.openTrunk();
car1.displayInfo();


car2.displayInfo();
car2.go();
car2.brake();
car2.brake();
car2.openTrunk();
car2.displayInfo();
car2.go();
RaceCar.go();
RaceCar.displayInfo();
RaceCar.brake();
RaceCar.openTrunk();
RaceCar.closeTrunk();

