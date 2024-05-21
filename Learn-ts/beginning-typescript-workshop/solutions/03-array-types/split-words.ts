function splitWords(sentence: string): string[] {
  const words: string[] = [];
  let word: string = '';

  for (let i: number = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      if (word !== '') {
        words.push(word);
        word = '';
      }
    } else {
      word += sentence[i];
    }
  }

  if (word !== '') {
    words.push(word);
  }

  return words;
}
