function addStrings(str1:string, str2:string) {
  let carry = 0;
  let result = 0;
  let exponent = 1;

  const maxLength = Math.max(str1.length, str2.length);

  const str1Padded = str1.padStart(maxLength, "0");
  const str2Padded = str2.padStart(maxLength, "0");

  for (let i = maxLength - 1; i >= 0; --i) {
    const digit1 = str1Padded[i] || "0";
    const digit2 = str2Padded[i] || "0";
    let sum = +digit1 + +digit2 + carry;

    if (sum > 9) {
      sum = 10;
      carry = 1;
    } else {
      carry = 0;
    }

    result += +sum * exponent;
    exponent *= 10;
  }
  return result;
}

console.log(addStrings("123", "1486")); // 1609
