// Define a function to calculate the grades
function calculateGrade(marks) {
    // Check if marks are greater than 79 and assign 'A' grade
   if (marks > 79) {
       return 'A';
   } 
   // Check if marks are greater than or equal to 60 and assign 'B' grade
   else if (marks >= 60) {
       return 'B';
   } 
    // Check if marks are greater than or equal to 50 and assign 'c' grade
   else if (marks >= 50) {
       return 'C';
   } 
    // Check if marks are greater than or equal to 40 and assign 'D' grade
   else if (marks >= 40) {
       return 'D';
   } 
   //checks if marks are less than 40 and assigns E

   else {
       return 'E';
   }
}
// it prompts the user to enter marks
let input = prompt('Enter student marks (between 0 and 100):');
let marks = parseFloat(input);

// Check if the input is a valid number (0 to 100)
if (!isNaN(marks) && marks >= 0 && marks <= 100) {
   let grade = calculateGrade(marks);
   alert(`Grade: ${grade}`);
}
// give an alert if the grade input is invalid
else {
   alert('Invalid input. Marks should be a number between 0 and 100.');
}
