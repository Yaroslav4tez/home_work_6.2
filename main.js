const exempleArray = [1, "name", 2, null, undefined, "true", 5, 0];

function calc(...numbers) {
    let sum = 0;
    let count = 0;
    for (let index = 0; index < numbers.length; index++) {
        const result = numbers[index];
        const noZero = result.filter(num => num !== 0);
        for (const element of noZero) { 
            
            if (typeof element === "number") {
                sum += element;
                count++;
                
            } 
                  
        }       
    
    } if (count > 0) {
        const midlNumber = sum / count;
        console.log(midlNumber);
        
    } else {
        console.log("array dont have numbers");
    }

}  

calc(exempleArray);