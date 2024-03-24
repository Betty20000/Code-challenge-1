// Function to calculate individual's net salary
function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates, NHIF rates, and NSSF rates
    const taxRate = 0.3; // Assuming a flat 30% tax rate for demonstration
    const nhifRate = 0.05; // 5% NHIF rate
    const nssfRate = 0.06; // 6% NSSF rate

    // Calculate gross salary (basic salary + benefits)
    const grossSalary = basicSalary + benefits;

    // Calculate tax amount
    const tax = grossSalary * taxRate;

    // Calculate NHIF deductions
    const nhifDeductions = grossSalary * nhifRate;

    // Calculate NSSF deductions
    const nssfDeductions = grossSalary * nssfRate;

    // Calculate net salary (gross salary - tax - NHIF deductions - NSSF deductions)
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    // Return an object containing all calculated values
    return {
        grossSalary: grossSalary,
        tax: tax,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}

// Example usage: taking basic salary and benefits input from the user
const basicSalary = parseFloat(prompt("Enter basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"));

// Calculate net salary
const salaryDetails = calculateNetSalary(basicSalary, benefits);

// Display the calculated details
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("Tax:", salaryDetails.tax);
console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
console.log("Net Salary:", salaryDetails.netSalary);
