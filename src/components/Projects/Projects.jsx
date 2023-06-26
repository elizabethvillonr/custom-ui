import { Col, Row, Space } from 'antd'
import React from 'react'
import { ProjectItem } from './ProjectItem'
import { MY_PROJECTS } from './myProjects'

export const Projects = () => {
  return (
    <div id="projects" className='app-container'>
      <div className='section-container' >
        <Row gutter={16} justify={"center"} >
          <Col xs={24} sm={24} md={20} lg={16} xl={16}>
            <center>
              <Space wrap size={'large'}>
                {
                  MY_PROJECTS.map(project =>
                    <ProjectItem key={project.id} project={project} />
                  )
                }
              </Space>
            </center>
          </Col>
        </Row>
      </div>
    </div>
  )
}
