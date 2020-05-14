abstract class Account
{
    customerName: string;
    accountNumber: number;
    accountType: string;
    balance: number;

    protected transactionLog : TransactionLog;

    constructor () {
        this.transactionLog = new TransactionLog();
    }
 
    public getAccount(customerName: string, accountNumber: number, accountType: string, balance: number)
    {
        this.customerName=customerName;
        this.accountNumber=accountNumber;
        this.accountType=accountType;
        this.balance=balance;

        this.transactionLog.logTransaction(this.customerName, new Date(), accountType, "Create account", balance, balance);
    }

    public showTransactionLog(): void {
        this.transactionLog.showTransactionLog();
    }
 
    public displayDetails(): void 
    {
        console.log(`Customer Name: ${this.customerName}`);
        console.log(`Customer Account: ${this.accountNumber}`);
        console.log(`Account Type: ${this.accountType}`);
        console.log(`Balance: ${this.balance}`);
    }

    abstract deposit(amount: number): void;

    abstract withdraw(amount: number): void;
}
 
class CurrentAccount extends Account
{
 
    public deposit(amount: number): void
    {
        this.balance=this.balance+amount;
        this.transactionLog.logTransaction(this.customerName, new Date(), this.accountType, "Deposit funds", amount, this.balance);
 
    }
 
    public withdraw(amount: number): void 
    {
        if (this.balance > amount) {
            let penatly:number;
            this.balance=this.balance-amount;
            this.transactionLog.logTransaction(this.customerName, new Date(), this.accountType, "Withdraw funds", amount, this.balance);
            if(this.balance<500)
            {
                penatly=(500-this.balance)/10;
                this.balance=this.balance-penatly;
                this.transactionLog.logTransaction(this.customerName, new Date(), this.accountType, "Penalty", penatly, this.balance);
    
            }
        } 
        else
        {
            console.log("You cannot withdraw amount,Please make use of overdraft facility");
        }
    }
    
}
 
class SavingAccount extends Account
{
 
    public deposit(amount: number): void
    {
        let interest:number;
        this.balance=this.balance+amount;
        this.transactionLog.logTransaction(this.customerName, new Date(), this.accountType, "Deposit funds", amount, this.balance);
        interest=(this.balance *2 )/100;
        this.balance=this.balance+interest;
        this.transactionLog.logTransaction(this.customerName, new Date(), this.accountType, "Adding interest", interest, this.balance); 
    }
 
    public withdraw(amount: number): void
    {
        if( this.balance > amount) {
            let penatly:number;
            this.balance=this.balance-amount;
            this.transactionLog.logTransaction(this.customerName, new Date(), this.accountType, "Withdraw funds", amount, this.balance);
            if(this.balance<800)
            {
                penatly=(500-this.balance)/10;
                this.balance=this.balance-penatly;
                this.transactionLog.logTransaction(this.customerName, new Date(), this.accountType, "Penalty", penatly, this.balance);
    
            }
        }
        else
        {
            console.log("You cannot withdraw amount,Please make use of overdraft facility");
        }
    }
    
}

class Transaction {
    customerName: string;
    date: Date;
    accountType: string;
    description: string;
    amount: number;
    balance: number;

    constructor(customerName: string, date: Date, accountType: string, description: string, amount: number, balance: number) {
        this.customerName = customerName;
        this.date = date;
        this.accountType = accountType;
        this.description = description;
        this.amount = amount;
        this.balance = balance;
    }

}

class TransactionLog {
    private transactions: Array<Transaction>;

    constructor () {
        this.transactions = new Array<Transaction>();
    }

    logTransaction(customerName: string, date: Date, accountType: string, description: string, amount: number, balance: number) {
        this.transactions.push(new Transaction(customerName, date, accountType, description, amount, Number(balance.toFixed(2))));
    }

    showTransactionLog(): void {

        this.transactions.forEach(transaction => {
            console.log(transaction.date, transaction.customerName, transaction.accountType, transaction.description, transaction.amount, transaction.balance);
        });
    }
} 

let current=new CurrentAccount();
current.getAccount('Vies',5436456,'Current',20000);
current.displayDetails();
current.withdraw(200);
current.deposit(1000);
current.withdraw(200);
current.deposit(1000);
current.withdraw(200);
current.deposit(1000);
current.withdraw(600);
current.withdraw(21600);

let saving=new SavingAccount();
saving.getAccount('Vies',5436456,'Saving',20000);
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