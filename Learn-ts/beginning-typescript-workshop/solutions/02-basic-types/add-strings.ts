function addStrings(str1: string, str2: string): number {
  let carry: number = 0;
  let result: number = 0;
  let exponent: number = 1;

  const maxLength: number = Math.max(str1.length, str2.length);

  const str1Padded: string = str1.padStart(maxLength, "0");
  const str2Padded: string = str2.padStart(maxLength, "0");

  for (let i: number = maxLength - 1; i >= 0; --i) {
    const digit1: string = str1Padded[i] || "0";
    const digit2: string = str2Padded[i] || "0";
    let sum = parseInt(digit1) + parseInt(digit2) + carry;

    if (sum > 9) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    result += sum * exponent;
    exponent *= 10;
  }
  return result;
}

console.log(addStrings("123", "1486")); // 1609
