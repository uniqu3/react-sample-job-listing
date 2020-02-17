import React, { Component } from 'react';

// Styles
import './App.css';

// Components
import Jobs from './Components/Jobs';

// TMP
const jobs = [
    {
        title: 'SWE 1',
        company: 'Google',
    },
    {
        title: 'SWE 2',
        company: 'Facebook',
    },
];

function App() {
    return (
        <div className="App">
            <Jobs jobs={jobs} />
        </div>
    );
}

export default App;
