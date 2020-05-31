// O(n) time | O(n) time
const caesarCipherEncryptor = (str, shift) =>
  str
    .split("")
    .map((char) => {
      let newCharCode = char.charCodeAt(0) + (shift % 26);

      if (newCharCode > 122) newCharCode = (newCharCode % 122) + 96;
      if (newCharCode < 97) newCharCode += 26;

      return String.fromCharCode(newCharCode);
    })
    .join("");

console.log(encrypt("xyz", 2));
