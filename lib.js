function sum(numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}
function avg(numbers) {
    return sum(numbers) / numbers.length;
}
function max(numbers) {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}
function min(numbers) {
    return numbers.reduce((min, curr) => (min < curr ? min : curr), numbers[0]);
}
function med(numbers) {
    return ((numbers.length % 2) == 0 ?
     ((numbers.sort())[numbers.length/2 - 1] + (numbers.sort())[numbers.length/2]) / 2:
     numbers.sort()[(numbers.length - 1)/2]);
}

module.exports = {
    sum,
    avg,
    max,
    min,
    med
};