function splitWords(sentence: string): string[] {
  const words: string[] = [];
  let word: string | undefined = undefined;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      if (word !== undefined) {
        words.push(word);
        word = undefined;
      }
    } else {
      if (word == undefined) {
        word = sentence[i];
      } else {
        word += sentence[i];
      }
    }
  }

  if (word !== undefined) {
    words.push(word);
  }

  return words;
}

console.log(splitWords('Hello world')); // ['Hello', 'world']
