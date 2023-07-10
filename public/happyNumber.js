/**
 * Write an algorithm to determine if a number n is happy.
 *
 * A happy number is a number defined by the following process:
 *
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 *
 * Input: n = 19
 * Output: true
 * Explanation:
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 *
 */

/**
 *
 * @param n
 * @returns {boolean}
 * get the length of the number
 * for loop on the numbers digits and store them into array
 * join the array of number and assign them to n
 * go again
 */
let isHappy = function (n) {
    if (n < 0)
        return false


    while (n !== 1 && n < Math.pow(2,32)) {
        let new_n = 0;
        let N_array = n.toString().split("");

        for (let i = 0; i < N_array.length; i++) {
            new_n += (Number(N_array[i]) * Number(N_array[i]))
        }
        n = new_n;
    }

    return true;

};

console.log(isHappy(2))