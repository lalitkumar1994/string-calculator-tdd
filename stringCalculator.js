function add(numbers) {
    if (!numbers) return 0; // Return 0 for empty string
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const match = numbers.match(/^\/\/(.+)\n/);
        if (match) {
            delimiter = new RegExp(match[1]);
            numbers = numbers.slice(match[0].length);
        }
    }

    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;