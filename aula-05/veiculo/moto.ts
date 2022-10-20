import { Veiculo } from "./veiculo";

export class Moto extends Veiculo{
    empinar(): void{
        console.log(`Empinando como se não houvesse amanhã...`);
    }
}