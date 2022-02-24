// Pattern Command
import {Lampe, Lampe2} from './Lampe';

interface Command {
    executer() : void
}

class CommandAllumerLampe implements Command {
    lampe: Lampe;

    constructor(lampe: Lampe) {
        this.lampe = lampe;
    }

    public executer(): void {
        this.lampe.marche(); 
    }
}

class Telecommand {
    emplacement: Command[];

    constructor() {
        this.emplacement = [];
    }

    public setCommand(command: Command) {
        this.emplacement.push(command);
    }

    public boutonPress() {
        if(this.emplacement.length){
            this.emplacement.forEach((func) => func.executer());

        }
    }
}

const lampe = new Lampe;
const lampe2 = new Lampe2;
const commandAllumerLampe = new CommandAllumerLampe(lampe);
const commandAllumerLampe2 = new CommandAllumerLampe(lampe2);
const telecommande = new Telecommand();

telecommande.setCommand(commandAllumerLampe);
telecommande.setCommand(commandAllumerLampe2);

telecommande.boutonPress();