/**
 * This is a coding challenge problem.
 *
 *
 * The  [ Baseball ] problem, states that, given a set of strings that represents
 * the scores in a baseball match, calulcate the total scores in the given match.
 *
 * You are given a string of operands, `ops`,
 * -  `D`,  records a new score entry. Double the previous score,
 * -  `+`, records a new score entry by adding the sum of the two previous scores
 *    in the match.
 * - `x`, where x is an integer. A new score record for the match
 *
 *
 *  @param ops a list of operands and match scores of which an operation must be performed on
 *  @returns matchSum an integer of the sum of the scores of a given baseball match
 */
const matchSumCount = (ops: string[]): number => {
    let sumCount = 0;
    if (ops.length === 0) return 0;

    for (let char of ops) {
        if (char.match("D")) sumCount = sumCount * 2;
        if (char.match("+")) sumCount = sumCount - 1 + (sumCount - 2);
        if (typeof Number(char) === true) sumCount += char;
    }

    return sumCount;
};
