var fetch = require('node-fetch');

const baseURL = 'https://jobs.github.com/positions.json';

async function fetchGithub() {
    let resultCount = 1;
    let currentPage = 0;
    const allResults = [];

    console.log('running');

    while (resultCount > 0) {
        const response = await fetch(`${baseURL}?page=${currentPage}`);
        const results = await response.json();

        resultCount = results.length;
        allResults.push(...results);

        console.log('got ', results.length, ' jobs');

        currentPage++;
    }

    console.log('got ', allResults.length, ' jobs');

    console.log(allResults.length);
}

fetchGithub();

module.exports = fetchGithub;
