import React from 'react';
// Material UI
import Typography from '@material-ui/core/Typography';

import Job from './Job';

export default function Jobs({ jobs }) {
    return (
        <div className="items-list">
            <Typography variant="h2">Jobs Listing</Typography>
            {jobs.map(job => (
                <Job job={job} />
            ))}
        </div>
    );
}
