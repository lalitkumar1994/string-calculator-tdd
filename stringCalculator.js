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

    return numbers.split(delimiter).map(Number).reduce((sum, num) => sum + num, 0);
}

module.exports = add;