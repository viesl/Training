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
    ElectricityBillService.prototype.calculateElectricityBill = function () {
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
        var initialBill = this.calculateElectricityBill();
        if (initialBill > 400 || initialBill < 100) {
            return initialBill * 1.15;
        }
        return initialBill;
    };
    ElectricityBillService.prototype.display = function () {
        console.log('Customer Id:', this.customer.id);
        console.log('Customer Name:', this.customer.name);
        console.log('Customer consumed electricity:', this.customer.unit);
        console.log('Customer Bill:', this.calculateTotalBill().toFixed(2));
    };
    return ElectricityBillService;
}());
exports.ElectricityBillService = ElectricityBillService;
