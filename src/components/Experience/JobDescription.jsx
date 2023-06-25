import React from 'react'

export const JobDescription = ({company, jobTitle, jobActivities}) => {
  return (
    <div className='job-description'>
      <h3>{company}</h3>
      <strong>{jobTitle}</strong>
      <ul>
        {jobActivities.map( activity => <li>{activity}</li> )}
      </ul>
    </div>
  )
}
