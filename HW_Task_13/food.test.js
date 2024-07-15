const { filterFoodPrice, food } = require('./food');

test('Test 1: Filtered array length should be 3', () => {
    const filteredFood = filterFoodPrice(food, 12, 40);
    expect(filteredFood).toHaveLength(3);
});

test('Test 2: Filtered array should contain { kind: "pepper", price: 27 }', () => {
    const filteredFood = filterFoodPrice(food, 12, 40);
    expect(filteredFood).toContainEqual({ kind: 'pepper', price: 27 });
});

test('Test 3: Filtered array should contain elements 2, 3, and 4 of the original food array', () => {
    const filteredFood = filterFoodPrice(food, 12, 40);
    expect(filteredFood).toEqual([food[2], food[3], food[4]]);
});

test('Test 4: Price of the 1st element in the filtered array should be greater than min', () => {
    const filteredFood = filterFoodPrice(food, 12, 40);
    expect(filteredFood[0].price).toBeGreaterThan(12);
});

test('Test 5: Price of the 3rd element in the filtered array should be less than max', () => {
    const filteredFood = filterFoodPrice(food, 12, 40);
    expect(filteredFood[2].price).toBeLessThan(40);
});

test('Test 6: Filtered array should not contain { kind: "lemon", price: 50 }', () => {
    const filteredFood = filterFoodPrice(food, 12, 40);
    expect(filteredFood).not.toContainEqual({ kind: 'lemon', price: 50 });
});

// Additional tests
test('Test 7: Filtered array should only contain objects with price between min and max', () => {
    const filteredFood = filterFoodPrice(food, 12, 40);
    filteredFood.forEach(element => {
        expect(element.price).toBeGreaterThanOrEqual(12);
        expect(element.price).toBeLessThanOrEqual(40);
    });
});

test('Test 8: Filtered array should not contain objects with price less than 12', () => {
    const filteredFood = filterFoodPrice(food, 12, 40);
    filteredFood.forEach(element => {
        expect(element.price).toBeGreaterThanOrEqual(12);
    });
});

test('Test 9: Filtered array should not contain objects with price greater than 40', () => {
    const filteredFood = filterFoodPrice(food, 12, 40);
    filteredFood.forEach(element => {
        expect(element.price).toBeLessThanOrEqual(40);
    });
});