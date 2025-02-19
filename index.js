// Created by: Maria Gracy de Guzman



function validPassword(pass1, pass2) {
    var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', "x", 'y', 'z']
    var upperC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    if (pass1.length === 9 && pass2.length === 9 && pass1 === pass2) {
        var countnum = 0;
        var countlet = 0;

        for (let a = 0; a < pass1.length; a++) {
            for (let n = 0; n < 10; n++) { // check if there's at least a number is present
                if (pass1[a] == numbers[n]) {
                    countnum++
                } else {
                    continue;
                }

            }
            for (let b = 0; b < upperC.length; b++) {
                if (pass1[a] == upperC[b]) {
                    countlet++
                } else {
                    continue;
                }
            }
            for (let c = 0; c < lowerC.length; c++) {
                if (pass1[a] == lowerC[c]) {
                    countlet++
                } else {
                    continue;
                }
            }
        }
        if (countnum > 0 && countlet > 0) {
            return reversePassword(pass1);
        }
    } else {
        return pass1;
    }
}

function reversePassword(pass) { //reverses password
    var newPass = pass.split('').reverse().join('');

    return newPass;
}

function storePassword(user, pass1, pass2) { // stores 3 parameters then returns a key containing the name and new pass
    var newPass = validPassword(pass1, pass2);

    var user = {
        name: user,
        newpassword: newPass
    }

    return user
}

console.log(storePassword("Gracy", "Hello1234", "Hello1234"))
console.log(storePassword("Gracy", "Hello123", "Hello1234"))