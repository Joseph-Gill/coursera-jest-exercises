const {getPeople, isCity} = require('./scripts');
const fetch = require('node-fetch');

// Async API: Use expect.assertions(#) to tell Jest how many assertions to expect to receive inside of the actual test
// Then use a return before your function using a Promise to have the assertions returned to Jest
// The downside of this test is it tests the API, with the functionality of the code, which takes more time
// Remember if you change the functionality to Mock Fetch, pass real tests the actual fetch
test('calls swapi to get people with a promise', () => {
    expect.assertions(2)
    return getPeople(fetch)
        .then(data => {
            expect(data.count).toEqual(82)
            expect(data.count).not.toEqual(42)
        })
})

// Mocking: Use toHaveBeenCalled() to test that a function was called
// Use toHaveBeenCalledTimes(#) to test how many times a function was called
// Use toHaveBeenCalledWith() to test what a function was called with
test('testing captured calls', () => {
    const mock = jest.fn();
    let result = mock('foo');
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith('foo')
})

// Use .mockReturnValue() to mock the return value of a function
test('mock return value', () => {
    const mock = jest.fn();
    mock.mockReturnValue('bar')
    expect(mock('foo')).toBe('bar')
    expect(mock).toHaveBeenCalledWith('foo')
})

// Mock Dependency Injection: Create a mock fetch using .mockReturnValue() which will contain
// a Promise.resolve() with an object containing json, inside of which will be a Promise.resolve
// containing the actual data returned from the call to the API.
// Pass your API function the MockFetch
test('test getPeople with dependency injection', () => {
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 87,
                results: [1,2,3,4,5]
            })
        }))
    expect.assertions(5)
    return getPeople(mockFetch)
        .then(data => {
            expect(mockFetch.mock.calls.length).toEqual(1)
            expect(mockFetch).toBeCalled()
            expect(mockFetch).toHaveBeenCalledTimes(1)
            expect(mockFetch).toHaveBeenCalledWith('https://swapi.dev/api/people')
            expect(data.count).toEqual(87)
        })
})

// Setup / Teardown Code:
let db = [];
const initDb = () => db = ['Vienna', 'London', 'San Juan', 'Zurich'];
const closeDb = () => db = [];

// beforeEach() and afterEach() are Jest functions that execute their code before / after each test
// beforeAll() and afterAll() are Jest functions that execute their code before all tests, and after all tests
beforeEach(() => initDb())
afterEach(() => closeDb())
beforeAll(() => initDb())
afterAll(() => closeDb())

test('city db has Vienna', () => {
    expect(isCity('Vienna', db)).toBeTruthy()
})