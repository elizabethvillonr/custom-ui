import { Card, Col, Image, Row } from 'antd'
import React from 'react'

export const AboutMe = () => {
  return (
    <div id="about-me" className='app-container'>
      <div className='section-container' >

        <Row gutter={16} justify="center">
          <Col xs={20} sm={24} md={20} lg={18} xl={12}>
            <Card title="About Me" >
              <Row gutter={[16, 24]} justify="center" >
                <Col xs={22} sm={14} md={14} lg={12} xl={7}>
                  <center>
                  <Image
                    width={200}
                    src="https://media.licdn.com/dms/image/D4E03AQEH2nlbA_UHLA/profile-displayphoto-shrink_800_800/0/1686157792774?e=1693440000&v=beta&t=2AerN1tsDL2Pu39Mxiey4CQhvIuEVu9qPD3R7CQvVs4"
                  />
                  </center>
                </Col>
                <Col xs={22} sm={24} md={20} lg={12} xl={16} >
                  <p style={{textAlign:'justify'}}>
                    Hi! 👋
                    <br />
                    I'm a Software Engineer specialized in web development with +7 years of experience in building user-friendly web management applications.<br /> Proficient in JavaScript, ReactJS, NodeJS, MySQL, PHP, GIT, and English.<br /> I've worked designing and documenting new processes. Also, I have knowledge of SCRUM methodology and understanding of AWS resources. <br /> I'm very adaptable, results-driven, love working in a team, and have very good problem-solving skills.
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>

  )
}
