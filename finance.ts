export namespace Finance {
    export class LoanCalculator {
        static calculateMonthlyPayment(loanAmount: number, interestRate: number, loanTermYears: number): number {
            const monthlyRate = interestRate / 12 / 100;
            const numberOfPayments = loanTermYears * 12;
            return (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
        }
    }

    export class TaxCalculator {
        static calculateIncomeTax(income: number, taxRate: number): number {
            return income * (taxRate / 100);
        }
    }
}
