var generator = require("generate-password");
var passwords = generator.generateMultiple(5, {
  length: 8,
  uppercase: false,
});
console.log(passwords);
