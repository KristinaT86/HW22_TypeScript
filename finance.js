"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance = void 0;
var Finance;
(function (Finance) {
    var LoanCalculator = /** @class */ (function () {
        function LoanCalculator() {
        }
        LoanCalculator.calculateMonthlyPayment = function (loanAmount, interestRate, loanTermYears) {
            var monthlyRate = interestRate / 12 / 100;
            var numberOfPayments = loanTermYears * 12;
            return (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
        };
        return LoanCalculator;
    }());
    Finance.LoanCalculator = LoanCalculator;
    var TaxCalculator = /** @class */ (function () {
        function TaxCalculator() {
        }
        TaxCalculator.calculateIncomeTax = function (income, taxRate) {
            return income * (taxRate / 100);
        };
        return TaxCalculator;
    }());
    Finance.TaxCalculator = TaxCalculator;
})(Finance || (exports.Finance = Finance = {}));
