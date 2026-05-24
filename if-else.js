const age = 32;
if (age < 18) {
  console.log("license will not approved");
} else if (age >= 18 && age <= 60) {
  console.log("License will be approved");
} else if (age > 60 && age <= 100) {
  console.log("License will not be approved");
} else {
  console.log("invalid age");
}
