const functions = require('./functions')

test('is defined', () => {
    expect(functions.getAge("Rudi", 35)).toBeDefined()
})

// Use toBe() to test for primitive values
test('2 + 2 is equal to 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

// Use toEqual() to test for Objects
test('object assignment', () => {
    const data = {one: 1};
    data["two"] = 2
    expect(data).toEqual({one: 1, two: 2})
})

// Use not.toEqual() to test for Objects to not equal something
test('object assignment', () => {
    const data = {one: 1};
    data["two"] = 2
    expect(data).not.toEqual({one: 2, two: 1})
})

// Use toBeFalsy() to test for falsy values, also have toBeTruthy()
test('test isNull is falsy', () => {
    expect(functions.isNull()).toBeFalsy()
})
test('test isUndefined is falsy', () => {
    expect(functions.isUndefined()).toBeFalsy()
})

// Use toBeUndefined() to test for undefined, also have toBeDefined()
test('test isUndefined is Undefined', () => {
    expect(functions.isUndefined()).toBeUndefined()
})

// You can change together multiple expect statements
test('zero is not null, defined, not truthy, and falsy', () => {
    const z = 0;
    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
})

// Use toBeGreaterThan(orEqual)() / toBeLessThan(orEqual)() to test comparison
// Numbers: Use toBe() to test since they are primitive or test with toEqual()
test('two plus two is greater than 3, greater than or equal to 3.5, to be less than 5, to be less than or equal ' +
    '4.5, to be 4, and to equal 4', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)
    expect(value).toBe(4)
    expect(value).toEqual(4)
})

//Floating Point Numbers: Use toBeCloseTo() to test floating point numbers
test('0.1 plus 0.2 is close to 0.3', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3)
})

// Strings: Use toMatch() to test for Regex patterns
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
})

