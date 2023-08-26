function milesToKm(miles) {
  const value = miles * 1.60934;
  return value;
}
let milesMaan = 30;
let milesValue = milesToKm(milesMaan);
console.log(milesValue, "Km");
