// ------------------------- Builder Pattern
interface BuilderOfUser_interface {
   setName(name: string): BuilderOfUser;
   setAge(setAge: number): BuilderOfUser;
   setWeight(setWeight: number): BuilderOfUser;
   build(): { name?: string; age?: number; weight?: number };
}

class BuilderOfUser implements BuilderOfUser_interface {
   private name?: string;
   private age?: number;
   private weight?: number;

   constructor() {
      this.name;
      this.age;
      this.weight;
   }

   setName(name: string) {
      this.name = name;
      return this;
   }

   setAge(age: number) {
      this.age = age;
      return this;
   }

   setWeight(weight: number) {
      this.weight = weight;
      return this;
   }

   reset() {
      this.name = undefined;
      this.age = undefined;
      this.weight = undefined;
   }

   build() {
      const builded = {
         name: this.name,
         age: this.age,
         weight: this.weight,
      };
      this.reset();
      return builded;
   }
}

const builder = new BuilderOfUser();

const florian = builder.setName("Florian").setAge(35).setWeight(70).build();

console.log(florian); // { name: 'Florian', age: 35, weight: 70 }
