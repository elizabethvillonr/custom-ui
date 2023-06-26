import { Col, Row } from 'antd'
import { SkillItem } from './SkillItem';

import { MY_SKILLS } from './mySkills';

export const Skills = () => {
  return (
    <div id="skills" className='app-container'>
      <div className='section-container' >

        <Row gutter={[16, 24]} justify={"center"}>
          <Col xs={20} sm={20} md={20} lg={18} xl={18}>
            <Row gutter={[16, 24]} justify={"center"}>
              {
                MY_SKILLS.map((skill) => (
                  <Col key={skill.title} xs={12} sm={8} md={8} lg={8} xl={4}>
                    <center>
                    <SkillItem title={skill.title} level={skill.level} Icon={skill.icon} />
                    </center>
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}
