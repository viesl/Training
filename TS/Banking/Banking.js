var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account() {
        this.transactionLog = new TransactionLog();
    }
    Account.prototype.getAccount = function (customerName, accountNumber, accountType, balance) {
        this.customerName = customerName;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.balance = balance;
        this.transactionLog.logTransaction(this.customerName, new Date(), accountType, "Create account", balance, balance);
    };
    Account.prototype.showTransactionLog = function () {
        this.transactionLog.showTransactionLog();
    };
    Account.prototype.displayDetails = function () {
        console.log("Customer Name: " + this.customerName);
        console.log("Customer Account: " + this.accountNumber);
        console.log("Account Type: " + this.accountType);
        console.log("Balance: " + this.balance);
    };
    return Account;
}());
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrentAccount.prototype.deposit = function (amount) {
        this.balance = this.balance + amount;
        this.transactionLog.logTransaction(this.customerName, new Date(), this.accountType, "Deposit funds", amount, this.balance);
    };
    CurrentAccount.prototype.withdraw = function (amount) {
        if (this.balance > amount) {
            var penatly = void 0;
            this.balance = this.balance - amount;
            this.transactionLog.logTransaction(this.customerName, new Date(), this.accountType, "Withdraw funds", amount, this.balance);
            if (this.balance < 500) {
                penatly = (500 - this.balance) / 10;
                this.balance = this.balance - penatly;
                this.transactionLog.logTransaction(this.customerName, new Date(), this.accountType, "Penalty", penatly, this.balance);
            }
        }
        else {
            console.log("You cannot withdraw amount,Please make use of overdraft facility");
        }
    };
    return CurrentAccount;
}(Account));
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SavingAccount.prototype.deposit = function (amount) {
        var interest;
        this.balance = this.balance + amount;
        this.transactionLog.logTransaction(this.customerName, new Date(), this.accountType, "Deposit funds", amount, this.balance);
        interest = (this.balance * 2) / 100;
        this.balance = this.balance + interest;
        this.transactionLog.logTransaction(this.customerName, new Date(), this.accountType, "Adding interest", interest, this.balance);
    };
    SavingAccount.prototype.withdraw = function (amount) {
        if (this.balance > amount) {
            var penatly = void 0;
            this.balance = this.balance - amount;
            this.transactionLog.logTransaction(this.customerName, new Date(), this.accountType, "Withdraw funds", amount, this.balance);
            if (this.balance < 800) {
                penatly = (500 - this.balance) / 10;
                this.balance = this.balance - penatly;
                this.transactionLog.logTransaction(this.customerName, new Date(), this.accountType, "Penalty", penatly, this.balance);
            }
        }
        else {
            console.log("You cannot withdraw amount,Please make use of overdraft facility");
        }
    };
    return SavingAccount;
}(Account));
var Transaction = /** @class */ (function () {
    function Transaction(customerName, date, accountType, description, amount, balance) {
        this.customerName = customerName;
        this.date = date;
        this.accountType = accountType;
        this.description = description;
        this.amount = amount;
        this.balance = balance;
    }
    return Transaction;
}());
var TransactionLog = /** @class */ (function () {
    function TransactionLog() {
        this.transactions = new Array();
    }
    TransactionLog.prototype.logTransaction = function (customerName, date, accountType, description, amount, balance) {
        this.transactions.push(new Transaction(customerName, date, accountType, description, amount, Number(balance.toFixed(2))));
    };
    TransactionLog.prototype.showTransactionLog = function () {
        this.transactions.forEach(function (transaction) {
            console.log(transaction.date, transaction.customerName, transaction.accountType, transaction.description, transaction.amount, transaction.balance);
        });
    };
    return TransactionLog;
}());
var current = new CurrentAccount();
current.getAccount('Vies', 5436456, 'Current', 20000);
current.displayDetails();
current.withdraw(200);
current.deposit(1000);
current.withdraw(200);
current.deposit(1000);
current.withdraw(200);
current.deposit(1000);
current.withdraw(600);
current.withdraw(21600);
var saving = new SavingAccount();
saving.getAccount('Vies', 5436456, 'Saving', 20000);
saving.displayDetails();
saving.withdraw(200);
saving.deposit(1000);
saving.withdraw(200);
saving.deposit(1000);
saving.withdraw(200);
saving.deposit(1000);
saving.withdraw(600);
saving.withdraw(21600);
current.showTransactionLog();
saving.showTransactionLog();
