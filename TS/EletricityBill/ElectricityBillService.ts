import { ICustomer } from "./ICustomer";

export class ElectricityBillService {
    customer: ICustomer;

    constructor (id: number, name: string, unit: number) {
        this.customer = {
            id: id,
            name: name,
            unit: unit
        };
    }

    calculateConsumedElectricityBill(): number {
        if (this.customer.unit < 200){
            return this.customer.unit * 1.2;
        }
        else if (this.customer.unit < 400) {
            return this.customer.unit * 1.5;
        }
        else if (this.customer.unit < 600) {
            return this.customer.unit * 1.8;
        }

        return this.customer.unit * 2.0;
    }

    calculateTotalBill() : number {
        let initialBill = this.calculateConsumedElectricityBill();
        if (initialBill > 400 || initialBill < 100) {
            return initialBill * 1.15;
        }
        return initialBill;
    }

    display() {
        console.log('Customer Id:',this.customer.id);
        console.log('Customer Name:',this.customer.name);
        console.log('Customer consumed electricity:',this.customer.unit);
        console.log('Customer Bill:',this.calculateTotalBill().toFixed(2));  
    }
}