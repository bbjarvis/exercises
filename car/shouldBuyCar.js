/*

 shouldBuyCar() func should return these based on these inputs:
    ✓  should return true when the car is pink
    ✓  should return false when there are no details about the car
    ✓  should return false when the car is a hatchback
    ✓  should return false when the car is a hatchback and pink
    ✓  should return true when the car has 6 litres/100km and is under or equal to $5,000
    ✓  should return true when the car has 11 litres/100km and is under or equal to $5,000
    ✓  should return false when the car has 6 litres/100km and is over $5,000
    ✓  should return false when the car has 11 litres/100km and is over $5,000
    ✓  should return false when the car has 5 litres/100km and is under or equal to $5,000
    ✓  should return false when the car has 12 litres/100km and is under or equal to $5,000
    ✓  should return undefined when there is no car
*/

const shouldBuyCar = function(car) {
  if (car === undefined) {
    return undefined;
  }
  if (car.type && car.type.toLowerCase() === "hatchback") {
    return false;
  }
  if (car.color && car.color.toLowerCase() === "pink") {
    return true;
  }
  const goodLitres = car.litresPer100km && car.litresPer100km >= 6 && car.litresPer100km <= 11;
  const goodPrice = car.price && car.price <= 5000;

  if (goodLitres && goodPrice) {
    return true;
  }
  return false;
}

module.exports = shouldBuyCar;