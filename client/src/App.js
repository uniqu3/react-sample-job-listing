import React from 'react';

// Styles
import './App.css';

// Components
import Jobs from './Components/Jobs';

const JOB_API_URL = 'http://localhost:3001/jobs';

async function fetchJobs(updateCb) {
    const res = await fetch(JOB_API_URL);
    const json = await res.json();

    updateCb(json);
    //console.log({ json });
}

function App() {
    const [jobList, updateJobs] = React.useState([]);
    React.useEffect(() => {
        fetchJobs(updateJobs);
    }, []);
    return (
        <div className="App">
            <Jobs jobs={jobList} />
        </div>
    );
}

export default App;
