export const concatStrings = (str1, str2) => `${str1}${str2}`

export const isString = (arg) => typeof arg === 'string'

export const identifySign = (num) => {
    if (num > 0) {
        return 'Положительное число'
    } else if (num < 0) {
        return 'Отрицательное число'
    } else {
        return 'Ноль'
    }
}

export const reverseWords = (str) => {
    const buf = str.split(' ')
    let revbuf = []
    for (let i = buf.length - 1; i >= 0; i--) {
        revbuf.push(buf[i])
    }
    return revbuf.join(" ")
}

export const wordsCount = (str) => {
    if (str.length === 0) return 0
    const buf = str.split(" ")
    return buf.length
}