module.exports = function reverse (n) {
    let newNum = Math.abs(n)
    let str = newNum.toString()
    return str.split('').reverse('').join('')
}