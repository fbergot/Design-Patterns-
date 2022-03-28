// Pattern Command
import { Lampe, Lampe2 } from "./Lampe";
import Television from "./Television";

interface Command {
   start(): void;
   stop(): void;
}

class CommandAllumerLampe implements Command {
   protected lampe: Lampe;
   constructor(lampe: Lampe) {
      this.lampe = lampe;
   }
   public start(): void {
      this.lampe.marche();
   }
   public stop(): void {
      this.lampe.arret();
   }
}

class CommandTele implements Command {
   protected tele: Television;
   constructor(tele: Television) {
      this.tele = tele;
   }
   public start(): void {
      this.tele.on();
   }
   public stop(): void {
      this.tele.off();
   }
}

class Telecommand {
   private emplacement: Command[];

   constructor() {
      this.emplacement = [];
   }

   public setCommand(command: Command) {
      this.emplacement.push(command);
   }

   public start(indexEmp: number[]) {
      if (this.emplacement.length) {
         this.emplacement.forEach((func, index) => {
            if (indexEmp.includes(index)) func.start();
         });
      }
   }
   public end(indexEmp: number[]) {
      if (this.emplacement.length) {
         this.emplacement.forEach((func, index) => {
            if (indexEmp.includes(index)) func.stop();
         });
      }
   }
}

const lampe = new Lampe();
const lampe2 = new Lampe2();

const commandAllumerLampe = new CommandAllumerLampe(lampe);
const commandAllumerLampe2 = new CommandAllumerLampe(lampe2);

const commandTele = new CommandTele(new Television());

const telecommande = new Telecommand();

telecommande.setCommand(commandAllumerLampe);
telecommande.setCommand(commandAllumerLampe2);
telecommande.setCommand(commandTele);

telecommande.start([0, 1, 2]);
telecommande.end([1, 2]);
