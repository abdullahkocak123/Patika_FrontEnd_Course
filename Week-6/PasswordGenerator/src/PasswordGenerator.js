function generatePassword(length) {
  // Kodunuzu buraya yazınız.

  if (length <= 0 || typeof length !== "number") {
    throw new Error("Geçerli bir uzunluk girin.");
  }

  // Characters which we want to be consisting of
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    // Math.random generates a number between 0 and 1. Multiplying by length and flooring a number will give a random index at char Array;
    const randomCharIndex = Math.floor(Math.random() * chars.length);
    result = result + chars[randomCharIndex];
  }

  return result;
}

module.exports = generatePassword;
