const exempleArray = [1, "name", 2, null, undefined, "true", 5, 0];

function calc(numbers) {
    let sum = 0;
    let count = 0;

    for (const element of numbers) {
        if (typeof element === "number") {
            sum += element;
            count++;
        }
    }

    if (count > 0) {
        const midlNumber = sum / count;
        console.log(midlNumber);
    } else {
        console.log("array doesn't have numbers");
    }
}

calc(exempleArray);