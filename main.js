"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringUtils_1 = require("./stringUtils");
var finance_1 = require("./finance");
var userManagement_1 = require("./userManagement");
var sequenceUtils_1 = require("./sequenceUtils");
console.log('задание 1: ');
// задание 1
var test = "hello, world";
console.log("Original:", test);
console.log("Capitalised:", (0, stringUtils_1.capitalise)(test));
console.log("Reversed:", (0, stringUtils_1.reverseString)(test));
console.log('');
console.log('задание 2: ');
//задание 2
var loanAmount = 10000;
var interestRate = 5;
var loanTerm = 20;
var monthlyPayment = finance_1.Finance.LoanCalculator.calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
console.log("Monthly Payment for Loan: $".concat(monthlyPayment.toFixed(2)));
var income = 75000;
var taxRate = 25;
var incomeTax = finance_1.Finance.TaxCalculator.calculateIncomeTax(income, taxRate);
console.log("Income Tax: $".concat(incomeTax.toFixed(2)));
console.log('');
console.log('задание 3: ');
//задание 3
var admin = new userManagement_1.UserManagement.Admin.AdminUser('Alice', 'alice@example.com', true);
console.log("".concat(admin.name, " - Super Admin: ").concat(admin.isSuperAdmin));
admin.changeAccessRights(false);
console.log('');
console.log('задание 4: ');
//задание 4
console.log("Fibonacci sequence (first 10 numbers):", (0, sequenceUtils_1.generateFibonacci)(10));
console.log("Prime numbers up to 50:", (0, sequenceUtils_1.generatePrimeNumbers)(50));
