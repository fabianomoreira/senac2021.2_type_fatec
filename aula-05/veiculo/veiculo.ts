export class Veiculo{
    cor: string;
    fabricante: string;
    modelo: string;

    acelerar(valor: number): void {
        console.log(`Acelerando até ${valor}`);
    }

    parar(): void {
        console.log(`Parado`);
    }
}