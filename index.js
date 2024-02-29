
const generateOTP = (n) => {
    let add = 1, max = 12 - add;

    if (n > max) {
        return generateOTP(max) + generateOTP(n - max);
    }

    max = Math.pow(10, n + add);
    let min = max / 10;
    let number = Math.floor(Math.random() * (max - min + 1)) + min;

    return ("" + number).substring(add);
}



module.exports = {generateOTP}