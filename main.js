//Task 2
console.log("_________Task 2_________\n")

const lifeInWeeks = (age) => {
    return `You have ${90 * 365 - age * 365} days, ${90 * 52 - age * 52} weeks, and ${90 * 12 - age * 12} months left`
}

console.log(lifeInWeeks(56));


//Task 3
console.log("_________Task 3_________\n")

const calculateBMI = (weight, height) => {
    let bmi = weight / ((height / 100) ** 2);

    if (bmi < 18.5){
        return `Your BMI is ${bmi}, so you are underweight.`
    }
    else if (bmi >= 18.5 && bmi < 24.9){
        return `Your BMI is ${bmi}, so you have a normal weight.`
    }
    else{
        return `"Your BMI is ${bmi}, so you are overweight.`
    }
}

console.log(calculateBMI(1000, 100));
console.log(calculateBMI(78, 182));



//Task 4
console.log("_________Task 4_________\n")

const randomName = (names) => {
    return names[Math.floor(Math.random() * names.length)];
}

console.log(randomName(["Aidana", "Bekbolat", "Mariya", "Aleksandr", "Diana"]));