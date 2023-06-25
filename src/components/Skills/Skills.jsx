import { Col, Row, Space } from 'antd'
import { SkillItem } from './SkillItem';

import { MY_SKILLS } from './mySkills';

export const Skills = () => {
  return (
    <div id="skills" className='app-container'>
      <div className='section-container' >

        <Row gutter={16} justify={"center"}>
          <Col xs={24} sm={24} md={20} lg={12} xl={16}>
            <Space size={[32, 32]} wrap align="center">
              {
                MY_SKILLS.map((skill) => (
                  <SkillItem title={skill.title} level={skill.level} Icon={skill.icon} />
                ))
              }
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  )
}
