//Section 1    Creating Classes & Factories

//Created Hamster Class

class Hamster{
    constructor(name){
        this.owner = "";
        this.name =name;
        this.price= 15;
       }
       wheelRun(){
        console.log("squeak,Squeak");
       }   
       eatFood(){
        console.log("nibble nibble");
       }
       getPrice(){
        return this.price;
       }
    }
    let Hamster1 = new Hamster("Ragdoll" , "shefali");
    let Hamster2 = new Hamster("Sheila", "priya" );

    console.log(Hamster1.name);
    Hamster2.wheelRun();
    console.log(Hamster2.getPrice());
//******************************************************************* */
//Created Person Class

class Person {
    constructor(name){
      this.name = name;
      this.age = 0
      this.height =0
      this.weight =0
      this.mood = 0
      this.hamsters = []
      this.bankAccount = 0;
    }
    getName(){
      return this.name
    }
    getAge(){
      return this.age
    }
    getWeight(){
      return this.weight
    }
    greet(){
      console.log("I am "+ this.name+" Hello !")
    }
    eat(){
      this.weight++
      this.mood++
    }
    exercise(){
      this.weight--
    }
    ageUp(){
      this.age++
      this.height++
      this.weight++
      this.mood--
      this.bankAccount+=10
    }
    buyHamster(hamster){
      this.hamsters.push(hamster)
      this.mood+=10
      this.bankAccount-=hamster.getPrice()
    console.log(this.hamsters)
    }
  }

  let Person1 = new Person("Sassy",50, 5.5,65+"kg","happy" ,64);

  console.log(Person1.getName());
  Person1.greet();
//*********************************************************** */
//Created timmys story

const timmy = new Person('Timmy')
for(let i =0; i < 5; i++){
  timmy.ageUp()
}
for(let i =0; i < 5; i++){
  timmy.eat()
}
for(let i =0; i < 5; i++){
  timmy.exercise()
}
for(let i =0; i < 9; i++){
  timmy.ageUp()
}
const gus = new Hamster('Gus')
gus.owner = 'Timmy'
timmy.buyHamster(gus)
for(let i =0; i < 15; i++){
    timmy.ageUp()
  }
  timmy.eat();
  timmy.eat()
  timmy.exercise()
  timmy.exercise()
  const hamster =  new Hamster(timmy,gus,100)
  timmy.buyHamster(hamster);
  console.log(timmy);
//******************************************************* */
//Chef make Dinners    --Dinner is served
class Dinner{
    constructor(type ,appetizer,entry,desert){     
         this.type= type;
        this.appetizer =appetizer;
        this.entry = entry;
        this.desert =desert;
    }
 }
    class chefFactory{
       constructor(factoryType){
        this.factoryType= factoryType;
        this.dinner = [];
       }
    makeNewdinner(appetizer, entry, desert)   {
      const newDinner = new Dinner(this.factoryType,appetizer, entry, desert);     
         this.dinner.push( newDinner);
    }
     printdinner(){
       for(let chef of this.dinner ){
         console.log(chef)
       }
     }
  } 
let DinnerFactory = new chefFactory("Dinner")
console.log(DinnerFactory);

  let chef1 = new chefFactory("Dinner1");                     
  chef1.makeNewdinner("Bhaji","Biriyani" ,"Jamun")
  chef1.printdinner()

  let chef2 = new chefFactory('Dinner2');
  chef2.makeNewdinner("Chole","Chicken" ,"Rabdi")
  chef2.printdinner()

  let chef3 = new chefFactory('Dinner3');
  chef3.makeNewdinner("Naan","Shrimp","Kaju")
  chef3.printdinner()

