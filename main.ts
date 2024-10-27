import { capitalise, reverseString } from "./stringUtils";
import { Finance } from "./finance";
import { UserManagement } from "./userManagement";
import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils";


console.log('задание 1: ');
// задание 1
const test = "hello, world";
console.log("Original:", test);
console.log("Capitalised:", capitalise(test));
console.log("Reversed:", reverseString(test));

console.log('');
console.log('задание 2: ');

//задание 2
const loanAmount = 10000;
const interestRate = 5;
const loanTerm = 20;

const monthlyPayment = Finance.LoanCalculator.calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
console.log(`Monthly Payment for Loan: $${monthlyPayment.toFixed(2)}`);

const income = 75000;
const taxRate = 25;
const incomeTax = Finance.TaxCalculator.calculateIncomeTax(income, taxRate);
console.log(`Income Tax: $${incomeTax.toFixed(2)}`);

console.log('');
console.log('задание 3: ');

//задание 3
const admin = new UserManagement.Admin.AdminUser('Alice', 'alice@example.com', true);
console.log(`${admin.name} - Super Admin: ${admin.isSuperAdmin}`);
admin.changeAccessRights(false);

console.log('');
console.log('задание 4: ');

//задание 4
console.log("Fibonacci sequence (first 10 numbers):", generateFibonacci(10));
console.log("Prime numbers up to 50:", generatePrimeNumbers(50));
