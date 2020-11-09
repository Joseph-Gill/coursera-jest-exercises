const fetch = require('node-fetch');

const getPeople = () => {
    return fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results
            }
        })
        .catch(error => error)
};

module.exports = getPeople;