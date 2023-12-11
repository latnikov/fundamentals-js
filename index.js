export const concatStrings = (arguments) => {
    let result = '';
    for (let i = 0; i < arguments.length; i += 1) {
      result += arguments[i];
    }
    return result;
}

export const isString = (arg) => {
    return typeof arg === 'string';
}

export const identifySign = (num) => {
    if (num > 0) {
      return 'Положительное число';
    } else if (num < 0) {
      return 'Отрицательное число';
    } else {
      return 'Ноль';
    }
}

export const reverseWords = (text) => {
    let words = text.split(' ');
    let reversedWords = words.reverse();
    let reversedText = reversedWords.join(' ');
    return reversedText;
}

export const wordsCount = (text) => {
    if (text === '') {
        return '0';
    }
    let words = text.split(' ');
    return words.length;
  }
  