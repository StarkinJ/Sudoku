function updateSudokuRow() {
    sudokuRow = [];
    for (let i = 1; i <= 9; i++) {
        const element = document.getElementById(i.toString());
        if (element && element.value) {
            sudokuRow.push(parseInt(element.value, 10) || 0);
        } else {
            sudokuRow.push(0);
        }
    }
}

console.log(sudokuRow)

function rowValid() {
    let duplicates = findDuplicates(sudokuRow); // Get the duplicates
    document.querySelectorAll(".sudokuQuadrants input").forEach(input => {
        input.style.backgroundColor = ""; // Reset background color
    });

    if (duplicates.length > 0) { // Check if there are any duplicates
        for (let i = 0; i < duplicates.length; i++) {
            let num = duplicates[i]; // Get the current duplicate number
            const indexes = sudokuRow
                .map((item, index) => item === num ? index : -1)  // Map to the index or -1 for duplicates
                .filter(index => index !== -1);  // Filter out -1 values (non-matches)

            // Change color of duplicate inputs
            indexes.forEach(index => {
                let inputElement = document.getElementById((index + 1).toString());
                if (inputElement) {
                    inputElement.style.backgroundColor = "red";
                }
            });
        }
    }
}


function findDuplicates(arr) {
    const seen = {};
    const duplicates = [];
  
    for (const item of arr) {
        if (item !== 0) { 
            if (seen[item]) {
                duplicates.push(item);
            } else {
                seen[item] = true;
            }
        }
    }
    return duplicates;
 }