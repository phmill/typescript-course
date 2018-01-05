type BankAccount = {money : number, deposit: (number) => void };

let bankAccount: BankAccount = {
    money: 2000,
    deposit (value: number) : void  {
        this.money += value;
    }
};

type Customer = { name: string, bankAccount: BankAccount, hobbies: string[] };
let myself: Customer = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

