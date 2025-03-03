// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
    let count = 0;
    for (let char of userPassword) {
        count++;
    }

    if (count < 6) {
        return "Weak";
    } else if (count >= 6 && count <=10) {
        return "Medium";
    } else {
        return "Strong";
    }
}

userPassword = "ssswnalWadqQ"
console.log(checkPasswordStrength(userPassword)); // "Strong"
userPassword = "TechUp"
console.log(checkPasswordStrength(userPassword)); // "Medium"
userPassword = "abcde"
console.log(checkPasswordStrength(userPassword)); // "Weak"
