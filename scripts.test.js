const getPeople = require('./scripts');

//Async API: Use expect.assertions(#) to tell Jest how many assertions to expect to receive inside of the actual test
// Then use a return before your function using a Promise to have the assertions returned to Jest
// The downside of this test is it tests the API, with the functionality of the code, which takes more time
test('calls swapi to get people with a promise', () => {
    expect.assertions(2)
    return getPeople()
        .then(data => {
            expect(data.count).toEqual(82)
            expect(data.count).not.toEqual(42)
        })
})