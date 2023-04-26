export interface LoanApplication {
  applicationNumber: string;
  loanterms: {
    amount: Number;
    monthlyPaymentAmount: Number;
    term: number;
  };
  personalInfo: {
    name: {
      First: string;
      last: string;
    };
    PhoneNumber: string;
    Email: string;
  };
  dateApplied: Date;
  status: string;
}
