const chai = require('chai');
const assert = chai.assert

const shouldBuyCar = require('../shouldBuyCar.js');
/*

Car
price
color
type
litresPer100km
 #shouldBuyCar()
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

describe("#shouldBuyCar()", function() {

  it('should return true if pink', function() {
    const car = {
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    // console.log('printing', shouldBuy)
    assert.isTrue(shouldBuy);
  });

  it("should return false there are no details about the car", function() {
    const car = {
    };
    const shouldBuy = shouldBuyCar(car);
    // console.log('printing', shouldBuy)
    assert.isFalse(shouldBuy);
  });

  it("should return false if it's a hatchback", function() {
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    // console.log('printing', shouldBuy)
    assert.isFalse(shouldBuy);
  });

  it('should return false if pink and hatchback', function() {
    const car = {
      type: "hatchback",
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    // console.log('printing', shouldBuy)
    assert.isFalse(shouldBuy);
  });

  it('should return true if the car has 6 litres/100km and is under of equal to $5,000', function() {
    const car = {
      price: "5000",
      litresPer100km: "6"  
    };
    const shouldBuy = shouldBuyCar(car);
    // console.log('printing', shouldBuy)
    assert.isTrue(shouldBuy);
  });

  it('should return true if the car has 11 litres/100km and is under of equal to $5,000', function() {
    const car = {
      price: "5000",
      litresPer100km: "11"  
    };
    const shouldBuy = shouldBuyCar(car);
    // console.log('printing', shouldBuy)
    assert.isTrue(shouldBuy);
  });

  it("should return false if the car has 6 litres/100km and is over $5,000", function() {
    const car = {
      price: "5001",
      litresPer100km: "6"  
    };
    const shouldBuy = shouldBuyCar(car);
    // console.log('printing', shouldBuy)
    assert.isFalse(shouldBuy);
  });

  it("should return false if the car has 11 litres/100km and is over $5,000", function() {
    const car = {
      price: "5001",
      litresPer100km: "11"  
    };
    const shouldBuy = shouldBuyCar(car);
    // console.log('printing', shouldBuy)
    assert.isFalse(shouldBuy);
  });

  it("should return false if the car has 5 litres/100km and is under of equal to $5,000", function() {
    const car = {
      price: "5000",
      litresPer100km: "5"  
    };
    const shouldBuy = shouldBuyCar(car);
    // console.log('printing', shouldBuy)
    assert.isFalse(shouldBuy);
  });

  it("should return false if the car has 12 litres/100km and is under of equal to $5,000", function() {
    const car = {
      price: "5000",
      litresPer100km: "12"  
    };
    const shouldBuy = shouldBuyCar(car);
    // console.log('printing', shouldBuy)
    assert.isFalse(shouldBuy);
  });

  it("should return undefined when there are is no car", function() {
    const shouldBuy = shouldBuyCar();
    // console.log('printing', shouldBuy)
    assert.isUndefined(shouldBuy);
  });
})