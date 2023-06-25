import { Timeline, Row, Col } from 'antd';

import { TimeLineIcon } from './TimeLineIcon';
import { ExperienceCard } from './ExperienceCard';
import { ExperienceLabel } from './ExperienceLabel';
import { EXPERIENCE_LIST } from './myExperience';

export const Experience = () => {
  return (
    <div id="experience" className='app-container'>

      <div className='section-container' style={{marginTop:'50px'}} >

        <Row gutter={16} justify={"center"} >
          <Col xs={24} sm={24} md={20} lg={24} xl={14}>
            <Timeline
              mode="alternate"
              items={EXPERIENCE_LIST.map((exp) => (
                {
                  label: (<ExperienceLabel label={exp.timeLabel} />),
                  dot: (<TimeLineIcon Icon={exp.icon} />),
                  children: (<ExperienceCard company={exp.company} jobTitle={exp.jobTitle} techStack={exp.techStack} jobActivities={exp.jobActivities || []} />)
                }
              ))}
            />
          </Col>
        </Row>

      </div>
    </div>
  )
}
