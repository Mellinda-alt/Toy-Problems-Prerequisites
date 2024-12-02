// function to calculate salary that remains after payee is cut

function taxCalculator(monthlyTaxablePay) {
    let grossPayMinusTax;
    if (monthlyTaxablePay <= 24000) {
        return(grossPayMinusTax = monthlyTaxablePay * 0.9);
    } else if (monthlyTaxablePay > 24000 && monthlyTaxablePay <= 32333) {
        return (grossPayMinusTax = monthlyTaxablePay * 0.75);
        
    } else if(monthlyTaxablePay > 32333 && monthlyTaxablePay <= 500000) {
        return (grossPayMinusTax = monthlyTaxablePay * 0.7);
    } else if (monthlyTaxablePay > 500000 && monthlyTaxablePay <= 800000) {
        return (grossPayMinusTax = monthlyTaxablePay * 0.67);
        
    } else if (monthlyTaxablePay > 800000) {
        return (grossPayMinusTax = monthlyTaxablePay * 0.65);
        
    } 
}



//function to calculate the amount remainig after nhif cut

function nhif() {
    if (grossPayMinusTax <= 5999) {
        return 'nhif_deduction is' + 150;
    } else if (grossPayMinusTax > 5999 && grossPayMinusTax <= 7999){
        return 'nhif_deduction is ' + 300;
    } else if (grossPayMinusTax > 7999 && grossPayMinusTax <= 11999){
        return 'nhif_deduction is' + 400;
    } else if (grossPayMinusTax > 11999 && grossPayMinusTax <= 14999){
        return 'nhif_deduction is' + 500;
    } else if (grossPayMinusTax > 14999 && grossPayMinusTax <= 19999){
        return 'nhif_deduction is' + 600;
    } else if (grossPayMinusTax > 19999 && grossPayMinusTax <= 24999){
        return 'nhif_deduction is' + 750;
    } else if (grossPayMinusTax > 24999 && grossPayMinusTax <= 29999){
        return 'nhif_deduction is' + 850;
    } else if (grossPayMinusTax > 29999 && grossPayMinusTax <= 34999){
        return 'nhif_deduction is' + 900;
    } else if (grossPayMinusTax > 34999 && grossPayMinusTax <= 39999){
        return 'nhif_deduction is' + 950;
    } else if (grossPayMinusTax > 39999 && grossPayMinusTax <= 44999){
        return 'nhif_deduction is' + 100;
    } else if (grossPayMinusTax > 44999 && grossPayMinusTax <= 49999){
        return 'nhif_deduction is' + 110;
    } else if (grossPayMinusTax > 49999 && grossPayMinusTax <= 59999){
        return 'nhif_deduction is' + 120;
    } else if (grossPayMinusTax > 59999 && grossPayMinusTax <= 69999){
        return 'nhif_deduction is' + 130;
    } else if (grossPayMinusTax > 69999 && grossPayMinusTax <= 79999){
        return 'nhif_deduction is' + 140;
    } else if (grossPayMinusTax > 79999 && grossPayMinusTax <= 89999){
        return 'nhif_deduction is' + 150;
    } else if (grossPayMinusTax > 89999 && grossPayMinusTax <= 99999){
        return 'nhif_deduction is' + 160;
    } else if(grossPayMinusTax >= 100000){
        return 'nhif_deduction is ' + 170;
    }
}
nhif();

// function to calculate the amount remaining after nssf cut

function nssf(nssf_amount) {
    const pensionablePay = nssf_amount;
    if (pensionablePay <= 7000){
        return `pensionablePay is ${pensionablePay * 0.12}`;
    } else if(pensionablePay > 7000 && pensionablePay <= 36000);{
        return `pensionable pay is ${pensionablePay * 0.12}`;
    }
}

taxCalculator();