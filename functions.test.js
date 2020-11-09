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

//
test('two plus two', () => {

})

