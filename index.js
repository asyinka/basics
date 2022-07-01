let fullName = "George Bush";
let firstName;
let lastName;
// firstName = fullName.slice(0, 6)
// lastName = fullName.slice(7)

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1)

console.log(firstName + " You are welcome");
console.log(lastName);