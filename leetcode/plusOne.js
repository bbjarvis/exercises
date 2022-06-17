/**
 * @param {number[]} digits
 * @return {number[]}
 */
//  const digits = [9,9]
 const digits = [8,9,9]

 var plusOne = function(digits) {

for (let index = digits.length -1; index >= 0; index--) {
    console.log(digits)
    if (digits[index] === 10) {
        digits[index] = 0
        if (!digits[index - 1]) {
            digits.unshift(1)
            break;
        }
        digits[index - 1] += 1 
        continue; 
    }
    if (digits[index] === 10) {
        digits[index] = 0
        if (!digits[index - 1]) {
            digits.unshift(1)
            break;
        }
        digits[index - 1] += 1 
        continue; 
    }    
    digits[index]++
    if (digits[index] === 10) {
        digits[index] = 0
        if (!digits[index - 1]) {
            digits.unshift(1)
            break;
        }
        digits[index - 1] += 1 

        if (digits[index - 1] === 9) { break; }

    } else { break; }
    
}
return digits

//    let tot = 0;
//    let j = 0;
// //    console.log(digits.length)
//     for (let i = digits.length -1; i >= 0; i--) {        
 
//       tot += digits[i]*10**j;
//       j++
//     console.log(digits[i]*10**j)

//     console.log(tot)

//     }
//     console.log(tot)

//     tot ++
//     console.log(tot.toString().length)
//     j = tot.toString().length
//     let totarr = []
//     for (let index = 0; index < tot.toString().length; index++) {
//         j--
//         totarr.push(Math.floor((tot / 10**j) % 10));

        
//     }
// return digits = totarr

    // console.log(totarr)

};
console.log(plusOne(digits))