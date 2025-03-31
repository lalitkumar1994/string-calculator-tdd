function add(numbers) {
    if (!numbers) return 0; // Return 0 for empty string
    return numbers.split(/,|\n/).map(Number).reduce((sum, num) => sum + num, 0);
}

module.exports = add;