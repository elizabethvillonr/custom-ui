import { Card, Drawer, Space, Tag } from 'antd'
import React from 'react'
import { useState } from 'react'
import { JobDescription } from './JobDescription';

export const ExperienceCard = ({ company, jobTitle, techStack, jobActivities }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <Card
      className='timeLine-card'
      size="small"
      title={jobTitle}
    >
      <p>
        {company+' '} 
        {jobActivities.length &&
          <>
            -
            <i><a onClick={() => { setShowDrawer(true) }}> Job description </a></i>
          </>
        }

      </p>

      <Space className='experience-tech-space' wrap size={[0, 8]} >
        {techStack.map((tech) => <Tag color="default"> {tech} </Tag>)}
      </Space>

      <Drawer width={320} placement="right" closable={false} onClose={() => { setShowDrawer(false) }} open={showDrawer}>
        <JobDescription company={company} jobTitle={jobTitle} jobActivities={jobActivities || []} />
      </Drawer>

    </Card>
  )
}
