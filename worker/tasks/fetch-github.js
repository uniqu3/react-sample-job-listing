var fetch = require('node-fetch');
var redis = require('redis');
client = redis.createClient();

const { promisify } = require('util');
//const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

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

        console.log('got ', resultCount, ' jobs');

        currentPage++;
    }

    // Filtering Jobs
    const jrJobs = allResults.filter(job => {
        const jobTitle = job.title.toLowerCase();

        if (
            jobTitle.includes('senior') ||
            jobTitle.includes('manager') ||
            jobTitle.includes('sr.') ||
            jobTitle.includes('architect')
        ) {
            return false;
        }

        return true;
    });

    console.log('filtered down to ', jrJobs.length);

    // Set Redis storage
    const success = await setAsync('github', JSON.stringify(jrJobs));
    console.log('got ', allResults.length, ' jobs');
    console.log({ success });
}

fetchGithub();

module.exports = fetchGithub;
