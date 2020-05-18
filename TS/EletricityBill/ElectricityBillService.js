"use strict";
exports.__esModule = true;
exports.ElectricityBillService = void 0;
var ElectricityBillService = /** @class */ (function () {
    function ElectricityBillService(id, name, unit) {
        this.customer = {
            id: id,
            name: name,
            unit: unit
        };
    }
    ElectricityBillService.prototype.calculateConsumedElectricityBill = function () {
        if (this.customer.unit < 200) {
            return this.customer.unit * 1.2;
        }
        else if (this.customer.unit < 400) {
            return this.customer.unit * 1.5;
        }
        else if (this.customer.unit < 600) {
            return this.customer.unit * 1.8;
        }
        return this.customer.unit * 2.0;
    };
    ElectricityBillService.prototype.calculateTotalBill = function () {
        var initialBill = this.calculateConsumedElectricityBill();
        if (initialBill > 400) {
            return initialBill * 1.15;
        }
        return initialBill;
    };
    ElectricityBillService.prototype.display = function () {
        console.log('Customer Id:', this.customer.id);
        console.log('Customer Name:', this.customer.name);
        console.log('Customer consumed electricity:', this.customer.unit);
        var bill = Number(this.calculateTotalBill().toFixed(2));
        if (bill > 100) {
            console.log('Customer Bill:', bill);
        }
        else {
            console.log('Customer Bill:', bill, '- Too low');
        }
    };
    return ElectricityBillService;
}());
exports.ElectricityBillService = ElectricityBillService;
