// ------------------------- Builder Pattern imp 2
interface Navbar {
   setColor(color: string): Navbar_Builder;
   setWidth(width: number): Navbar_Builder;
   setTitle(title: string): Navbar_Builder;
   build(): {
      color: string;
      width: number;
      title: string;
   };
}

type colorsTuple = readonly [string, string, string];

class Navbar_Builder implements Navbar {
   private colors: colorsTuple;
   private color: string;
   private width: number = 0;
   private title: string;

   constructor() {
      this.colors = ["red", "yellow", "blue"];
      this.color = "";
      this.width = 0;
      this.title = "";
   }

   setColor(color: string) {
      if (this.colors.includes(color)) {
         this.color = color;
         return this;
      }
      throw new Error(`Color is incorrect; given: ${color}.`);
   }

   setWidth(width?: number) {
      if (!width) {
         this.width = 100;
      } else {
         if (width > 300) {
            throw new Error(`Bad value, max 300px, given: ${width}.`);
         }
         this.width = width;
      }
      return this;
   }

   setTitle(title: string) {
      this.title = title;
      return this;
   }

   build() {
      return {
         color: this.color,
         width: this.width,
         title: this.title,
      };
   }
}

const navbar_Builder = new Navbar_Builder();

const propNavbar = navbar_Builder
   .setColor("red")
   .setWidth()
   .setTitle("proprietaire")
   .build();

const locNavbar = navbar_Builder
   .setColor("blue")
   .setWidth(150)
   .setTitle("locataire")
   .build();

console.log(propNavbar); // { color: 'red', width: 100, title: 'proprietaire' }
console.log(locNavbar); // { color: 'blue', width: 150, title: 'locataire' }
